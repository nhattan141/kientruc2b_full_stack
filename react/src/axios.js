import axios from 'axios';
import Routes from '../src/routes';

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/`
})

axiosClient.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('TOKEN')}`;
    return config;
});

axiosClient.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response && error.response.status === 401) {
        Routes.navigate('/login');
        return error;
    }
    throw error;
});

export default axiosClient;