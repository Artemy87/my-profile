import React from 'react';
import styles from './MyProjects.module.css';
import basicText from '../common/styles/BasicText.module.css';
import headerText from '../common/styles/HeaderText.module.css';

export const MyProjects = (props) => {
	return (
		<div className={styles.myProjects}>
			<div className={styles.myProjectsContainer}>
				<div className={`${headerText.headerText} ${styles.header}`}>
					My Projects
				</div>
				<div className={`${basicText.basicText} ${styles.projectsContainer}`}>
					{
						props.projects.map(project => {
							return (
								<div key={project.id} className={styles.projects}>
									<div className={styles.project}>
										{project.project}
									</div>
									<div className={styles.descriptionProjects}>
										{project.description}
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	);
};
