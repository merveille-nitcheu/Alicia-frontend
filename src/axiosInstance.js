import axios from "axios";
export const axiosInstance = axios.create({
	baseURL: "https://alicia.sagelink.fr/",
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	
	},
});

export default axiosInstance;