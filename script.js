import { getRandomFact } from './randomFact.js';
import { searchFact } from './searchFact.js';
import { addFact } from './addFact.js';

window.onload = async function() {
    document.getElementById('catFact').textContent = await getRandomFact();
}

window.searchFact = async function() {
    const type = document.getElementById('searchInput').value;
    document.getElementById('searchResult').textContent = await searchFact(type);
}

window.addFact = async function() {
    const newFact = document.getElementById('newFactInput').value;
    alert(await addFact(newFact));
}
