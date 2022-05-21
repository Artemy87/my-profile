import React from 'react';
import styles from './App.module.css';
import { Profile } from "./profile/Profile";
import { Skills } from "./skills/Skills";
import { MyProjects } from "./my-projects/MyProjects";
import { Contacts } from "./contacts/Contacts";
import { Main } from "./main/Main";

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Profile/>
        <div className={styles.description}>
          <Main/>
          <Skills/>
          <MyProjects/>
          <Contacts/>
        </div>
      </div>
    </div>
  );
}


