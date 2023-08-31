import { AppState } from "../AppState.js"
import { giphyService } from "../services/GiphyService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js"

function _drawSearch() {
    let template = ''
    AppState.search.forEach(gif => template += gif.searchTemplate)
    setHTML('giphyImages', template)
}


export class GiphyController {
    constructor() {
        console.log('gipy controller')
        AppState.on('search', _drawSearch)
    }

    async search() {
        try {
            window.event.preventDefault()
            let form = window.event.target
            let formData = getFormData(form)
            console.log(formData.toString())
            await giphyService.search(formData)
        } catch (error) {
            console.error(error)
        }
    }


}