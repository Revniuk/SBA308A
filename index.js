<!DOCTYPE html>
<html>
<head>
    <title>Cat Facts</title>
    <style>
        body {
            background-color: #ADD8E6;
            font-family: Arial, sans-serif;
            color: #006994;
        }
        h1, h2 {
            color: #008080;
        }
        button {
            background-color: #008080;
            color: white;
            border: none;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }
        button:hover {
            background-color: #4CAF50;
        }
        input[type=text] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            box-sizing: border-box;
            border: 3px solid #008080;
            border-radius: 4px;
        }
    </style>
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
