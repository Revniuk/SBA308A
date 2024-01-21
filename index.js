<!DOCTYPE html>
<html>
<head>
    <title>Cat Facts</title>
</head>
<body>
    <h1>Cat Fact of the Day</h1>
    <p id="catFact"></p>

    <h2>Search Cat Facts</h2>
    <input type="text" id="searchInput" placeholder="Enter fact type">
    <button onclick="searchFact()">Search</button>
    <p id="searchResult"></p>

    <h2>Add a Cat Fact</h2>
    <input type="text" id="newFactInput" placeholder="Enter new fact">
    <button onclick="addFact()">Add Fact</button>

    <script>
        // Use Fetch API to get a random cat fact
        async function getRandomFact() {
            try {
                const response = await fetch('https://cat-fact.herokuapp.com/facts/random');
                const data = await response.json();
                // Display the cat fact
                document.getElementById('catFact').textContent = data.text;
            } catch (error) {
                console.error('Error fetching random cat fact:', error);
            }
        }
        getRandomFact();

        // Search for cat facts by type
        async function searchFact() {
            try {
                const type = document.getElementById('searchInput').value;
                const response = await fetch(`https://cat-fact.herokuapp.com/facts?animal_type=${type}`);
                const data = await response.json();
                if (data.all && data.all.length > 0) {
                    document.getElementById('searchResult').textContent = data.all[0].text;
                } else {
                    document.getElementById('searchResult').textContent = 'No matching cat facts found.';
                }
            } catch (error) {
                console.error('Error searching for cat facts:', error);
            }
        }

        // Add a new cat fact
        async function addFact() {
            try {
                const newFact = document.getElementById('newFactInput').value;
                const response = await fetch('https://github.com/alexwohlbruck/cat-facts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ text: newFact }),
                });
                const data = await response.json();
                alert('New fact added successfully!');
            } catch (error) {
                console.error('Error adding new cat fact:', error);
            }
        }
    </script>
</body>
</html>

