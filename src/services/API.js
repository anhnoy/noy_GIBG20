import axios from "axios";

const base_url = 'http://192.168.100.202:3030';

export default ()=>{

    return axios.create({baseURL:base_url});
}


