import React from 'react';
import styles from './Profile.module.css';
import image from './image/IMG_8373.JPG';

export const Profile = () => {
	return (
		<div className={styles.profile}>
			<div className={styles.container}>
				<div>
					<img className={styles.image} src={image} alt="Photo"/>
				</div>
				<div className={styles.textHi}>
					Привет, я
					<span className={styles.textName}>Артемий</span>
				</div>
				<div className={styles.textRD}>React разработчик.</div>
				<div className={styles.description}>Пару слов о моих навыках будут описаны здесь</div>
				<div className={styles.buttons}>
					<button>Download My CV</button>
					<button>Hire Me</button>
				</div>
			</div>
		</div>
	);
};