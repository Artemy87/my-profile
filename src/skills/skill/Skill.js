import React from 'react';
import styles from './Skill.module.css';

export const Skill = (props) => {
	return (
		<div className={styles.skill}>
			<img src="" alt='photo'/>
			{props.title}
		</div>
	);
};