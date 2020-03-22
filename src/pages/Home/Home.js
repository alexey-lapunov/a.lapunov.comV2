import React from 'react';

import { CSSTransition } from 'react-transition-group';
import { enterAnimation } from './timeline/HomeTl';

import styles from './Home.module.scss';

export const Home = ({ isShow }) => {
  return (
		<CSSTransition 
			in={isShow}
			unmountOnExit
			onEnter={node => enterAnimation(node)}
		>
			<div className={styles.block}>
				<div className={styles.leftPenel}>
					<div className={styles.bg} data-animation='leftPanelBg'/>
				</div>
				<div className={styles.rightPenel}>
					<div className={styles.bg} data-animation='rightPanelBg'/>
				</div>
			</div>
		</CSSTransition>
	);
};
