import axios from 'axios';
import { BASE_URL } from '../config';

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

const get = async (route) => {
    try {
        const { data, status } = await api.get(route);
        return { data, status };
    } catch (error) {
        if (error.response.status) {
            return {
                status: error.response.status,
                data: {}
            }
        } else {
            return {
                status: 500,
                data: {}
            }
        }
    }
}

const create = async (route, resource) => {
    try {
        const { data, status } = await api.post(route, resource);
        return { data, status };
    } catch (error) {
        if (error.response.status) {
            return {
                status: error.response.status,
                data: {}
            }
        } else {
            return {
                status: 500,
                data: {}
            }
        }
    }
}

const destroy = async (route) => {
    try {
        const { data, status } = await api.delete(route);
        return { data, status };
    } catch (error) {
        if (error.response.status) {
            return {
                status: error.response.status,
                data: {}
            }
        } else {
            return {
                status: 500,
                data: {}
            }
        }
    }
}

export default api;
export { get, create, destroy }