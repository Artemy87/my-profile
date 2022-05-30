import React from 'react';
import styles from './Main.module.css';
import basicText from '../common/styles/BasicText.module.css';
import headerText from '../common/styles/HeaderText.module.css';

export const Main = () => {
	return (
		<div className={styles.main}>
			<div className={`${headerText.headerText} ${styles.header}`}>About Me</div>
			<div className={basicText.basicText}>Это описание меня. Я здесь что-то напишу и будет зашибись.
			<div>
				<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore iusto laborum modi quia quibusdam
					quod tempore totam. Accusamus commodi dolorum id laudantium libero mollitia nisi, quasi quia rem sequi!
				</div>
				<div>Corporis dolorem dolores est et fugit id inventore iure numquam odio omnis porro, quo, repellat, sapiente
					sunt totam velit voluptates. Ad aperiam, eius eveniet fuga ipsum magni perspiciatis qui voluptates.
				</div>
			</div>
			</div>
		</div>
	);
};
