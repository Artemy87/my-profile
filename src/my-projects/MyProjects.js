import React from 'react';
import styles from './MyProjects.module.css';
import commonHeaderText from '../common/styles/HeaderText.module.css';

export const MyProjects = (props) => {
	return (
		<div className={styles.myProjects}>
				<div className={commonHeaderText.headerTitle}>
					My Projects
				</div>
				<div className={styles.projectsContainer}>
					{
						props.projects.map(project => {
							return (
								<div key={project.id} className={styles.projects}>
									<div className={styles.titleProject}>
										{project.title}
									</div>
									<div className={styles.descriptionProjects}>
										{project.description}
									</div>
									<div>
										<div className={styles.stackHeader}>Stack:</div>
										<div className={styles.stackContainer}>{project.stack.map((el, idx) => {
											return <div key={idx} className={styles.stack}>{el}</div>
										})}</div>
									</div>
								</div>
							)
						})
					}
				</div>
		</div>
	);
};
