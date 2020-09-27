<template>
    <body>
    <div>
    <h1 class="header">Who We Are</h1>
    </div>
        <div>
        <v-container fluid class="people-container">
                <v-col cols="12">
                    <v-row class="people-row">
                        <v-card
                                v-for="person in people"
                                :key="person.id"
                                class="people-cards mx-auto"
                        >
                            <v-img class="people-pics" v-bind:src="require('../assets/peoplePics/' + person.picture)"></v-img>
                            <v-card-title class="people-names">{{person.name}}</v-card-title>
                            <v-card-subtitle class="people-descriptions">{{person.description}}</v-card-subtitle>
                            <v-card-actions>
                                <v-btn class="more-info-button" text>
                                More Info
                            </v-btn>
<v-spacer></v-spacer>
                            <v-btn>linkedIn</v-btn>
                                <v-btn>email</v-btn>
                            <v-btn>something else</v-btn>
                            </v-card-actions>
                            <v-expand-transition>
                                <div v-show="show">
                                    <v-divider></v-divider>

                                    <v-card-text>
                                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
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
        }
    }
</script>
<style scoped>
.header{
    text-align: center;
    font-family: Optima;
    font-style: normal;
    color: #61BFF0;
    margin-bottom: 100px;
}
.people-container{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: red;
}
.people-row{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-evenly;
    background-color: green;
}

.people-cards{
    align-content: center;
    justify-items: center;
    min-width: 100px;
    max-width: 200px;
    min-height: 40px;
    max-hieght: 80px;
    background-color: pink;
}
.people-pics{
display: flex;
align-content: center;
justify-content: center;
width: 50px;
height: 50px;
    background-color: blue;
}
.people-names{
    font-family: Optima;
    font-size: 14px;
    font-color: #61Bff0;
    background-color: yellow;

}
.people-descriptions{
    font-family: Optima;
    font-size: 10px;
    font-color: gray;
    background-color: greenyellow;
}
</style>
