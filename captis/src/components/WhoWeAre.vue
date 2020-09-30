<template>
    <body>
    <div>
    <h1 class="header">Who We Are</h1>
    </div>
        <div>
        <v-container fluid class="people-container">
                <v-col cols="8">
                    <v-row class="people-row"  >
                     <div     v-for="person in people"
                              :key="person.id">
                        <v-img class="people-pics" v-bind:src="require('../assets/peoplePics/' + person.picture)"></v-img>

                        <v-card
                                class="people-cards mx-auto"
                                elevation="0"
                                hover="false"
                                outlined="false"
                        >

                            <v-card-title class="people-names">{{person.name}}</v-card-title>
                            <v-card-subtitle class="people-descriptions">{{person.description}}</v-card-subtitle>
                            <span>
                            <v-icon class = "links" small color="#61BFF0" v-on:click="linkedInClick()">mdi-linkedin</v-icon>
                            <v-icon class = "links" small color="#61BFF0" v-on:click="emailClick()">mdi-email</v-icon>
                            <v-icon class = "links" small color="#61BFF0" v-on:click="moreInfoClick()">mdi-information-outline</v-icon>
                                </span>
                        </v-card>
                     </div>
                    </v-row>
                </v-col>
        </v-container>
        </div>
    </body>
</template>

<script>
    export default {
        name: "WhoWeAre",
        data: function () {
            return {
                show: false,
                people: [
                    {
                        id: 0,
                        name: "Artur Żebrowski",
                        description: "Wind Energy",
                        picture: "a.jpg",
                        linkdIn: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fartur-s-zebrowski%2F%3Ffbclid%3DIwAR2tEib6aC67nSBaCnVEH1rnQohN8L86X6Rd-aqyixczkBhTkFBaZK8VZoY&h=AT3o0ZB4CdsxnuOIPwAcITDyek8eoZ-PEeAlUkPe6HNhAgxswpmMkZPG-0t_sO06WR9iy7vxPwan9-HeFts6pureelOIEZCAGlcd_5PPG1avGQoUNPPVGH2nhU3ZTrYbSUYmUcPH",
                        email:"",
                    },
                    {
                        id: 1,
                        name: "Burkay Duymaz",
                        description: "Product Development",
                        picture: "b.jpg",
                        linkdIn: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fburkay-duymaz-152b26152%2F%3Ffbclid%3DIwAR1n1ArAzq1alCD4kaMsBtwgGpEl9JxSkWNvrrfKtBKoySHpvgKGLfbQcxc&h=AT3o0ZB4CdsxnuOIPwAcITDyek8eoZ-PEeAlUkPe6HNhAgxswpmMkZPG-0t_sO06WR9iy7vxPwan9-HeFts6pureelOIEZCAGlcd_5PPG1avGQoUNPPVGH2nhU3ZTrYbSUYmUcPH",
                        email:"",
                    },
                    {
                        id: 2,
                        name: "Cyril Eštok",
                        description: "Chemical Engineering",
                        picture: "c.jpg",
                        linkdIn: "https://l.facebook.com/l.php?u=http%3A%2F%2Flinkedin.com%2Fin%2Fcyril-estok%3Ffbclid%3DIwAR2rAeu0-CaJclt0S4xYipY6i3hxApkXgS0hIh0D7mNDphNyVqCOBMZ_aE8&h=AT3o0ZB4CdsxnuOIPwAcITDyek8eoZ-PEeAlUkPe6HNhAgxswpmMkZPG-0t_sO06WR9iy7vxPwan9-HeFts6pureelOIEZCAGlcd_5PPG1avGQoUNPPVGH2nhU3ZTrYbSUYmUcPH",
                        email:"",
                    },
                    {
                        id: 3,
                        name: "Michael Marigliano",
                        description: "Software Engineering",
                        picture: "m.jpg",
                        linkdIn: "https://www.linkedin.com/in/michael-marigliano-b22a2b1ab/",
                        email:"",
                    },
                    {
                        id: 4,
                        name: "Nathan Moret​",
                        description: "Physics and Nanotechnology​",
                        picture: "n.jpg",
                        linkdIn: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fnathan-moret-456464184%3Ffbclid%3DIwAR3hS95T7didCfOMaiTpZG03-SWcUoLhpjSuxURZrQV2TeAUlitWhHT8hhQ&h=AT3o0ZB4CdsxnuOIPwAcITDyek8eoZ-PEeAlUkPe6HNhAgxswpmMkZPG-0t_sO06WR9iy7vxPwan9-HeFts6pureelOIEZCAGlcd_5PPG1avGQoUNPPVGH2nhU3ZTrYbSUYmUcPH",
                        email:"",
                    },
                    {
                        id: 6,
                        name: "Zainab Hassoun",
                        description: "Autonomous Systems Engineering",
                        picture: "z.jpg",
                        linkdIn: "",
                        email:"",
                    },
                    {
                        id: 5,
                        name: "Ole Kleinschmidt​",
                        description: "Materials and Manufacturing​",
                        picture: "o.jpg",
                        linkdIn: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Folekleinschmidt%2F%3Ffbclid%3DIwAR2IY3K0yw4tEHa_6V7VvPEvqRjSttI7q0U03rE5wE_ucKuPvL6mrlhh9Hg&h=AT3o0ZB4CdsxnuOIPwAcITDyek8eoZ-PEeAlUkPe6HNhAgxswpmMkZPG-0t_sO06WR9iy7vxPwan9-HeFts6pureelOIEZCAGlcd_5PPG1avGQoUNPPVGH2nhU3ZTrYbSUYmUcPH",
                        email:"",
                    },
                ]
            }
        },
        methods: {
            linkedInClick(){
                console.log("linkedIn icon clicked");
            },
            emailClick(){
                console.log("email icon clicked");
            },
            moreInfoClick(){
                console.log("more info icon clicked");
            }
        }
    }
</script>
<style scoped>
.header{
    text-align: center;
    font-family: Optima;
    font-style: normal;
    color: #61BFF0;
    /*margin-bottom: 5px;*/
}
.people-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    min-width: 100%;
}
.people-row{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-evenly;
}

.people-cards{
    display: flex;
    flex-direction: column;
    flex-flow: column;
    align-content: center;
    justify-items: center;
    /* top | right | bottom | left */
    margin: 20px 10% 0 10%;
    /*min-width: 200px;*/
    /*max-width: 200px;*/
    /*min-height: 100px;*/
    /*max-height: 200px;*/
    width: 200px;
    height: 100px;
}
.people-pics {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    width: 150px;
    height: 200px;
    border-radius: 50%;
}

 .people-pics:hover{
    cursor: default;
  }

.people-names{
    font-family: Optima, b,sans-serif;
    font-variant: all-petite-caps;
    font-size: 18px;
    alignment-baseline: top;
    color: #61BFF0;
    top: 0;
    bottom: 0;
}
.people-names:hover{
    cursor: default;
}
.people-descriptions{
    font-family: Optima, serif;
    font-size: 10px;
    color: gray;
    marigin: 0;
}
.people-descriptions:hover{
    cursor: default;
}
.links{
    display: flex;
    flex-flow: row;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    flex-wrap: nowrap;
    width: 15px;
    height: 15px;
    /* top | right | bottom | left */
    left: 15%;
    margin:-15% 25% 0 0%;
}
</style>
