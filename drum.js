// const URL= https://swapi.dev/

fetch('https://swapi.dev')
.then(res => { 
        return res.json();
    })
    .then(data => {
        data.forEach(people => {
            const markup = `<li>${CharacterData}</li>`;

    document.querySelector('ul').insertAdjacentElement('beforeend', markup);
    })
})
    .catch(error => console.log(error));