# SBA308A
cat facts app
Cat Facts Web Application
Welcome to the Cat Facts web application! This simple web page displays a random cat fact each time it's loaded. The application utilizes the Fetch API to communicate with the Cat Facts API, providing users with interesting and entertaining cat facts.

Features
Random Cat Fact: The page automatically fetches and displays a random cat fact when loaded.

Search Cat Facts: Users can search for cat facts by entering a specific type or category (e.g., "behavior") in the input field and clicking the "Search" button.

Add New Cat Facts: An input field and "Add Fact" button allow users to contribute their cat facts. Clicking the button triggers the addFact function, sending a POST request to the hypothetical API with the entered fact as a parameter. An alert notifies users of successful fact addition.

Cat Facts API
This project communicates with the Cat Facts API, an open-source API available on GitHub. Key details about the API:

Programming Language: JavaScript (Node.js)
Framework: Express
Database: Local JSON file


Functions
The application includes async functions such as getRandomFact, searchFact, and addFact. The getRandomFact function is invoked upon page load to fetch and display a random cat fact. The searchFact and addFact functions are triggered by user interactions, fetching data based on user input and updating the page accordingly. Any errors during these operations are caught and logged to the console.

Usage
Load the page to see a random cat fact.
Use the "Search Cat Facts" section to find facts related to a specific type or category.
Contribute your cat facts by entering a new fact and clicking the "Add Fact" button.
Feel free to explore the fascinating world of cat facts and enjoy your time on this interactive Cat Facts web application!





