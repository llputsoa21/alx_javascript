// List of Star Wars Characters

const request = require('request')
const process = require('process')
const fetch = require('node-fetch');
// const endpoint = 'https://swapi-api.alx-tools.com/api/films'
// const movieID = process.argv[2]

// request(`${endpoint}/${movieID}`, function(error, response, body){
//     const result = JSON.parse(body)
//     // this.result = result.results
//     for(const char in result['title']){
//         console.log(char)
//     }
//     // console.log(result.characters)
// })

function getMovieCharacters(movieId) {
    const url = `https://swapi.dev/api/films/${movieId}/`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to retrieve data for Movie ID ${movieId}: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            return data.characters;
        })
        .catch(error => {
            console.error(error.message);
            return null;
        });
}

function getCharacterName(characterUrl) {
    return fetch(characterUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to retrieve character data from ${characterUrl}: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            return data.name;
        })
        .catch(error => {
            console.error(error.message);
            return null;
        });
}

if (process.argv.length !== 3) {
    console.error("Usage: node script.js <Movie_ID>");
    process.exit(1);
}

const movieId = process.argv[2];

if (isNaN(movieId)) {
    console.error("Invalid Movie ID. Please provide a valid integer.");
    process.exit(1);
}

getMovieCharacters(movieId)
    .then(characters => {
        if (characters) {
            // console.log(`Characters in Star Wars Episode ${movieId}:`);

            const promises = characters.map(characterUrl => {
                return getCharacterName(characterUrl);
            });

            Promise.all(promises)
                .then(characterNames => {
                    characterNames.forEach(characterName => {
                        console.log(characterName);
                    });
                });
        }
    });