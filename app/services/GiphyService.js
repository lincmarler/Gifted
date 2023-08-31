import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";




// @ts-ignore
export const giphyApi = axios.create({
    baseURL: 'http://api.giphy.com/v1/gifs',
    timeout: 8000,
    params: {
        api_key: 'XXqqlBK7YR3uJR51syoXuYzVQQeKwXa3',
        rating: 'pg',
        limit: 10,
        q: ''
    }
});

class GiphyService {
    async search(formData) {
        console.log(giphyApi)
        // giphyApi = formData
        console.log(formData)
        const res = await giphyApi.get('search', {
            params: {
                q: `${formData}`
            }
        })
        console.log(res.data)
        AppState.search = res.data.data.map(gif => new Gift(gif))
        console.log(AppState.search)
    }

}

export const giphyService = new GiphyService