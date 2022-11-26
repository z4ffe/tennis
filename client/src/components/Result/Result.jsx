import React from 'react';
import styles from './Result.module.scss'

const Result = ({props}) => {

   return (
	  <div className={styles.wrapper}>
		 <div className={styles.player_one}>
			<div className={styles.player_one_score}>{props.playerOne.score}</div>
		 </div>
		 <div className={styles.main}>
			<div className={styles.main_playerone}>{`${props.playerOne.firstname} ${props.playerOne.lastname}`}</div>
			<div className={styles.main_divier}>vs</div>
			<div className={styles.main_playertwo}>{`${props.playerTwo.firstname} ${props.playerTwo.lastname}`}</div>
		 </div>
		 <div className={styles.main_sets}>Set score: {props.playerOne.sets.map(el => (
			el
			))}</div>
		 <div className={styles.main_sets2}>Set score: {props.playerTwo.sets.map(el => (
			el
			))}</div>
		 <div className={styles.main_date}>{`${new Date(props.date).toLocaleDateString()}`}</div>
		 <div className={styles.player_two}>
			<div className={styles.player_two_score}>{props.playerTwo.score}</div>
		 </div>
	  </div>
   );
};

export default Result;


