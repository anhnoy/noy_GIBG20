import axios from "axios";

const base_url = 'http://192.168.100.35:9000/apis/';

export default ()=>{

    return axios.create({baseURL:base_url});
}


