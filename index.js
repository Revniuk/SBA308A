<!DOCTYPE html>
<html>
<head>
    <title>Cat Facts</title>
    <script type="module">
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
    </script>
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
</body>
</html>
