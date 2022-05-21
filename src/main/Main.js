import React from 'react';
import styles from './Main.module.css';
import basicText from '../common/styles/BasicText.module.css';
import headerText from '../common/styles/HeaderText.module.css';

export const Main = () => {
	return (
		<div className={styles.aboutMeContainer}>
			<div className={headerText.headerText}>About Me</div>
			<div className={basicText.basicText}>Это описание меня. Я здесь что-то напишу и будет зашибись</div>
		</div>
	);
};
