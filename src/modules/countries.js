const promise = await fetch('https://restcountries.com/v2/all');
const countries = await promise.json();

export default countries;