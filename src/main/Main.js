import React from 'react';
import styles from './Main.module.css';
import commonHeaderText from '../common/styles/HeaderText.module.css';

export const Main = () => {
	return (
		<div className={styles.main}>
			<div className={`${commonHeaderText.headerTitle} ${styles.header}`}>
				About Me
			</div>
			<div className={styles.content}>
				<div>
					Front-End developer with experience in creating SPA using JavaScript, TypeScript, React, Redux(RTK).
				</div>
				<div>
					I'm always looking forward to improve my expertise. Usually I spend my leisure time on Codewars or reading
					professional literature.
				</div>
			</div>
		</div>
	)
		;
};
