import axios from 'axios';

export function data() {
    return axios.get(`http://localhost:8000/projects`)
        .then(res=> res.data)
}