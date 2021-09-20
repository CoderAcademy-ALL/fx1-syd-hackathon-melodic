function displaySongs(data){
    const div = document.createElement("div")
    if(data.length === 0) {
        div.innerText = "Result not found..."
        document.body.appendChild(div);
    }
    for (var i = 0; i < data.length; i++){
        div.classList.add("card", "align-items-center");
        var thumbnail = document.createElement("img");
        thumbnail.src = data[i].header_image_thumbnail_url;
        thumbnail.style.height = '300px';
        thumbnail.style.width = '300px';
        var a = document.createElement("a");
        a.innerHTML += `${data[i].full_title}`
        a.href = data[i].url;
        div.appendChild(thumbnail);
        div.appendChild(a);
    }
    document.body.appendChild(div);
}

var options = {
    method: 'GET',
    url: 'https://genius.p.rapidapi.com/artists/16775/songs',
    headers: {
        'x-rapidapi-host': 'genius.p.rapidapi.com',
        'x-rapidapi-key': 'ee685e6aadmshabc472a5750b606p1b5ea4jsn162990b75a3b'
    }
};

const getData = () =>{
    axios.request(options).then(function (res) {
        let rawData = res.data.response.songs;
        displaySongs(rawData)
    }).catch(function (err) {
        console.error(err);
    });
}


const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", getData());







    


