import React, { useRef } from 'react';

import { Header } from './Header';
import { CSSTransition } from 'react-transition-group';

import { enterAnimation } from './timeline/HomeTl';

import styles from './Home.module.scss';

import { ReactComponent as IconPlus } from 'static/svg/plus.svg';

export const Home = ({ isShow }) => {
	const cursorRef = useRef();

	const initCursor = cursor => {
		let clientX = -100;
		let clientY = -100;
		const cursorDote = cursor.querySelector('div');

		const scaleCustomCursor = (width, height) => {		
			cursorDote.style.width = `${width}px`;
			cursorDote.style.height = `${height}px`;	
			cursorDote.querySelector('svg').style.transform = 'scale(1)';
		}

		const setColorCustomCursor = hex => {
			cursorDote.style.borderColor = hex;
		};

		document.addEventListener('mousemove', e => {
			clientX = e.clientX;
			clientY = e.clientY;
		});

		document.querySelectorAll('[data-cursor="-color-white"]').forEach(node => {	
			node.addEventListener('mouseenter', () => setColorCustomCursor('#fafafa'));
		})

		document.querySelectorAll('[data-cursor="-color-dark"]').forEach(node => {		
			node.addEventListener('mouseenter', () => setColorCustomCursor('#1c1b1b'));
		})

		document.querySelectorAll('a').forEach(node => {		
			node.addEventListener('mouseenter', () => scaleCustomCursor(40, 40));
			node.addEventListener('mouseleave', () => scaleCustomCursor(5, 5));
		});
		
		const render = () => {
			cursorRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
			
			requestAnimationFrame(render);
		};
		requestAnimationFrame(render);
	};

  return (
		<CSSTransition 
			in={isShow}
			unmountOnExit
			onEnter={node => enterAnimation(node)}
			onEntered={() => initCursor(cursorRef.current)}
		>
			<div className={styles.block}>
				<div className={styles.cursorWrapper} ref={cursorRef}>
					<div className={styles.cursor}>
						<IconPlus className={styles.cursorIcon}/>
					</div>
				</div>				
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
