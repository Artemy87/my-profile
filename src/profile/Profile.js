import React from 'react';
import styles from './Profile.module.css';
import image from '../assets/my-photo/photo.jpg';
import myCV from '../common/cv/webDeveloperCV.pdf'
import { Button } from "@material-ui/core";

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
				<div className={styles.linkGroup}>
					<Button href={myCV} download variant="contained">
						view my github
					</Button>
					<Button href="https://github.com/Artemy87" target='_blank' variant="contained">
						view my github
					</Button>
				</div>
			</div>
		</div>
	);
};
