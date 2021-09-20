// import axios from 'axios'


const listUsers = async () => {
    try {
        let res = await fetch('api.genius.com/artists/16775/songs');
        let data = await res.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};

const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
    console.log("hello");
    listUsers();   
});


