import { defineStore } from "pinia" ;

export const useGalleryStore = defineStore ('gallery' , {
    state : () => ({
        images : [],
        
    }) ,
    actions : {
     async   fill() {
              let data = await import('../jsonFolder/gallery.json')

                this.$state = data.default ;
                

            },
        
        
    }
    
    
    }) 