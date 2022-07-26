'use strict';

const baseUrl = 'https://swapi.dev/api';
const peopleApi = '/people/';

document.getElementById('btn').addEventListener('click', () => {
	loadPeople(`${baseUrl}${peopleApi}`);
});

function loadPeople(url) {
	fetch(url)
		.then(res => res.json())
		.then(people => {
			for (let person of people.results) {
				renderUser(person);
			}

			people.next && renderLoadMoreBtn(people.next);
		});
}

function renderUser(user) {
	const parent = document.getElementById('content');
	const row = document.createElement('div');
	row.classList.add('row');

	// creation of columns

	const nameEl = document.createElement('div');
	nameEl.textContent = user.name;

	row.appendChild(nameEl);

	const genderEl = document.createElement('div');
	genderEl.textContent = user.gender;

	row.appendChild(genderEl);

	// const ageEl = document.createElement('div');
	// ageEl.textContent = user.age;

	// row.appendChild(ageEl);

	// const phoneEl = document.createElement('div');
	// phoneEl.textContent = user.phone;

	// row.appendChild(phoneEl);

	// const balanceEl = document.createElement('div');
	// balanceEl.textContent = user.balance;

	// row.appendChild(balanceEl);

	// add row to the content block
	parent.appendChild(row);
}

function renderLoadMoreBtn(link) {
	const loadMoreBtn = document.createElement('button');
	loadMoreBtn.classList.add('button-3');
	loadMoreBtn.setAttribute('role', 'button');
	loadMoreBtn.textContent = 'Load More';
	loadMoreBtn.addEventListener('click', () => {
		loadMoreBtn.remove();
		loadPeople(link);
	});

	document.getElementById('content').appendChild(loadMoreBtn);
}
