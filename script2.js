const fetch = require('node-fetch')

const getPeoplePromise = fetch => {
    return fetch('https://swapi.dev/api/people/')
        .then(res => res.json())
        .then(data => {
            return { count, results } = data

        })
}

const getPeople = async (fetch) => {
    const getRequest = await fetch('https://swapi.dev/api/people/')
    const data = await getRequest.json()

    return { count, results } = data

}

module.exports = {
    getPeoplePromise,
    getPeople

}