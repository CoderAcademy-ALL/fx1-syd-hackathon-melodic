// var axios = require('axios');
import { getLyrics, getSong } from './genius-lyrics-api/index.js';

const options = {
	apiKey: '2OTy71eWKNpsyDIKMTw8B5UM45fdWwVJMtJlVJYzQ1QUgyOtRShxnJ76ZLJ5Mq1r',
	title: 'Blinding Lights',
	artist: 'The Weeknd',
	optimizeQuery: true
};

const searchBtn = window.document.querySelector("#search-btn");

searchBtn.addEventListener('click', () => {
    getLyrics(options).then((lyrics) => console.log(lyrics));

	getSong(options).then((song) =>
		console.log(`
		${song.id}
		${song.title}
		${song.url}
		${song.albumArt}
		${song.lyrics}`)
	);
})