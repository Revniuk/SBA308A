export async function addFact(newFact) {
    try {
        const response = await fetch('https://github.com/alexwohlbruck/cat-facts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: newFact }),
        });
        const data = await response.json();
        return 'New fact added successfully!';
    } catch (error) {
        console.error('Error adding new cat fact:', error);
    }
}
