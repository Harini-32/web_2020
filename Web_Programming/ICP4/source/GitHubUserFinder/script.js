// Get the GitHub username input form
const gitHubForm = document.getElementById('gitHubForm');

// Listen for submissions on GitHub username input form
gitHubForm.addEventListener('submit', (e) => {
    
    // Prevent default form submission action
    e.preventDefault();

    // Get the GitHub username input field on the DOM
    let usernameInput = document.getElementById('usernameInput');

    // Get the value of the GitHub username input field
    let gitHubUsername = usernameInput.value;          

    // Run GitHub API function, passing in the GitHub username
    requestUserRepos(gitHubUsername);

})


function requestUserRepos(username){
    
    // Create new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    
    // GitHub endpoint, dynamically passing in specified username
    const url = `https://api.github.com/users/${username}/repos`;
   
    // Open a new connection, using a GET request via URL endpoint
    // Providing 3 arguments (GET/POST, The URL, Async True/False)
    xhr.open('GET', url, true);
    
    // When request is received
    // Process it here
    xhr.onload = function () {
    
        // Parse API data into JSON
        const data = JSON.parse(this.response);

        let first_result = data[0];
        console.log(first_result)
        let second_result = data[0].owner;
        let user = document.getElementById('username');
        let userli = document.createElement('li');
        userli.classList.add('list-group-item')
        userli.innerHTML = (`
                <p><strong>Name:</strong> ${data[0].owner.login}</p>
                <p><strong>ID:</strong> ${data[0].id}</p>
                <p><strong>Profile Picture: <img src="${data[0].owner.avatar_url} width="50" height="60">
            `);
        user.appendChild(userli);
        
        for (let i in data) {
            console.log(i)
        
        // Loop over each object in data array

        
            // Get the ul with id of of userRepos
            let ul = document.getElementById('userRepos');

            
           
            // Create variable that will create li's to be added to ul
            let li = document.createElement('li');
            
            // Add Bootstrap list item class to each li
            li.classList.add('list-group-item')
        
    
               // if(i==0){
              
               // else{


            // Create the html markup for each li
            li.innerHTML = (`
                <p><strong>Repo:</strong> ${data[i].name}</p>
                <p><strong>Description:</strong> ${data[i].description}</p>
                <p><strong>URL:</strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
            `);
            
            // Append each li to the ul
            ul.appendChild(li);
        
        }

    }
    
    // Send the request to the server
    xhr.send();
    
}