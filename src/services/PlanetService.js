const baseURL = 'http://localhost:3000/api/planets/'

export default {
    getPlanets(){
        return fetch(baseURL)
        .then(res => res.json())
    },
}