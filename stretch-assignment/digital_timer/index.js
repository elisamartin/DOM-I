/*
Counts up to 10 seconds
Increments every 10 ms
Has digits change to red when it gets to 10 seconds
Should not count past 10 seconds
*/

const secondsTens = document.getElementById('secondTens');
const secondsOnes = document.getElementById('secondOnes');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');

secondsTens.textContent = 0;
secondsOnes.textContent = 0;
msHundreds.textContent = 0;
msTens.textContent = 0;

setInterval(countUp10, 10000);

function countUp10() {
	secondsTens.textContent = +1;
}

for (let i = 0; i < 10; i++) {
	setInterval(countUp1, 1000);
	function countUp1() {
		secondsOnes.textContent = 1;
	}
}
