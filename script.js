/*document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const responsesList = document.querySelector('#responses-list');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const groupLink = form.querySelector('#group_link').value;

        const formData = {
            name,
            email,
            group_link: groupLink,
            bot: 'Elaina',
        };

        try {
            const response = await fetch('send_data.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Form data submitted successfully!');
                // Refresh the responses list
                loadResponses();
            } else {
                alert('Error submitting form data.');
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    });

    // Function to load and display all responses
    async function loadResponses() {
        try {
            const response = await fetch('get_responses.php');
            if (response.ok) {
                const responseData = await response.json();
                responsesList.innerHTML = '';
                responseData.forEach(response => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `Name: ${response.name}, Email: ${response.email}, Group Link: ${response.group_link}, Bot: ${response.bot}`;
                    responsesList.appendChild(listItem);
                });
            } else {
                console.error('Error fetching responses.');
            }
        } catch (error) {
            console.error('Error fetching responses:', error);
        }
    }

    // Load responses when the page loads
    loadResponses();
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const responsesList = document.querySelector('#responses-list');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const groupLink = form.querySelector('#group_link').value;

        const formData = {
            name,
            email,
            group_link: groupLink,
            bot: 'Elaina',
        };

        try {
            const response = await fetch('./send_data.js', { // Change the route to your server endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Form data submitted successfully!');
                // Refresh the responses list
                loadResponses();
            } else {
                alert('Error submitting form data.');
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    });

    // Function to load and display all responses
    async function loadResponses() {
        try {
            const response = await fetch('./send_data.js'); // Change the route to your server endpoint
            if (response.ok) {
                const responseData = await response.json();
                responsesList.innerHTML = '';
                responseData.forEach(response => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `Name: ${response.name}, Email: ${response.email}, Group Link: ${response.group_link}, Bot: ${response.bot}`;
                    responsesList.appendChild(listItem);
                });
            } else {
                console.error('Error fetching responses.');
            }
        } catch (error) {
            console.error('Error fetching responses:', error);
        }
    }

    // Load responses when the page loads
    loadResponses();
});
*/

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const responsesList = document.querySelector('#responses-list');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const groupLink = form.querySelector('#group_link').value;

        const formData = {
            name,
            email,
            group_link: groupLink,
            bot: 'Elaina',
        };

        try {
            // Simulate submitting the form data (replace this with your actual logic)
            // For the sake of this example, we'll just add it to an array.
            submitFormData(formData);

            alert('Form data submitted successfully!');
            // Refresh the responses list
            loadResponses();
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    });

    const submittedResponses = []; // Array to store submitted responses

    // Function to simulate submitting form data
    function submitFormData(data) {
        submittedResponses.push(data);
    }

    // Function to load and display all responses
    function loadResponses() {
        responsesList.innerHTML = '';
        submittedResponses.forEach(response => {
            const listItem = document.createElement('li');
            listItem.textContent = `Name: ${response.name}, Email: ${response.email}, Group Link: ${response.group_link}, Bot: ${response.bot}`;
            responsesList.appendChild(listItem);
        });
    }

    // Load responses when the page loads
    loadResponses();
});
