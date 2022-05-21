import React from 'react';
import styles from './Contacts.module.css';
import basicText from '../common/styles/BasicText.module.css';
import headerText from '../common/styles/HeaderText.module.css';

export const Contacts = () => {
	return (
		<div className={styles.contactsContainer}>
			<div className={headerText.headerText}>Contacts</div>
			<div className={basicText.basicText}>
				<div>Number 000000</div>
				<div>Telegramm - @T</div>
				<div>What's upp - @W</div>
				<div>LinkedIn - Art</div>
				<div>HH - link</div>
			</div>
		</div>
	);
};
