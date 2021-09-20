import { request } from "axios";

const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener('click', () => {
    var options = {
        method: 'GET',
        url: 'https://sridurgayadav-chart-lyrics-v1.p.rapidapi.com/apiv1.asmx/SearchLyricDirect',
        params: {artist: 'michael jackson', song: 'bad'},
        headers: {
            'x-rapidapi-host': 'sridurgayadav-chart-lyrics-v1.p.rapidapi.com',
            'x-rapidapi-key': 'undefined'
        }
    };

    request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
})
