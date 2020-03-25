import React, { useRef } from 'react';

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
				<div className={styles.leftPenel} data-cursor="-color-dark">
					<div className={styles.bg} data-animation='leftPanelBg'/>
					<div className={styles.leftPenelContainer}>
						<Header animationPrefix='header'/>
						<div className={styles.leftPenelBody} >
							<h1 className={styles.title} data-animation='title'>
								<span className={styles.titleLine}/>
								Alexey Lapunov
							</h1>
							<span className={styles.desc} data-animation='desc'>
								<span className={styles.descSquare}/>
								Front-End Developer
							</span>
						</div>
						<div className={styles.leftPenelFooter}>
							<a 
								href=''  
								data-animation='info' 
								className={styles.info} 
							>
								Check my Resume.
							</a>
						</div>						
					</div>
				</div>
				<div className={styles.rightPenel}>
					<div 
						className={styles.bg} 
						data-animation='rightPanelBg'
						data-cursor="-color-white"
					/>
					<a
						target="_blank" 
						data-animation='link'
						data-cursor="-color-dark"
						className={styles.link}
						href="https://github.com/alexey-lapunov/a.lapunov.comV2" 
					>view source</a>	
				</div>
				
			</div>
		</CSSTransition>
	);
};
