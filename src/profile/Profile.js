import React from 'react';
import styles from './Profile.module.css';
import image from '../assets/my-photo/photo.jpg';
import { Button } from "@material-ui/core";
import basicText from '../common/styles/BasicText.module.css';

export const Profile = () => {
	return (
		<div className={styles.profile}>
			<div className={styles.profile2}>
				<div>
					<img alt="avatar" className={styles.image} src={image}/>
				</div>
				<div className={styles.textGroup}>
					<div className={styles.textHi}>Hi! I am Artemii</div>
					<div className={styles.textRD}>React developer</div>
				</div>
				<div className={styles.buttons}>
					{/*<button>Download My CV</button>*/}
					{/*<button>Hire Me</button>*/}
					<Button variant="outlined">Download my CV</Button>
					{/*<Button variant="outlined">View my GitHub</Button>*/}
					<a className={`${basicText.basicText} ${styles.linkToGitHub}`} href="https://github.com/Artemy87">View my Github</a>
				</div>
			</div>
		</div>
	);
};
