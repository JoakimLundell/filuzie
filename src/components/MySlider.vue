<template>
    <div class="slider">
        <transition-group name='fade' tag='div'>
            <div v-for="i in [currentIndex]" :key='i'>
                <img :src="currentImg" />
            </div>
        </transition-group>
        <a class="prev" @click="prev" href='#'>&#10094;</a>
        <a class="next" @click="next" href='#'>&#10095;</a>
    </div>
</template>

<script>
export default {
    name: 'Slider',
    data() {
        return {
            images: [
                '/img/carusel/1_bild.jpg',
                '/img/carusel/2_bild.jpg',
                '/img/carusel/3_bild.jpg',
                '/img/carusel/4_bild.jpg',
                '/img/carusel/5_bild.jpg',
                '/img/carusel/6_bild.jpg'
            ],
            currentIndex: 0,
        }
    },

  
    methods: {
        next: function() {
            this.currentIndex += 1
        },
        prev: function() {
            this.currentIndex -= 1
        }
    },
  
    computed: {
        currentImg: function() {
            return this.images[Math.abs(this.currentIndex) % this.images.length];
        }
    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.9s ease;
    position: absolute;
    opacity: 1;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.slider {
    height: 400px;
    min-height: auto;
    width: 95vw;
    position: relative;
    
    /*background: black;*/
    
}

img {
    height: 400px;
    height: auto;
    /*width: 90vw;*/
    width: 95vw;
}

.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 45%;
    width: auto;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.7s ease;
    border-radius: 0 4px 4px 0;
    text-decoration: none;
    user-select: none;
}

.next {
    right: 0;
}

.prev {
    left: 0;
}

.prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.9);
}

 @media screen and (min-width: 600px) { 
 .slider {
    height: 450px;
    width: 70vw;
    min-width: 600px;
    box-shadow: 0px 0px 20px silver;
}

img {
    height: 450px;
    width: 100%;
}
 }
</style>