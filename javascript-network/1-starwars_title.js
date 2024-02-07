// Star Wars API 

const process = require('process')
const request = require('request')
const endpoint = 'https://swapi-api.alx-tools.com/api/films'
const episode = process.argv[2]

request(`${endpoint}/${episode}`, function(error, response, body){
    if(error){
        console.log(error)
    }
    const result = JSON.parse(body)
    console.log(result['title'])
});