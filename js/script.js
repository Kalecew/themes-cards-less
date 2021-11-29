const theme_btn = document.querySelector('nav button')
theme_btn.onclick = function(){
	const link = document.querySelector('link');
	let old_href = link.getAttribute('href');
	let new_href = old_href.slice(-9,-8) == 1 ? old_href.replace('1','2') : old_href.replace('2','1');
	link.setAttribute('href',new_href);
};