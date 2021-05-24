submitData = (name, email) => {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify({name, email})
    })
    .then(response => response.json()) 
    .then(object => {
        document.body.textContent = object.id
    })
    .catch(error => {
        alert("Uh oh, something went wrong!");
        document.body.textContent = error.message
    })

}
