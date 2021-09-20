import axios from 'axios'

const listUsers = async () => {
    try {
        const res = await axios.get('api.genius.com/search?q=Kendrick%20Lamar');
        console.log(res.data.data);
    } catch (err) {
        console.error(err);
    }
};