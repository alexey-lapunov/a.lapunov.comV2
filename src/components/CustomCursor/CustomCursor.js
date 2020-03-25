import React, { useRef, useEffect } from 'react';

import { getAnimations } from './timelines/CustomCursorTl';

import styles from './CustomCursor.module.scss';

export const CustomCursor = () => {
	const cursorRef = useRef();

	useEffect(() => {
		initCursor(cursorRef.current);
	})

	const initCursor = cursor => {
		let clientX = 100;
		let clientY = 100;

		const animations = getAnimations(cursor);
		const animationShow = animations.show();
		const animationScale = animations.scale();
		const animationColorWhite = animations.setColor('#fafafa');
		const animationColorDark = animations.setColor('#1c1b1b');

		document.addEventListener('mousemove', e => {
			clientX = e.clientX;
			clientY = e.clientY;
		});

		document.body.addEventListener('click', () => {
			animationShow.play();
		})

		document.querySelectorAll('[data-cursor="-color-white"]').forEach(node => {	
			node.addEventListener('mouseenter', () => animationColorWhite.play(0));
		})

		document.querySelectorAll('[data-cursor="-color-dark"]').forEach(node => {					
			node.addEventListener('mouseenter', () => animationColorDark.play(0));
		})

		document.querySelectorAll('a').forEach(node => {		
			node.addEventListener('mouseenter', () => animationScale.play());
			node.addEventListener('mouseleave', () => animationScale.reverse(0));
		});
		
		const render = () => {
			cursorRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
			
			requestAnimationFrame(render);
		};
		requestAnimationFrame(render);
	};

	return (
		<div className={styles.wrapper} ref={cursorRef}>
			<div className={styles.cursor}/>
		</div>
	)
}
