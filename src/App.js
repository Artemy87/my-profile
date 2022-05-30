import React from 'react';
import styles from './App.module.css';
import { Profile } from "./profile/Profile";
import { Skills } from "./skills/Skills";
import { MyProjects } from "./my-projects/MyProjects";
import { Contacts } from "./contacts/Contacts";
import { Main } from "./main/Main";

export default function App() {

	const skills = ['JavaScript', 'TypeScript', 'React', 'Redux', 'Redux-Thunk', 'Material UI', 'Unit Tests']
	const projects = [
		{id: 1, project: 'project1', description: 'My first project'},
		{id: 2, project: 'project2', description: 'Todolist'},
		{
			id: 3,
			project: 'project3',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore iusto laborum modi quia quibusdam quod tempore totam. Accusamus commodi dolorum id laudantium libero mollitia nisi, quasi quia rem sequi! Corporis dolorem dolores est et fugit id inventore iure numquam odio omnis porro, quo, repellat, sapiente sunt totam velit voluptates. Ad aperiam, eius eveniet fuga ipsum magni perspiciatis qui voluptates.'
		}
	];

	return (
		<div className={styles.app}>
			<div className={styles.container}>
				<Profile/>
				<div className={styles.description}>
					<Main/>
					<Skills skills={skills}/>
					<MyProjects projects={projects}/>
					<Contacts/>
				</div>
			</div>
		</div>
	);
}
