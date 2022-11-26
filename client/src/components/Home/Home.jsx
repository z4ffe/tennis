import React, {useEffect} from 'react';
import Result from "../Result/Result";
import styles from './Home.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchAllMatches} from "../../store/thunks/resultsThunk";
import {Spinner} from "react-bootstrap";

const Home = () => {
   const resultsStore = useSelector(state => state.results)
   const dispatch = useDispatch()

   useEffect(() => {
	  dispatch(fetchAllMatches())
   }, [])

   return (
	  <div className={styles.wrapper}>
		 {(!resultsStore.loading && resultsStore.matches.length) ? resultsStore.matches.map((match, idx) => (
			   <Result key={idx} props={match}/>
			)) :
			<Spinner animation="border" role="status" className="mt-5">
			   <span className="visually-hidden">Loading</span>
			</Spinner>
		 }
	  </div>
   );
};

export default Home;
