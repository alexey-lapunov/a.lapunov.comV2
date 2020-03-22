export const splitTextByWords = node => {
	if (!node) return '';

	const text = node.innerText;
	const arrayWord = text.split(' ');
	node.innerHTML = arrayWord.map(word => `<span>${word}</span>`).join(' ');

	return node;
}