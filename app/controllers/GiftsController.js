import { AppState } from "../AppState.js"
import { giftsService } from "../services/GiftsService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"



function _drawGifts() {
    console.log('drawing gifts')
    let content = ''
    AppState.gifts.forEach(gift => content += gift.GiftListTemplate)
    setHTML('gift-list', content)
}



export class GiftsController {
    constructor() {
        console.log('gifts controller')
        this.getGifts()
        AppState.on('gifts', _drawGifts)
    }
    async getGifts() {
        try {
            await giftsService.getGifts()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }
    async openGift(giftId) {
        try {
            await giftsService.openGift(giftId)
            this.getGifts()
        } catch (error) {
            Pop.error
            console.error(error)
        }
    }
    async createGift() {
        try {
            window.event.preventDefault()
            let form = window.event.target
            let formData = getFormData(form)

            await giftsService.createGift(formData)
        } catch (error) {
            console.error(error)
        }
    }
}