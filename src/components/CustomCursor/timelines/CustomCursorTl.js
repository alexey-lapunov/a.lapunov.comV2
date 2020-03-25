import { TimelineMax as Timeline } from 'gsap';

export const getAnimations = node => {
	const wrapper = node;
	const cursor = wrapper.querySelector('div');

	const show = () => {
		const tl = new Timeline({ paused: true });

		tl.to(cursor, 0.6, {
			width: 8,
			height: 8,
			ease: 'Elastic.easeOut'
		})

		return tl;
	}

	const scale = () => {
		const tl = new Timeline({ paused: true });

		tl
			.to(cursor, 0, {
				backgroundColor: 'transparent'
			})
			.to(cursor, 0.6, {
				width: 40,
				height: 40,
				ease: 'Elastic.easeOut'
			})			

		return tl;
	}

	const setColor = hex => {
		const tl = new Timeline({ paused: true });

		tl
			.to(cursor, .3, {
				borderColor: hex,				
				ease: 'expo.inOut'
			})

		return tl;
	}

	return {
		show,
		scale,
		setColor
	}
}