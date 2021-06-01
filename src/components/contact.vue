<template>
    <v-app id="inspire" >
        <div>
            <h2>My Contact List</h2>
                <v-card  v-bind:key="contact.id" v-for="contact in contacts">
                <v-list-item >  
                    {{contact.name}}    
                    <div style="display:inline;padding:10px">
                        <v-btn style="float:right" x-small color="success" @click="$router.push({name: 'EditContact', params: { id: contact.id }})">Edit</v-btn>
                    </div>
                    <div style="display:inline;">
                        <v-btn style="float:right" x-small color="error"  @click="deleteContactItem( contact.id)">Delete</v-btn>
                    </div>
                </v-list-item>
                </v-card>
                <v-card v-if="!contacts.length">
                    <p>No Contacts to Read!!</p>
                </v-card>
                <v-btn block @click.native="$router.push({name:'AddContactItem'})">
                    Add Contact
                </v-btn>
            </div>
    </v-app>
</template>

<script>
    export default {
        data () {
            return {
            contacts: [],
            display: false

            }
        },
               
        methods: {
           
            deleteContactItem(id){
                 this.contacts = this.contacts.filter(contact => contact.id !== id);
            },
            
        },
         
        mounted() {
            if (localStorage.getItem("contacts")){
               this.contacts = JSON.parse(localStorage.getItem("contacts"))
            }
        }
    }
</script>

<style scoped>
</style>    