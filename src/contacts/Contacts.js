import React from 'react';
import styles from './Contacts.module.css';
import basicText from '../common/styles/BasicText.module.css';
import commonHeaderText from '../common/styles/HeaderText.module.css';
import telegram from '../assets/images-contacts/telegram.jpeg';
import whatsapp from '../assets/images-contacts/whatsapp.png';
import linkedin from '../assets/images-contacts/linkedin.png';
import headhunter from '../assets/images-contacts/headhunter.png';

export const Contacts = () => {
	return (
		<form className={styles.contactsContainer}>
			<div className={commonHeaderText.headerTitle}>Contacts</div>
			<div className={`${basicText.basicText} ${styles.contacts}`}>
					<img src={telegram} alt="img Telegram"/>
					<img src={whatsapp} alt="img whatsUp"/>
					<img src={linkedin} alt="img LinkedIn"/>
					<img src={headhunter} alt="img HH"/>
			</div>
		</form>
	);
};
