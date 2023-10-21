import { defineStore } from "pinia";

export const useGalleryStore = defineStore ('gallery' , {
    state : () => ({
        images : []
    }) ,
    actions : {
         fill() {
              import('../jsonFolder/gallery.json').then(r => {
                let data = r.default;

                this.images = data.images
            })
        }
         } ,

    
}) ;