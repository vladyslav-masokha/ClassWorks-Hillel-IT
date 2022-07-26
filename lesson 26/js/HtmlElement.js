'use strict';

class HtmlElement {
	constructor(tag, atributes, content) {
		this.tag = tag;
		this.atributes = atributes;
		this.content = content;
	}

	render(pos) {
		const insertEl = document.querySelector(pos);
		const createEl = document.createElement(this.tag);

		Object.keys(this.atributes).forEach(e => {
			if (e === 'className') {
				createEl.setAttribute('class', e);
			} else {
				createEl.setAttribute(e, this.atributes[e]);
				console.log(e);
			}
		});

		createEl.textContent = this.content;

		insertEl.append(createEl);
	}
}

const imgEl = new HtmlElement('img', { src: 'img.png' }, '');
imgEl.render('body');
console.log(imgEl);
