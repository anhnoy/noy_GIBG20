import axios from "axios";

const base_url = 'http://192.168.100.81:5000';

export default ()=>{

    return axios.create({baseURL:base_url});
}


