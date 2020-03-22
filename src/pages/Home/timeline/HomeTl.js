import { TimelineMax as Timeline } from 'gsap';

export const enterAnimation = node => {
	const tl = new Timeline({ paused: true, delay: 1.7 });

	const leftPanelBg = node.querySelector('[data-animation="leftPanelBg"]');
	const rightPanelBg = node.querySelector('[data-animation="rightPanelBg"]');

	tl
		.from(leftPanelBg, 0.5, {
			x: '-100%',
			ease: 'expo.inOut'
		}, 0)
		.to(rightPanelBg, 0.5, {
			x: '100%',
			ease: 'expo.inOut'
		}, 0.5);

	tl.play();
}	