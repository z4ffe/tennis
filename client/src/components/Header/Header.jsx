import React, {useState} from 'react';
import styles from './Header.module.scss'
import {Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import MenuIcon from '@mui/icons-material/Menu';
import {Box, createTheme, Drawer, ThemeProvider} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {Link as RouterLink} from 'react-router-dom';
import menuBackground from '../../assets/image/julia-kuzenkov-MGJSW4aMkkY-unsplash.jpg'

const Header = () => {
   const [menu, setMenu] = useState(false)

   const formTheme = createTheme({
	  typography: {
		 allVariants: {
			fontFamily: 'Nunito Sans',
			color: "white",
			fontSize: "1.3rem",
			textShadow: "1px 1px 1px black",
			fontWeight: 600
		 },
	  },
   });

   return (
	  <ThemeProvider theme={formTheme}>
		 <div className={styles.wrapper}>
			<Navbar>
			   <SportsTennisIcon className={styles.logo}/>
			   <LinkContainer to="/" className={styles.title}>
				  <Navbar.Brand>Ayanot Tennis Club</Navbar.Brand>
			   </LinkContainer>
			</Navbar>
			<Navbar variant="dark" className="justify-content-center p-0">
			   <Nav className={styles.links}>
				  <Nav.Item><LinkContainer to="/"><Nav.Link>Results</Nav.Link></LinkContainer></Nav.Item>
				  <Nav.Item><LinkContainer to="new"><Nav.Link>Add Match</Nav.Link></LinkContainer></Nav.Item>
				  <Nav.Item><LinkContainer to="admin"><Nav.Link>Dashboard</Nav.Link></LinkContainer></Nav.Item>
			   </Nav>
			</Navbar>
			<MenuIcon className={styles.burger} onClick={() => setMenu(!menu)}/>
			<Drawer anchor={'right'} open={menu} onClose={() => setMenu(!menu)} transitionDuration={250}
					PaperProps={{
					   sx: {
						  height: "max-content",
						  borderRadius: "0 0 0 10px",
						  backgroundImage: `url("${menuBackground}")`,
						  backgroundSize: "cover",
					   }
					}}
			>
			   <Box sx={{width: "13rem"}}>
				  <List>
					 <ListItem button component={RouterLink} to="/" onClick={() => setMenu(!menu)}>
						<ListItemIcon>
						   <HomeIcon style={{color: "white"}}/>
						</ListItemIcon>
						<ListItemText primary="Results"/>
					 </ListItem>
					 <ListItem button component={RouterLink} to="/new" onClick={() => setMenu(!menu)}>
						<ListItemIcon>
						   <MailIcon style={{color: "white"}}/>
						</ListItemIcon>
						<ListItemText primary="Add match"/>
					 </ListItem>
						<ListItem button component={RouterLink} to="/admin" onClick={() => setMenu(!menu)}>
						   <ListItemIcon>
							  <DashboardIcon style={{color: "white"}}/>
						   </ListItemIcon>
						   <ListItemText primary="Dashboard"/>
						</ListItem>
				  </List>
			   </Box>
			</Drawer>
		 </div>
	  </ThemeProvider>
   );
};

export default Header;
