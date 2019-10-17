<template>
    
    <div class="wrapper">

        <my-header>
            <a href="#" @click="scroll($event, 'home')">Hem</a>
            <a href="#" @click="scroll($event, 'about')">Om bröllpet</a>
            <a href="#" @click="scroll($event, 'directions')">Ta dig till bröllopet</a>
            <a href="#" @click="scroll($event, 'rvsp')">RVSP</a>        
        </my-header>

        <div class="content">
            <section id="home">
                <div class="home">
                    <h1>Suzie & Filip</h1>
                    <img class="spacing" src="/img/small.webp" />
                    <p class="spacing">bjuder in er till vårt bröllop</p>
                    <p class="bigspacing">31 Jul - 3 Aug 2020</p>
                    <img class="left" src="/img/krans-left.webp" />
                    <img class="right" src="/img/krans-right.webp" />
                </div>
            </section>

            <section id="about">
                <div class="about">
                    <h2>Om bröllopet</h2>
                    <p>Vigseln sker lördag den 1 augusti 2020, men bröllopsfirandet pågår under hela helgen från fredag till måndag morgon.</p>
                    <p>Du bekostar ditt eget boende samt din resa - resten står vi för! Vi har hela slottsområdet för oss själva under hela helgen och samtliga gäster samt brudparet kommer att bo på området.                     Kostnaden för boendet är 3000 kr per person för hela vistelsen.</p>
                    <p>RSVP senast 31 Januari 2020</p>
                    <img class="spacing" src="/img/bigger.webp" />
                </div>
            </section>

            <section id="castle">
                <div class="castle">
                    <h2>Castello di Montalto</h2>
                    <my-slider></my-slider>
                </div>
            </section>

            <section id="directions" class="directions">
                <div class="directions">
                    <h2 class="white">Ta dig till bröllopet</h2>
                    <h3 class="white">Transport</h3>
                    <p class="white">Tips är att boka flyg så tidigt som möjligt!</p>
                    <p class="white">Närmaste flygplats : Peretolas, Florens<br> Närmaste tågstation: Siena</p>
                    <p class="white">Mer information om hur ni enklast tar er till området kommer lite senare framöver</p>
                    
                    <h3 class="white">Boende</h3>
                    <p class="white">Vi planerar att alla bor på slottet!</p>
                    <p class="white">Alla rum är självhushåll, det finns därmed köksutrustning såsom kyl/frys och spis. Det kommer finnas gott om mat så det behöver ni inte tänka på men är det något speciellt man önskar kan man handla det. </p>
                </div>   
            </section>

            <section id="rvsp" class="rvsp">
                <h2>RSVP</h2>
                <p class="bigspacing">Senast 31 Januari 2020</p>
                <form>
                    <div class="row">
                        <div>
                            <label for="firstname">Namn</label>
                            <input type="text" id="firstname" name="firstname" required />
                        </div>
                        <div>
                            <label for="lastname">Efternamn</label>
                            <input type="text" id="lastname" name="lastname" required/>
                        </div>
                    </div>
                    <div>
                        <label for="email">E-post</label>
                        <input type="email" id="email" name="email" required/>
                    </div>
                    <div>
                        <label for="message">Vill du meddela oss något?</label>
                        <input type="text" id="message" name="message" />
                    </div>
                    <input type="submit" value="Jag kommer" />                

                </form>
            </section>
       
        </div>
 
    </div>

</template>

<script>

import MyHeader from './MyHeader.vue'
import MySlider from './MySlider.vue'

export default {
    components: {
        MyHeader, MySlider
    },
  
    methods: {
        scroll (e, to) {
            e.preventDefault()
            document.getElementById(to).scrollIntoView({ behavior: 'smooth' });
        }
    },
} 
</script>

<style scoped>
    div.wrapper {
        height: 100vh;
        width: 100vw;
        background-image: url('/img/background.jpg');
        background-position: fixed;
        background-repeat: none;
        background-size: cover;
        background-attachment: fixed;
        overflow: hidden;
    }

    div.content {
        margin-top: 100px;
        max-height: calc(100vh - 100px);
        overflow-y: scroll;
        scroll-snap-type: mandatory;
        scroll-snap-points-y: repeat(3rem);
        scroll-snap-type: y mandatory;
    }

    section {
        height: calc(100vh - 100px);
        scroll-snap-align: start;
    }

    section#home, 
    section#about,
    section#castle,
    section#directions,
    section#rvsp,
    div.home {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    section#about {
        background: white;
    }

    section#directions {
        background: #5e7b64;
        color: white;
    }

    section#rvsp {
        background: #eae7e5;
        opacity: 0.9;
        color: #415547;
    }

    
    div.home {
        width: 700px;
        height: 70vh;
        max-width: 900px;
        background: white;
        opacity: 0.9;
        position: relative;
        border-radius: 10px;
        /*border-radius: 200px;
        border-bottom-left-radius: 300px;
        border-bottom-right-radius: 300px;*/
    }

    div.home > img.left {
        position: absolute;
        left: 20px;
        top: 20px;
        bottom: 20px;
        height: calc(100% - 40px);
    }

    div.home > img.right {
        position: absolute;
        right: 20px;
        top: 20px;
        bottom: 20px;
        height: calc(100% - 40px);
    }

    div.about,
    div.directions,
    div.castle {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    div.about,
    div.directions,
    div.castle {
        max-width: 600px
    }

    form {
        border: 1px solid #415547;
        border-radius: 6px;
        padding: 30px;
        margin-top: 30px;
    }

    label {
        display:block;
        margin-top: 12px;
    }

    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .row > div:nth-child(odd) {
        margin-right: 6px;
    }
    .row > div:nth-child(even) {
        margin-left: 6px;
    }

    input {
        width: 100%;
    }

    input {
        padding:12px;
        font-size: 1em;
    }

    input[type=submit] {
        margin-top: 18px;
    }

    h1 {
        font-family: 'Dancing Script', cursive;
        font-family: 'Tangerine', serif;
        color: #5E5C5C;
        font-weight: 200;
        font-size: 100px;
    }

    h2 {
        font-family: 'Tangerine', serif;
        color: #5E5C5C;
        font-weight: 200;
        font-size: 60px;
        padding: 20px 0;
    }

    h3 {
        font-family: 'Tangerine', serif;
        color: #5E5C5C;
        font-weight: 200;
        font-size: 40px;
        padding: 20px 0;
        letter-spacing: 5px
    }

    p {
       font-family: 'Raleway', sans-serif;
        font-style: italic;
        color: #5E5C5C;
        font-size: 22px;
        padding: 5px 0;
        line-height: 30px;
    }

    p.spacing {
        letter-spacing: 1px;
        padding-bottom: 20px;
    }

    p.bigspacing {
        letter-spacing: 10px;
    }

    img.spacing {
        padding: 40px 0;
    }

    .white {
        color: white;
    }
</style>
