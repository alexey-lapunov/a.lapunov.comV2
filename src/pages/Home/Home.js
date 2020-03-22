import React from 'react';

import { Header } from './Header';
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
					<div className={styles.leftPenelContainer}>
						<Header animationPrefix='header'/>
						<div className={styles.leftPenelBody}>
							<h1 className={styles.title} data-animation='title'>
								<span className={styles.titleText}>Alexey Lapunov</span>
							</h1>
							<span className={styles.desc} data-animation='desc'>
								<span className={styles.descText}>Front-End Developer</span>
							</span>
						</div>
						<div className={styles.leftPenelFooter}>
							<span className={styles.info} data-animation='info'>
								Check my Resume.
							</span>
							{/* 
							<span className={styles.info} data-animation='info'>
								I create mobile apps, websites and brand identities. I can optimize your current project and I am also ready to start working on your new project from scratch.
							</span> */}
						</div>						
					</div>
				</div>
				<div className={styles.rightPenel}>
					<div className={styles.bg} data-animation='rightPanelBg'/>
					<a 
						target="_blank" 
						className={styles.link}
						href="https://github.com/alexey-lapunov/a.lapunov.comV2" 
					>view source</a>
				</div>
			</div>
		</CSSTransition>
	);
};
