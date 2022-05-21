import styles from './Nav.module.css';

import React from 'react';

export const Nav = () => {
	return (
			<div className={styles.nav}>
				<a>Главная</a>
				<a>Скилы</a>
				<a>Проекты</a>
				<a>Контакты</a>
			</div>
	);
};
