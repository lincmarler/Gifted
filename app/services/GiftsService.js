import { AppState } from '../AppState.js'
import { baseURL } from '../env.js'
import { Gift } from '../models/Gift.js'
import { api } from './AxiosService.js'

// @ts-ignore



class GiftsService {

    async getGifts() {
        console.log('getting gifts')
        let res = await api.get('/api/gifts')
        console.log(res.data)
        AppState.gifts = res.data.map(dataObj => new Gift(dataObj))
        console.log(AppState.gifts)
    }

    async openGift(giftId) {
        let foundGift = AppState.gifts.find(gift => gift.id == giftId)
        foundGift.opened = true
        console.log(AppState.account)
        let res = await api.put(`/api/gifts/${giftId}`, foundGift)
        console.log(res.data)
    }
    async createGift(formData) {
        let res = await api.post('/api/gifts', formData)
        console.log(res.data)
        this.getGifts()
    }
}

export const giftsService = new GiftsService()
