import React from 'react';
import styles from './MyProjects.module.css';
import basicText from '../common/styles/BasicText.module.css';
import headerText from '../common/styles/HeaderText.module.css';

export const MyProjects = () => {
	return (
		<div className={styles.myProjectsContainer}>
			<div className={styles.myProjects}>
				<div className={headerText.headerText}>
					My Projects
				</div>
				<div className={basicText.basicText}>
					<div>projects 1</div>
					<div>projects 2</div>
					<div>projects 3</div>
				</div>
			</div>
		</div>
	);
};
