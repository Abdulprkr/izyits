const form = document.getElementById('vcard-form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	
	const name = document.getElementById('name').value;
	const number = document.getElementById('number').value;
	const secondaryNumber = document.getElementById('secondary-number').value;
	const company = document.getElementById('company').value;
	const email = document.getElementById('email').value;
	const website = document.getElementById('website').value;
	const linkedin = document.getElementById('linkedin').value;
	
	const vcard = `BEGIN:VCARD
VERSION:3.0
N:${name};;;;
FN:${name}
TEL;TYPE=CELL:${number}
TEL;TYPE=WORK:${secondaryNumber}
ORG:${company}
EMAIL;TYPE=WORK:${email}
URL;TYPE=WORK:${website}
URL;TYPE=LINKEDIN:${linkedin}
END:VCARD`;
