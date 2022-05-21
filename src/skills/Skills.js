import React from 'react';
import styles from './Skills.module.css';
import basicText from '../common/styles/BasicText.module.css';
import headerText from '../common/styles/HeaderText.module.css';

export const Skills = () => {
	return (
		<div className={styles.skillsContainer}>
			<div>
				<div className={headerText.headerText}>
					Skills
				</div>
				<div className={basicText.basicText}>
					<div>JavaScript</div>
					<div>TypeScript</div>
					<div>React</div>
					<div>Redux</div>
					<div>Material UI</div>
					<div>Unit Tests</div>
				</div>
			</div>
		</div>
	);
};
