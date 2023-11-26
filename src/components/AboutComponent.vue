<template>
    <div class="about">
        <div class="text">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus sequi saepe nemo, eaque voluptate similique quidem tenetur consequuntur aspernatur totam quisquam, vero tempora vitae nesciunt soluta modi cupiditate, nam veritatis.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui aut doloribus quo recusandae eius facilis harum ea veniam dignissimos optio dolor deleniti, voluptatibus incidunt nostrum dolorem quod corporis temporibus culpa.  
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ipsa dolorem neque, perferendis nihil veritatis quaerat tempora inventore corrupti, dolore odit sit officia explicabo optio nostrum aspernatur voluptatum similique beatae.   
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam modi qui inventore quidem. Error doloribus quam aliquam magnam voluptate quas totam. Necessitatibus quaerat accusantium vero sed sint excepturi illum nesciunt.

        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, optio doloribus nemo explicabo quas eum maxime ea asperiores animi tempora similique quaerat consequuntur debitis beatae quisquam blanditiis eos sunt 
            commodi.</p>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        text : String
    });

</script>

<style>
    .about {
        
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-items: center;
        margin : 3rem
    }
    .text {
        border: 1px solid grey;
        
        margin-left: 3rem;
        margin-right: 3rem;
    }
     p {
        font-size: 2vw;
    }

    @media all and (max-width:600px){
        *{
            border: none;
        }
        .about{
            margin: 5vw;
            border: none;
        }

        p {
            font-size: 5vw;
            border: none;
        }
    }
</style>