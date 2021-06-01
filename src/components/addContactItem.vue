<template>
    <v-app>
        <div v-if="display">
            <v-form >
                <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
                ></v-text-field>

                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                ></v-text-field>

                <v-text-field
                v-model="number"
                :counter="10"
                :rules="numberRules"
                label="Number"
                required
                ></v-text-field>

                <v-text-field
                v-model="notes"
                label="Notes"
                required
                ></v-text-field>

                <v-file-input
                accept="image/*"
                label="File input"
                ></v-file-input>


                <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="addContact"
                >Submit
                </v-btn>

                 <v-btn
                color="primary"
                class="mr-4"
                to="/" >ContactList
                </v-btn>
            </v-form>
         </div>
    </v-app>
</template>

<script>
    export default {
        data () {
            return {
                contacts:[],
                display:true,
                name: '',
                id: '',
                valid: true,
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length <= 10) || 'Name must be less than 10 characters',
                ],
                 numberRules: [
                        v => !!v || 'Number is required',
                    v => (v && v.length == 10) || 'Number must be 10 characters',
                ],
                number:'',
                notes:'',
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
            }
        },
        methods: {
            addContact(e){
                e.preventDefault();
                    const newContact = {
                        name: this.name,
                        email:this.email,
                        number:this.number,
                        notes:this.notes,
                        id: Math.floor(Math.random() * 100)
                    };
                    if (newContact.name !== '' || newContact.email !== '' || newContact.notes !== '' || newContact.number !== ''){
                        this.contacts =  [...this.contacts,newContact];
                    }
                    this.name = '',
                    this.email = '',
                    this.notes='',
                    this.number=''

            },
    
        },
        watch: {      
            contacts: {
            handler() {
                localStorage.setItem('contacts',JSON.stringify(this.contacts))
            },
            deep: true
            }
        },
           
    }
    
</script>

<style scoped>
</style>
