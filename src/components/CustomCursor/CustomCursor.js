import React from 'react';

import styles from './CustomCursor.module.scss';

import { ReactComponent as IconPlus } from 'static/svg/plus.svg';

export const CustomCursor = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.cursor}>
				<IconPlus className={styles.icon}/>
			</div>
		</div>
	)
}
