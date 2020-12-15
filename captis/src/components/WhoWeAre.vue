<template>
    <v-container fluid class="people-container">
        <v-container>
            <v-row class="header"><h1>WHO</h1></v-row>
                                <v-row class="sub-header"><h1>we are</h1></v-row>
        </v-container>
        <v-col cols="12" xl="10" lg="8" md="6" sm="4" xs="2">
            <v-row class="people-row" v-if="showCard===true">
                <div
                        v-for="person in people"
                        :key="person.id">
                    <img class="people-pics" v-bind:src="require('../assets/newPhotos/' + person.picture)" v-bind:alt="person.name">

                    <v-card
                            class="people-cards mx-auto"
                            elevation="0"
                    >

                        <v-card-title class="people-names">{{person.name}}</v-card-title>
                        <v-card-subtitle class="people-descriptions text-center">{{person.description}}
                        </v-card-subtitle>
                        <v-container class="link-container">
                            <v-icon class="links" small color="#0074b3" v-on:click="linkedInClick(person.linkdIn)">
                                mdi-linkedin
                            </v-icon>
                            <v-icon class="links" small color="#0074b3"
                                    v-on:click="emailClick(person.email, person.name)">mdi-email
                            </v-icon>
<!--                            <v-icon class="links" small color="#0074b3" v-on:click="moreInfoClick()">-->
<!--                                mdi-information-outline-->
<!--                            </v-icon>-->
                        </v-container>
                    </v-card>
                </div>
            </v-row>
            <v-row class="say-hello">Feel free to contact any one of us or simply send the team a message at
                hello@captis.dk
            </v-row>
            <v-row class="contact-button">
                <v-btn class="white--text"
                       color="#0074b3"
                       elevation="2"
                       large
                       rounded
                       style="font-family: titillium; font-weight: bold"
                       v-on:click="contactClick('hello@captis.dk')">Say Hello
                </v-btn>
            </v-row>
        </v-col>
    </v-container>
</template>

<script>
    export default {
        name: "WhoWeAre",
        data: function () {
            return {
                showCard: true,
                show: false,
                people: [
                    {
                        id: 0,
                        name: "Artur Żebrowski",
                        description: "Head of Marketing",
                        picture: "a.jpg",
                        linkdIn: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fartur-s-zebrowski%2F%3Ffbclid%3DIwAR2tEib6aC67nSBaCnVEH1rnQohN8L86X6Rd-aqyixczkBhTkFBaZK8VZoY&h=AT3o0ZB4CdsxnuOIPwAcITDyek8eoZ-PEeAlUkPe6HNhAgxswpmMkZPG-0t_sO06WR9iy7vxPwan9-HeFts6pureelOIEZCAGlcd_5PPG1avGQoUNPPVGH2nhU3ZTrYbSUYmUcPH",
                        email: "s202371@student.dtu.dk",
                    },
                    {
                        id: 1,
                        name: "Burkay Duymaz",
                        description: "Head of Modelling",
                        picture: "b.jpg",
                        linkdIn: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fburkay-duymaz-152b26152%2F%3Ffbclid%3DIwAR1n1ArAzq1alCD4kaMsBtwgGpEl9JxSkWNvrrfKtBKoySHpvgKGLfbQcxc&h=AT3o0ZB4CdsxnuOIPwAcITDyek8eoZ-PEeAlUkPe6HNhAgxswpmMkZPG-0t_sO06WR9iy7vxPwan9-HeFts6pureelOIEZCAGlcd_5PPG1avGQoUNPPVGH2nhU3ZTrYbSUYmUcPH",
                        email: "s165036@student.dtu.dk",
                    },
                    {
                        id: 2,
                        name: "Cyril Eštok",
                        description: "Head of Technology",
                        picture: "c.jpg",
                        linkdIn: "https://l.facebook.com/l.php?u=http%3A%2F%2Flinkedin.com%2Fin%2Fcyril-estok%3Ffbclid%3DIwAR2rAeu0-CaJclt0S4xYipY6i3hxApkXgS0hIh0D7mNDphNyVqCOBMZ_aE8&h=AT3o0ZB4CdsxnuOIPwAcITDyek8eoZ-PEeAlUkPe6HNhAgxswpmMkZPG-0t_sO06WR9iy7vxPwan9-HeFts6pureelOIEZCAGlcd_5PPG1avGQoUNPPVGH2nhU3ZTrYbSUYmUcPH",
                        email: "s164562@student.dtu.dk",
                    },
                    {
                        id: 3,
                        name: "Michael Marigliano",
                        description: "Head of Software",
                        picture: "m.jpg",
                        linkdIn: "https://www.linkedin.com/in/michael-marigliano-b22a2b1ab/",
                        email: "s202787@student.dtu.dk",
                    },
                    {
                        id: 4,
                        name: "Nathan Moret​",
                        description: "Head of C02 Storage",
                        picture: "n.jpg",
                        linkdIn: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fnathan-moret-456464184%3Ffbclid%3DIwAR3hS95T7didCfOMaiTpZG03-SWcUoLhpjSuxURZrQV2TeAUlitWhHT8hhQ&h=AT3o0ZB4CdsxnuOIPwAcITDyek8eoZ-PEeAlUkPe6HNhAgxswpmMkZPG-0t_sO06WR9iy7vxPwan9-HeFts6pureelOIEZCAGlcd_5PPG1avGQoUNPPVGH2nhU3ZTrYbSUYmUcPH",
                        email: "s202935@student.dtu.dk",
                    },
                    {
                        id: 6,
                        name: "Zainab Hassoun",
                        description: "Head of Design",
                        picture: "z.jpg",
                        linkdIn: "http://linkedin.com",
                        email: "s203397@student.dtu.dk",
                    },
                    {
                        id: 5,
                        name: "Ole Kleinschmidt​",
                        description: "Head of Operations​",
                        picture: "o.jpg",
                        linkdIn: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Folekleinschmidt%2F%3Ffbclid%3DIwAR2IY3K0yw4tEHa_6V7VvPEvqRjSttI7q0U03rE5wE_ucKuPvL6mrlhh9Hg&h=AT3o0ZB4CdsxnuOIPwAcITDyek8eoZ-PEeAlUkPe6HNhAgxswpmMkZPG-0t_sO06WR9iy7vxPwan9-HeFts6pureelOIEZCAGlcd_5PPG1avGQoUNPPVGH2nhU3ZTrYbSUYmUcPH",
                        email: "s192852@student.dtu.dk",
                    },
                ]
            }
        },
        methods: {
            linkedInClick(linkdInLink) {
                window.open(linkdInLink);
            },
            emailClick(email, name) {
                this.$copyText(email).then(function () {
                    alert('Email for ' + name + ' copied to your clipboard!');
                }, function () {
                    alert('Could not retrieve email');
                });
            },
            contactClick(email) {
                this.$copyText(email).then(function () {
                    alert('hello@captis.dk copied to your clipboard. Looking forward to hearing from you!');
                }, function () {
                    alert('Could not retrieve email');
                });
            },
            moreInfoClick() {
            }
        }
    }
</script>
<style scoped>
    .header {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-family: titillium;
        font-style: normal;
        font-size: 2vw;
        height: 2vw;
        color: #27214C;
        padding: 3% 0 3% 0;
    }

    .sub-header {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-family: titillium;
        font-style: normal;
        font-size: 2vw;
        color: #0074b3;
        padding: 2% 0 0 0;
    }

    .people-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        min-width: 100%;
    }

    .people-row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-content: space-evenly;
    }

    .people-cards {
        display: flex;
        flex-direction: column;
        flex-flow: column;
        align-content: center;
        justify-items: center;
        /* top | right | bottom | left */
        margin: 0 50px 10px 50px;
        width: 180px;
        height: 100px;
        background-color: transparent;
    }

    .people-pics {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        object-fit: cover;
        width: 200px;
        height: 275px;
        object-fit: cover;
        object-position: 0% 20%;
    }

    .people-pics:hover {
        cursor: default;
    }


    .people-names {
        font-family: titillium;
        font-variant: all-petite-caps;
        font-size: 17px;
        alignment-baseline: top;
        justify-content: center;
        font-weight: bold;
        color: #0074b3;
        top: 0;
        bottom: 0;
    }

    .people-names:hover {
        cursor: default;
    }

    .people-descriptions {
        font-family: titillium;
        font-size: 14px;
        font-weight: bold;
        color: #2D2B1F;
    }

    .people-descriptions:hover {
        cursor: default;
    }

    .link-container {
        display: flex;
        flex-flow: row;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 100%;
        justify-content: space-evenly;
    }

    .links {
        bottom: 15px;
        width: 15px;
        height: 15px;
    }

    .say-hello {
        display: flex;
        align-content: center;
        justify-content: center;
        font-family: titillium;
        font-style: normal;
        font-weight: bold;
        font-size: 2vw;
        color:#2D2B1F;
        padding-top: 25px;
        text-align: center;
    }

    .contact-button {
        display: flex;
        align-content: center;
        justify-content: center;
        justify-self: center;
        width: 100%;
        height: 50px;
        padding-top: 20px;
    }
</style>
