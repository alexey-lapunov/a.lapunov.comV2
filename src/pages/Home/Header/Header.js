import React from 'react'

import styles from './Header.module.scss';

import { ReactComponent as Logo } from 'static/svg/logo.svg';

export const Header = ({ animationPrefix }) => {
	return (
		<div className={styles.block}>
			<div className={styles.logo} data-animation={`${animationPrefix}-logo`}>
				<Logo/>
			</div>
			<div className={styles.nav}>
				<div 
					className={styles.navItem} 
					data-animation={`${animationPrefix}-nav-item`}
				>
					<span className={styles.navItemText}>Contacts</span>
				</div>
				<div 
					className={styles.navItem} 
					data-animation={`${animationPrefix}-nav-item`}
				>
					<span className={styles.navItemText}>Resume</span>
				</div>
			</div>
		</div>
	)
}
