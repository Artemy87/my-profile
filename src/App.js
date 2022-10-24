import React from 'react';
import styles from './App.module.css';
import { Profile } from "./profile/Profile";
import { Skills } from "./skills/Skills";
import { MyProjects } from "./my-projects/MyProjects";
import { Contacts } from "./contacts/Contacts";
import { Main } from "./main/Main";
import { MyExperience } from "./my-experience/myExperience";

export default function App() {

	const experience = [
		{
			id: 1,
			title: 'Frontend developer at Artbronze, Moscow',
			year: 'february 2022 – august 2022',
			responsibilities: [
				'Web application development.',
				'Creating a UI of a web application using HTML5, CSS3, CSS Module based on Figma design layouts.',
				'Creating functional react components using react hooks.',
				'Creating product tables.',
				'Creating a personal account.',
				'Working with Rest API, Axios.',
				'Interaction with the team.',
				'Fix bugs.',
			],
			stack: [
				'TypeScript', 'React', 'Redux-Toolkit',
				'Formik', 'React Router', 'Axios',
				'HTML5', 'CSS3', 'Flex',
				'Figma', 'yarn',
			],
		},
		{
			id: 2,
			title: 'Frontend developer(IT-Incubator, Moscow)',
			year: 'may 2021– march 2022',
			responsibilities: [
				'SPA development using: React, Redux, TypeScript.',
				'Creating a UI of a web application using HTML5, CSS3, CSS Module, Figma design layouts.',
				'Creating functional react components using react hooks.',
				'Requests to servers. Work with Axios.',
				'Operation with CRUD.',
				'Working with Rest API, Axios.',
				'Interaction with the team.',
				'Fix bugs.',
			],
			stack: [
				'JavaScript', 'TypeScript', 'React',
				'React-Toolkit', 'Redux-Form', 'Axios',
				'Storybook', 'Postman', 'Jest',
				'Material UI', 'Axios', 'HTML5',
				'CSS3', 'Grid Layout', 'Flexible'
			],
		},
	]
	const projects = [
		{
			id: 1,
			title: 'Cards 2022',
			description: [
				'Командная разработка',
				'GitHub: https://github.com/Artemy87/cards',
				'Создавал визуальное представление web приложения с использованием HTML5, CSS Module, MaterialUI',
				'Создавал функциональные react-компоненты на хуках',
				'Правил баги',
				'Взаимодействовал с командой',
			],
			stack: [
				'TypeScript', 'React', 'Redux-Toolkit',
				'Formik', 'React Router', 'Material UI',
				'Axios', 'CSS-Module', 'Flexbox',
				'deploying'
			]
		},
		{
			id: 2,
			title: 'Todolist',
			description: [],
			stack: [
				'TypeScript','React', 'Redux-Toolkit', 'Redux-Thunk', 'MaterialUI', 'Axios', 'CSS-Module', 'deploying', 'модульные тесты'
			]
		},
		{
			id: 3,
			title: 'Social Network',
			description: [],
			stack: [
				'JavaScript', 'TypeScript', 'React', 'Redux', 'Redux-Thunk', 'Redux-Form', 'Material UI', 'Axios', 'CSS-Module', 'deploying'
			]
		}
	];

	return (
		<div className={styles.app}>
			<div className={styles.container}>
				<Profile/>
				<div className={styles.description}>
					<Main/>
					<Skills />
					<MyExperience experience={experience}/>
					<MyProjects projects={projects}/>
					<Contacts/>
				</div>
			</div>
		</div>
	);
}
