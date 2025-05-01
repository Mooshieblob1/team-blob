// src/lib/actions/showOnScrollToBottom.ts
export function showOnScrollToBottom(node: HTMLElement) {
	const onScroll = () => {
		const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
		node.style.opacity = isAtBottom ? '1' : '0';
	};

	window.addEventListener('scroll', onScroll);
	onScroll(); // run on mount

	return {
		destroy() {
			window.removeEventListener('scroll', onScroll);
		}
	};
}
