import { TimelineMax as Timeline } from 'gsap';
import { splitTextByWords } from 'utils/splitTextByWord';

export const enterAnimation = node => {
	const tl = new Timeline({ paused: true, delay: 1.7 });

	const leftPanelBg = node.querySelector('[data-animation="leftPanelBg"]');
	const rightPanelBg = node.querySelector('[data-animation="rightPanelBg"]');
	const logo = node.querySelector('[data-animation="header-logo"]');
	const navItems = node.querySelectorAll('[data-animation="header-nav-item"] span');
	const title = node.querySelector('[data-animation="title"] span');
	const desc = node.querySelector('[data-animation="desc"] span');
	const info = node.querySelectorAll('[data-animation="info"]');

	tl
		.to(leftPanelBg, 0.5, {
			x: '100%',
			ease: 'expo.inOut'
		}, 0)
		.to(rightPanelBg, 0.5, {
			x: '100%',
			ease: 'expo.inOut'
		}, 0.5)
		.from(logo, 0.4, {
			scale: 0,
			ease: 'expo.inOut'
		}, 1.3)
		.staggerFrom(navItems, 0.4, {
			y: '100%',
			ease: 'expo.inOut'
		}, 0.025, 1.5)
		.from(title, 0.4, {
			y: '100%',
			ease: 'expo.inOut'
		}, 1.5)
		.from(desc, 0.4, {
			y: '100%',
			ease: 'expo.inOut'
		}, 1.5)

	tl.play();
}