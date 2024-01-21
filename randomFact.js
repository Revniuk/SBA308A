export async function getRandomFact() {
    try {
        const response = await fetch('https://cat-fact.herokuapp.com/facts/random');
        const data = await response.json();
        return data.text;
    } catch (error) {
        console.error('Error fetching random cat fact:', error);
    }
}
