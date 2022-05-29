import React from 'react';
import { Skill } from './skill/Skill'
import styles from './Skills.module.css';
import basicText from '../common/styles/BasicText.module.css';
import headerText from '../common/styles/HeaderText.module.css';

export const Skills = (props) => {
	return (
		<div className={styles.skills}>
			<div>
				<div className={`${headerText.headerText} ${styles.headerSkillsContainer}`}>
					Skills
				</div>
				<div className={basicText.basicText}>
					<div className={styles.headerSkills}>Основные скилы</div>
					<div className={styles.skillsContainer}>
						{
							props.skills.map((skill, index) => {
								return <Skill key={index} title={skill}/>
							})
						}
					</div>
				</div>
			</div>
		</div>
	);
};
