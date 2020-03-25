import { TimelineMax as Timeline } from 'gsap';

export const enterAnimation = node => {
	const tl = new Timeline({ paused: true, delay: 1.7 });

	const leftPanelBg = node.querySelector('[data-animation="leftPanelBg"]');
	const rightPanelBg = node.querySelector('[data-animation="rightPanelBg"]');
	const logo = node.querySelector('[data-animation="header-logo"]');
	const navItems = node.querySelectorAll('[data-animation="header-nav-item"] span');
	const title = node.querySelector('[data-animation="title"]');
	const titleLine = title.querySelector('span');
	const desc = node.querySelector('[data-animation="desc"]');
	const descSquare = desc.querySelector('[data-animation="desc"] span');
	const info = node.querySelectorAll('[data-animation="info"]');
	const link = node.querySelector('[data-animation="link"]');

	tl
		.to(leftPanelBg, 0.5, {
			x: '100%',
			ease: 'expo.inOut'
		}, 0)
		.from(rightPanelBg, 0.5, {
			x: '-100%',
			ease: 'expo.inOut'
		}, 0.5)
		.from(logo, 0.4, {
			scale: 0,
			rotate: 360, 
			ease: 'SlowMo.ease'
		}, 1.2)
		.staggerFrom(navItems, 0.4, {
			y: '-100%',
			ease: 'SlowMo.ease'
		}, 0.025, 1.4)
		.from(title, 0.4, {
			y: '-100%',
			opacity: 0,
			ease: 'SlowMo.ease'
		}, 1.6)
		.from(titleLine, 0.4, {
			scaleY: 0,
			ease: 'SlowMo.ease'
		}, 2.8)
		.from(desc, 0.4, {
			y: '-100%',
			opacity: 0,
			ease: 'SlowMo.ease'
		}, 2.0)
		.from(descSquare, 0.4, {
			scale: 0,
			rotate: 360, 
			ease: 'SlowMo.ease'
		}, 3.0)
		.from(info, 0.4, {
			y: '-100%',
			opacity: 0,
			ease: 'SlowMo.ease'
		}, 2.4)
		.from(link, 0.4, {
			x: '100%'	,
			ease: 'SlowMo.ease'
		}, 2.6)
		
	tl.play();
}