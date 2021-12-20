const axios = require('axios');

export default class DataFetch {
    constructor() {
        this.findInput = "";
        this.page = 1;
    }

    async fetchImages () {
        const URL = `https://pixabay.com/api/?key=24901331-8d9807a1a9b1c2247500253bc&q=${this.findInput}&page=${this.page}&per_page=40&image_type=photo,orientation=horizontal,safesearch=true,`;
        try {
            const response = await axios.get(URL);
            this.pageCounter()
            return response.data;
        } catch (error) {
            console.error(error)
        }
    }
    get valeu() {
        return this.findInput;
    }
    set valeu(valeu) {
        this.findInput = value;
    }
    clearPageCount() {
        this.page = 1;
    }
    pageCounter() {
        this.page += 1;
    }
}