import axios from "axios";

const axiosNormal = axios.create({
    baseURL: 'https://book-waves-server.vercel.app',
})

const useAxiosNormal = () => {
    return axiosNormal;
};

export default useAxiosNormal;