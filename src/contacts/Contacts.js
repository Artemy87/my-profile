import React from 'react';
import styles from './Contacts.module.css';
import basicText from '../common/styles/BasicText.module.css';
import headerText from '../common/styles/HeaderText.module.css';
import telegram from '../common/images-contacts/telegram.jpeg';
import whatsapp from '../common/images-contacts/whatsapp.jpeg';
import linkedin from '../common/images-contacts/linkedIn.jpeg';
import headhunter from '../common/images-contacts/headhunter.webp';

export const Contacts = () => {
	return (
		<form className={styles.contactsContainer}>
			<div className={`${headerText.headerText} ${styles.header}`}>Contacts</div>
			<div className={`${basicText.basicText} ${styles.contacts}`}>
					<img src={telegram} alt="img Telegram"/>
					<img src={whatsapp} alt="img whatsUp"/>
					<img src={linkedin} alt="img LinkedIn"/>
					<img src={headhunter} alt="img HH"/>
			</div>
		</form>
	);
};
