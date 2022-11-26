import React, {useState} from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup'
import TextField from '@mui/material/TextField';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Button, ButtonGroup, createTheme, InputAdornment, ThemeProvider} from "@mui/material";
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {useDispatch} from "react-redux";
import {addMatch} from "../../store/thunks/resultsThunk";
import styles from './NewMatch.module.scss'
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {ShowToast} from "../../utils/toast";

const NewMatch = () => {
   const dispatch = useDispatch()
   const [showPassword, setShowPassword] = useState(false)

   const formik = useFormik({
	  initialValues: {
		 playerone_firstname: '',
		 playerone_lastname: '',
		 playertwo_firstname: '',
		 playertwo_lastname: '',
		 playerone_score: '',
		 playertwo_score: '',
		 playerone_sets: '',
		 playertwo_sets: '',
		 date: new Date().toISOString(),
		 password: ''
	  },
	  validationSchema: Yup.object({
		 playerone_firstname: Yup.string()
			.required('First name is required')
			.min(3, 'Minimum length is 3 chars'),
		 playertwo_firstname: Yup.string()
			.required('First name is required')
			.min(3, 'Minimum length is 3 chars'),
		 playerone_score: Yup.number()
			.required('Game score is required')
			.max(10, '10 Game score is max value'),
		 playertwo_score: Yup.number()
			.required('Game score is required')
			.max(10, '10 Game score is max value'),
		 playerone_sets: Yup.string()
			.required('Sets score is required'),
		 playertwo_sets: Yup.string()
			.required('Sets score is required'),
		 date: Yup.date()
			.required('Date is required'),
		 password: Yup.string()
			.required('Password is required for adding match!'),
	  }),
	  onSubmit: (values, {resetForm}) => {
		 const result = {
			playerOne: {
			   firstname: values.playerone_firstname,
			   lastname: values.playerone_lastname,
			   score: values.playerone_score,
			   sets: values.playerone_sets.toString().split('').map(el => Number(el))
			},
			playerTwo: {
			   firstname: values.playertwo_firstname,
			   lastname: values.playertwo_lastname,
			   score: values.playertwo_score,
			   sets: values.playertwo_sets.toString().split('').map(el => Number(el))
			},
			date: values.date,
			password: values.password
		 }
		 dispatch(addMatch(result))
			.unwrap()
			.then(response => ShowToast('success', 'New match added'))
			.catch(error => ShowToast('error', 'Wrong password'))
		 resetForm()
	  }
   })

   const formTheme = createTheme({
	  typography: {
		 allVariants: {
			fontFamily: 'Nunito Sans',
		 },
	  },
   });

   return (
	  <ThemeProvider theme={formTheme}>
		 <div className={styles.wrapper}>
			<form onSubmit={formik.handleSubmit} className={styles.form}>
			   <div className="d-flex justify-content-center gap-5">
				  <div className="d-flex flex-column gap-2">
					 <h5 className={styles.title}>Player 1</h5>
					 <TextField
						fullWidth
						id="playerone_firstname"
						name="playerone_firstname"
						label="First name"
						value={formik.values.playerone_firstname}
						onChange={formik.handleChange}
						error={formik.touched.playerone_firstname && Boolean(formik.errors.playerone_firstname)}
						helperText={formik.touched.playerone_firstname && formik.errors.playerone_firstname}
					 />
					 <TextField
						fullWidth
						id="playerone_lastname"
						name="playerone_lastname"
						label="Last name"
						value={formik.values.playerone_lastname}
						onChange={formik.handleChange}
						error={formik.touched.playerone_lastname && Boolean(formik.errors.playerone_lastname)}
						helperText={formik.touched.playerone_lastname && formik.errors.playerone_lastname}
					 />
					 <TextField
						fullWidth
						id="playerone_score"
						name="playerone_score"
						label="Score"
						type="number"
						value={formik.values.playerone_score}
						onChange={formik.handleChange}
						error={formik.touched.playerone_score && Boolean(formik.errors.playerone_score)}
						helperText={formik.touched.playerone_score && formik.errors.playerone_score}
					 />
					 <TextField
						fullWidth
						id="playerone_sets"
						name="playerone_sets"
						label="Sets eg. 6482"
						type="number"
						value={formik.values.playerone_sets}
						onChange={formik.handleChange}
						error={formik.touched.playerone_sets && Boolean(formik.errors.playerone_sets)}
						helperText={formik.touched.playerone_sets && formik.errors.playerone_sets}
					 />
				  </div>
				  <div className="d-flex flex-column gap-2">
					 <h5 className={styles.title}>Player 2</h5>
					 <TextField
						fullWidth
						id="playertwo_firstname"
						name="playertwo_firstname"
						label="First name"
						value={formik.values.playertwo_firstname}
						onChange={formik.handleChange}
						error={formik.touched.playertwo_firstname && Boolean(formik.errors.playertwo_firstname)}
						helperText={formik.touched.playertwo_firstname && formik.errors.playertwo_firstname}
					 />
					 <TextField
						fullWidth
						id="playertwo_lastname"
						name="playertwo_lastname"
						label="Last name"
						value={formik.values.playertwo_lastname}
						onChange={formik.handleChange}
						error={formik.touched.playertwo_lastname && Boolean(formik.errors.playertwo_lastname)}
						helperText={formik.touched.playertwo_lastname && formik.errors.playertwo_lastname}
					 />
					 <TextField
						fullWidth
						id="playertwo_score"
						name="playertwo_score"
						label="Score"
						type="number"
						value={formik.values.playertwo_score}
						onChange={formik.handleChange}
						error={formik.touched.playertwo_score && Boolean(formik.errors.playertwo_score)}
						helperText={formik.touched.playertwo_score && formik.errors.playertwo_score}
					 />
					 <TextField
						fullWidth
						id="playertwo_sets"
						name="playertwo_sets"
						label="Sets eg. 6482"
						type="number"
						value={formik.values.playertwo_sets}
						onChange={formik.handleChange}
						error={formik.touched.playertwo_sets && Boolean(formik.errors.playertwo_sets)}
						helperText={formik.touched.playertwo_sets && formik.errors.playertwo_sets}
					 />
				  </div>
			   </div>
			   <LocalizationProvider dateAdapter={AdapterDayjs}>
				  <DesktopDatePicker
					 className={styles.date}
					 ignoreInvalidInputs={true}
					 label="date"
					 inputFormat="DD/MM/YYYY"
					 maxDate={formik.values.date}
					 value={formik.values.date}
					 onChange={(value) => formik.setFieldValue('date', value.toISOString())}
					 renderInput={(params) => <TextField {...params} />}
				  />
			   </LocalizationProvider>
			   <TextField
				  fullWidth
				  className={styles.password}
				  id="password"
				  name="password"
				  label="Password"
				  type={showPassword ? 'text' : 'password'}
				  value={formik.values.password}
				  onChange={formik.handleChange}
				  error={formik.touched.password && Boolean(formik.errors.password)}
				  helperText={formik.touched.password && formik.errors.password}
				  InputProps={{
					 endAdornment: (
						<InputAdornment position="end">
						   {showPassword ? <VisibilityOff style={{cursor: "pointer"}}
														  onClick={() => setShowPassword(!showPassword)}/> :
							  <Visibility style={{cursor: "pointer"}} onClick={() => setShowPassword(!showPassword)}/>}
						</InputAdornment>
					 ),
				  }}
			   />
			   <ButtonGroup variant="text" aria-label="text button group" color="info" className={styles.buttons}>
				  <Button color="success" variant="text" fullWidth type="submit">Add match</Button>
				  <Button color="error" variant="text" fullWidth onClick={formik.resetForm}>Reset</Button>
			   </ButtonGroup>
			</form>
		 </div>
	  </ThemeProvider>
   );
};

export default NewMatch;
