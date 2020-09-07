import axios from 'axios'

class Axios {
	configuration = {}

	/**
	 * Get collection of resources from API server
	 * @param url String
	 * @returns Promise<AxiosResponse<any>>
	 */
	public async get(url: string) {
		return await axios.get(url, this.configuration)
	}

	/**
	 * Create resources from API server
	 * @param url String
	 * @param data Data<any>
	 * @returns Promise<AxiosResponse<any>>
	 */
	public async post(url: string, data: any) {
		return await axios.post(url, data, this.configuration)
	}

	/**
	 * Update resources from API server
	 * @param url String
	 * @param data Data<any>
	 * @returns Promise<AxiosResponse<any>>
	 */
	public async put(url: string, data: any) {
		return await axios.put(url, data, this.configuration)
	}

	/**
	 * Delete resources from API server
	 * @param url String
	 * @returns Promise<AxiosResponse<any>>
	 */
	public async delete(url: string) {
		return await axios.delete(url, this.configuration)
	}
}