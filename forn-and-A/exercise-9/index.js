// Function using Promise
function helloWorld() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000);
    });
}

// Async function to show message
async function messages() {
    const msg = await helloWorld();
    console.log(msg);
}

// Call the messages function
messages();

// Function to fetch user data using Fetch API
function ambilDataUserFetch() {
    fetch("https://reqres.in/api/users")
        .then((response) => response.json())
        .then((users) => {
            console.log(users.data);
        })
        .catch((error) => console.error('Error:', error));
}

// Function to fetch user data using Async/Await
async function ambilDataUserAsync() {
    try {
        const response = await fetch("https://reqres.in/api/users");
        const users = await response.json();
        console.log(users.data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to fetch user data using Axios
async function ambilDataUserAxios() {
    try {
        const response = await axios.get("https://reqres.in/api/users");
        console.log(response.data.data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Add event listener to button
document.getElementById('fetchDataButton').addEventListener('click', () => {
    ambilDataUserAxios(); // Call the Axios function when button is clicked
});

// Fetch user data using Fetch API on load (optional)
ambilDataUserFetch();
