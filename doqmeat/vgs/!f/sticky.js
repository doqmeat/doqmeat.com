// targets sticky element when it sticks!! source: https://css-tricks.com/how-to-detect-when-a-sticky-element-gets-pinned/

const el = document.querySelector("nav");
const observer = new IntersectionObserver(
	([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
	{ threshold: [1] }
);

observer.observe(el);
