import { TimelineMax as Timeline } from 'gsap';
import { splitTextByWords } from 'utils/splitTextByWord';

export const showBaseLoader = node => {
  const tl = new Timeline({ paused: true });

  const title = node.querySelector('[data-animation="title"]');
	const subtitle = node.querySelector('[data-animation="subtitle"]');
	const subtitleWords = splitTextByWords(subtitle).querySelectorAll('span');

	tl
		.from(title, .5, {
			y: '100%',
			ease: 'expo.inOut'
		}, .5)
		.staggerFrom(subtitleWords, .7, {
			y: '100%',
			ease: 'expo.inOut'
		}, 0.035, .7);

  tl.play();
};

export const hiddenBaseLoader = node => {
	const tl = new Timeline({ paused: true });

	const line = node.querySelector('[data-animation="line"]');

	tl
		.to(line, .5, {
			width: '60%',
			ease: 'expo.inOut'
		}, 0)
		.to(line, .5, {
			height: '100%',
			ease: 'expo.inOut'
		}, .7)

	tl.play();
}
