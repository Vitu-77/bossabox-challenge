import axios from 'axios';

const api = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	timeout: 1000,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': 'http://localhost:3000',
	},
});

const get = async (route) => {
	try {
		const { data, status } = await api.get(route);
		return { data, status };
	} catch (error) {
		if (error.response) {
			return {
				status: error.response.status,
				data: {},
			};
		} else {
			return {
				status: 500,
				data: {},
			};
		}
	}
};

const create = async (route, resource) => {
	try {
		const { data, status } = await api.post(route, resource);
		return { data, status };
	} catch (error) {
		if (error.response) {
			return {
				status: error.response.status,
				data: {},
			};
		} else {
			return {
				status: 500,
				data: {},
			};
		}
	}
};

const destroy = async (route) => {
	try {
		const { data, status } = await api.delete(route);
		return { data, status };
	} catch (error) {
		if (error.response) {
			return {
				status: error.response.status,
				data: {},
			};
		} else {
			return {
				status: 500,
				data: {},
			};
		}
	}
};

export default api;
export { get, create, destroy };
