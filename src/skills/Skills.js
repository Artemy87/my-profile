import React from 'react';
import styles from './Skills.module.css';
import basicText from '../common/styles/BasicText.module.css';
import commonHeaderText from '../common/styles/HeaderText.module.css';
import axios from '../assets/img-skills/axios.png'
import react from '../assets/img-skills/react.svg'
import redux from '../assets/img-skills/redux.svg'
import typescript from '../assets/img-skills/typescript.svg'
import css3 from '../assets/img-skills/css3.svg'
import html5 from '../assets/img-skills/html5.svg'
import storybook from '../assets/img-skills/storybook.png'
import jest from '../assets/img-skills/jest.svg'
import git from '../assets/img-skills/git.svg'
import yarn from '../assets/img-skills/yarn.jpeg'

export const Skills = () => {
	return (
		<div className={styles.skills}>
			<div>
				<div className={`${commonHeaderText.headerTitle} ${styles.headerSkillsContainer}`}>
					Basic skills
				</div>
				<div className={basicText.basicText}>
					<div className={styles.skillsContainer}>
						<img className={styles.icons} src={typescript} alt="typescript"/>
						<img className={styles.icons} src={react} alt="react"/>
						<img className={styles.icons} src={redux} alt="redux"/>
						<img className={styles.icons} src={axios} alt="axios"/>
						<img className={styles.icons} src={storybook} alt="storybook"/>
						<img className={styles.icons} src={jest} alt="jest"/>
						<img className={styles.icons} src={git} alt="git"/>
						<img className={styles.icons} src={yarn} alt="yarn"/>
						<img className={styles.icons} src={css3} alt="css3"/>
						<img className={styles.icons} src={html5} alt="html5"/>
					</div>
				</div>
			</div>
		</div>
	);
};
