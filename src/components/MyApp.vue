<template>
    
    <div class="wrapper">

        <my-header>
            <a href="#" @click="scroll($event, 'home')">Hem</a>
            <a href="#" @click="scroll($event, 'about')">Om bröllopet</a>
            <a href="#" @click="scroll($event, 'directions')">Ta dig till bröllopet</a>
            <a href="#" @click="scroll($event, 'rvsp')">RVSP</a>        
        </my-header>

        <div class="content">
            <section id="home">
                <div class="home">
                    <h1>Suzie & Filip</h1>
                    <img class="spacing small" src="/img/small.webp" />
                    <p class="spacing">bjuder in er till vårt bröllop</p>
                    <p class="bigspacing">31 Jul - 3 Aug 2020</p>
                    <img class="left" src="/img/krans-left.webp" />
                    <img class="right" src="/img/krans-right.webp" />
                </div>
            </section>

            <section id="about">
                <div class="about">
                    <h2>Nu gifter vi oss - och vi vill fira med dig!</h2>
                    <p>Vårt bröllop kommer hållas på slottet Castello di Montalto i vackra Toscana, Italien. Tillsammans med er gäster kommer vi spendera en underbar helg omgivna av vinodlingar och fantastiska vyer.</p>
                    <p>Vigseln sker på lördagen den 1 augusti, men bröllopsfirandet pågår under hela helgen. Firandet inleds med en gemensam middag på fredagen, fortsätter med vigsel och bröllopsfest på lördagen och avslutas med frukost på måndagsmorgonen. Det innebär att alla gäster anländer på fredagen och lämnar på måndagen.</p>
                    <p>Vi vet att det är mycket begärt att be er ta er hela vägen till Italien, därför kommer vi göra vårt bästa för att erbjuda en magisk helg med god mat, gemenskap och aktiviteter. Det här blir en semester att minnas!</p>
                    <p>Den här bröllopshelgen passar bäst för vuxna och är därmed barnfri.</p>
                    <p>Vi önskar oss inga presenter då vår största glädje är att du kan och vill komma och fira med oss! </p>
                    
                    <img class="spacing bigger" src="/img/bigger.webp" />
                </div>
            </section>

            

            <section id="directions" class="directions">
                <div class="directions">
                    <h2 class="white">Ta dig till bröllopet</h2>
                   
                    
                    <h3 class="white">Boende</h3>
                    <p class="white">Vi vill umgås med er så mycket som möjligt och därför kommer alla gäster att bo tillsammans med oss på slottet under hela helgen! Vi har hela slottsområdet för oss själva från fredagen till måndagen.</p>
                    <p class="white">Kostnaden för boendet är 3000 kr per person för hela vistelsen, fredag kväll till måndag morgon (31/7-3/8). Mat och dryck till alla måltider under hela helgen står vi för. Ni bokar det vill säga <b>inte</b> boka boende själva, det löser vi åt er!</p>

                    <h3 class="white">Transport</h3>
                    <p class="white">Tips är att boka flyg så tidigt som möjligt!</p>
                    <p class="white">Närmaste flygplats : Peretolas, Florens<br> Närmaste tågstation: Siena</p>
                    <p class="white">Mer information om hur ni enklast tar er till området kommer lite senare framöver</p>
                </div>   
            </section>

            <section id="castle">
                <div class="castle">
                    <h2 style="text-shadow: 1px 1px 5px white;margin-bottom: 30px;">Castello di Montalto</h2>
                    <my-slider></my-slider>
                </div>
            </section>

            <section id="rvsp" class="rvsp">
                <div class="rvsp">
                    <h2>RSVP</h2>
                    <p class="bigspacing">Senast 31 Januari 2020</p>
                    <p>Svara genom att fylla i formuläret längst ner på sidan. Om du tackar ja åt någon mer än dig själv så skriv det i meddelanderutan. För er som väljer att tillbringa denna helg med oss, så kommer boendet behöva betalas in senast 31 mars. Mer information om bröllopshelgen och om hur betalning ska ske kommer senare.</p>
                    <p>Har du några funderingar, hör av dig till oss!</p>
                    <p>filuzieInTuscany@gmail.com</p>
                </div>
                <form @submit="sendMail">
                    <div class="row">
                        <div>
                            <label for="firstname">Namn</label>
                            <input type="text" id="firstname" name="firstname" v-model="firstname" required />
                        </div>
                        <div>
                            <label for="lastname">Efternamn</label>
                            <input type="text" id="lastname" name="lastname" v-model="lastname" required/>
                        </div>
                    </div>
                    <div>
                        <label for="email">E-post</label>
                        <input type="email" id="email" name="email" v-model="email" required/>
                    </div>
                    <div>
                        <label for="message">Vill du meddela oss något?</label>
                        <input type="text" id="message" name="message" v-model="message"/>
                    </div>
                    <input type="submit" value="Jag kommer"  />                

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

    data: function() {
        return {
            firstname: '',
            lastname: '',
            email: '',
            message: '',
            errors: []
        }
    },
  
    methods: {
        scroll (e, to) {
            e.preventDefault()
            document.getElementById(to).scrollIntoView({ behavior: 'smooth' });
        },
        sendMail() {
            window.open('mailto:filuzieInTuscany@gmail.com?subject=RSVP - ' + this.firstname + ' ' + this.lastname + '&body=Jag kommer gärna! Min mejl är: ' + this.email +' <br/>Meddelenade: ' + this.message);
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
        min-height: calc(100vh - 100px);
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
        background: transparent;
    }

    section#directions {
        background: #5e7b64;
        color: white;
    }

    section#castle {
        background:white;
    }

    section#rvsp {
        background: #eae7e5;
        opacity: 0.9;
        color: #415547;
    }

    
    div.home {
        width: 95%;
        height: 50vh;
        max-width: 900px;
        background: white;
        opacity: 0.9;
        position: relative;
        border-radius: 10px;
    }

    div.home > img.left {
        position: absolute;
        left: 1px;
        top: 20px;
        bottom: 20px;
        height: calc(100% - 40px);
    }

    div.home > img.right {
        position: absolute;
        right: 1px;
        top: 20px;
        bottom: 20px;
        height: calc(100% - 40px);
    }

    div.about,
    div.directions,
    div.castle,
    div.rvsp {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 12px;

    }
    div.about,
    div.directions,
    div.castle,
    div.rvsp {
        max-width: 700px
    }

    div.about {
        background: white;
        opacity: 0.9;
        border-radius: 10px;     
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
        font-size: 65px;
    }

    h2 {
        font-family: 'Tangerine', serif;
        color: #5E5C5C;
        font-weight: 200;
        font-size: 55px;
        padding: 10px 0 5px 0;
    }

    h3 {
        font-family: 'Tangerine', serif;
        color: #5E5C5C;
        font-weight: 200;
        font-size: 40px;
        padding: 10px 0 5px 0;
        letter-spacing: 5px
    }

    p {
       font-family: 'Raleway', sans-serif;
        font-style: italic;
        color: #5E5C5C;
        font-size: 18px;
        padding: 5px 0;
        line-height: 25px;
    }

    p.spacing {
        letter-spacing: 1px;
        /*padding-bottom: 10px;*/
    }

    p.bigspacing {
        letter-spacing: 1px;
    }

    img.spacing {
        padding: 5px 0;
    }

    img.small {
        width: 20px;    
    }

    img.bigger {
        width: 100px;
        padding-top: 40px;
    }
    

    .white {
        color: white;
    }

    @media screen and (min-width: 700px) { 

        h1 {
            font-size: 100px;
        }

        img.small {
            width: auto;    
        }

        img.bigger {
            width: 200px;    
        }

        img.spacing {
            width: 43px;
            
            padding: 40px 0;
        }
        p {
            letter-spacing: 1px;
        }

        p.spacing {
            letter-spacing: 1px;
            padding-bottom: 20px;
        }

        p.bigspacing {
            letter-spacing: 10px;
        }

        /* home screen */
        div.home {
            width: 90%;
            height: 70vh;
            max-width: 700px;
            transition: all 1s ease;
        }

        div.home > img.left {
            left: 10px;
            
        }

        div.home > img.right {
            right: 10px;
        }
    }
</style>
