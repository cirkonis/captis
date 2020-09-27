<template>
    <body>
    <div>
    <h1 class="header">Who We Are</h1>
    </div>
        <div>
        <v-container fluid class="people-container">
                <v-col cols="8">
                    <v-row class="people-row">
                        <v-card
                                v-for="person in people"
                                :key="person.id"
                                class="people-cards mx-auto"
                                elevation="1"
                                hover="true"
                                outlined="true"
                        >
                            <v-img class="people-pics" v-bind:src="require('../assets/peoplePics/' + person.picture)"></v-img>
                            <v-card-title class="people-names">{{person.name}}</v-card-title>
                            <v-card-subtitle class="people-descriptions">{{person.description}}</v-card-subtitle>
                            <span>
                            <v-icon class = "links" small color="#61BFF0" v-on:click="linkedInClick()">mdi-linkedin</v-icon>
                            <v-icon class = "links" small color="#61BFF0" v-on:click="emailClick()">mdi-email</v-icon>
                            <v-icon class = "links" small color="#61BFF0" v-on:click="moreInfoClick()">mdi-information-outline</v-icon>
                                </span>
                        </v-card>
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
                        name: "a name",
                        description: "a description",
                        picture: "a.jpg",
                        linkdIn: "",
                        email:"",
                    },
                    {
                        id: 1,
                        name: "b name",
                        description: "b description",
                        picture: "b.jpg",
                        linkdIn: "",
                        email:"",
                    },
                    {
                        id: 2,
                        name: "c name",
                        description: "c description",
                        picture: "c.jpg",
                        linkdIn: "",
                        email:"",
                    },
                    {
                        id: 3,
                        name: "m name",
                        description: "m description",
                        picture: "m.jpg",
                        linkdIn: "",
                        email:"",
                    },
                    {
                        id: 4,
                        name: "n name",
                        description: "n description",
                        picture: "n.jpg",
                        linkdIn: "",
                        email:"",
                    },
                    {
                        id: 5,
                        name: "o name",
                        description: "o description",
                        picture: "o.jpg",
                        linkdIn: "",
                        email:"",
                    },
                    {
                        id: 6,
                        name: "z name",
                        description: "z description",
                        picture: "z.jpg",
                        linkdIn: "",
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
    margin: 20px;
    min-width: 200px;
    max-width: 200px;
    min-height: 200px;
    max-height: 600px;
    width: 500px;
    height: 300px;
}
.people-pics{
/*display: flex;*/
/*align-content: center;*/
/*justify-content: center;*/
/*overflow: visible;*/
width: 50%;
height: 50%;
left: 25%;
border-radius: 50%;
}
.people-names{
    font-family: Optima, b,sans-serif;
    font-variant: all-petite-caps;
    font-size: 18px;
    alignment-baseline: top;
    color: #61BFF0;
    top: 0;

}
.people-descriptions{
    font-family: Optima, serif;
    font-size: 10px;
    color: gray;
}
.links{
    display: flex;
    flex-flow: row;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    flex-wrap: nowrap;
    max-width: 30px;
    left: 20%;
    padding-right: 33%;
}
</style>
