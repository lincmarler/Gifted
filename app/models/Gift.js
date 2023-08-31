export class Gift {
    constructor(data) {
        this.id = data.id
        this.tag = data.tag || ''
        this.url = data.url || 'https://plus.unsplash.com/premium_photo-1668790939920-f5f0a5c34b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=711&q=80'
        this.opened = data.opened
    }

    get searchTemplate() {
        return `
        
        <img src="https://giphy.com/gifs/skimasktheslumpgod-ski-mask-the-slump-god-doihavethesause-Zv92eeM2CFBhudTXIn">
<p>${this.url}</p>
`
    }

    get GiftListTemplate() {
        return `<div class="card col-3 elevation-2">
  <img class="img-fluid" src="${this.url}" alt="">
  <h4>${this.tag}</h4>
 ${this.calculateButton()}
</div>
        `
    }

    calculateButton() {
        if (this.opened == false) {
            return `<button class="btn btn-success text-light" onclick="app.GiftsController.openGift('${this.id}')">OPEN DA GIFT</button>`
        } else { return '' }
    }
}

