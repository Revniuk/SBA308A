export async function searchFact(type) {
    try {
        const response = await fetch(`https://cat-fact.herokuapp.com/facts?animal_type=${type}`);
        const data = await response.json();
        if (data.all && data.all.length > 0) {
            return data.all[0].text;
        } else {
            return 'No matching cat facts found.';
        }
    } catch (error) {
        console.error('Error searching for cat facts:', error);
    }
}
