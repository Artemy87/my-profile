import React from 'react';
import styles from './myExperience.module.css'
import commonHeaderText from "../common/styles/HeaderText.module.css";

export const MyExperience = ({experience}) => {
	return (
		<div className={styles.myExperience}>
			<div className={commonHeaderText.headerTitle}>
				Experience
			</div>
			{experience.map(ex => {
				return (
					<div key={ex.id} className={`${styles.contentBlock}`}>
						<div className={styles.contentHeader}>{ex.title}</div>
						<div className={styles.year}>({ex.year})</div>
						<div className={styles.responsibilitiesHeader}>Responsibilities:</div>
						{
							ex.responsibilities && ex.responsibilities.map((el, idx) => {
							return <div key={idx} className={styles.content}>{el}</div>
						})}
						<div>
							<div className={styles.stackHeader}>Technology stack:</div>
							<div className={styles.stackContainer}>
								{ex.stack.map((el, idx) => {
									return (
										<div key={idx} className={styles.stack}>
											{el}
										</div>
									)
								})}</div>
						</div>
					</div>
				)
			})}
		</div>
	);
};

