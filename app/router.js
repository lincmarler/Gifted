import { AboutController } from "./controllers/AboutController.js";
import { GiftsController } from "./controllers/GiftsController.js";
import { GiphyController } from "./controllers/GiphyController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [GiftsController, GiphyController],
    view: /*html*/`
<div class="row" >
  <div class="col-8" >
    <div class="row" id="gift-list"></div>
      </div>
        <div class="col-4" id="gift-form">
          <form action="" onsubmit="app.GiftsController.createGift()">
            <input type="text" name="url" placeholder="Image URL">
            <input type="text" name="tag" placeholder="Tag">
            <button type="submit" class="btn btn-info">SUBMIT</button>
          </form> 
          <form onsubmit="app.GiphyController.search()" class="mt-5">
            <input type="text" placeholder="search">
            <button type="submit" class="btn btn-primary">Search</button>
          </form>
          <section id="giphyImages"></section>
        </div>
      </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */