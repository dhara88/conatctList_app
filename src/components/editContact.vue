<template>
<v-app>
        <v-form >
            
            <v-text-field
            v-model="this.contacts.name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
            ></v-text-field>

            <v-text-field
            v-model="this.contacts.email"
            :rules="emailRules"
            label="E-mail"
            required
            ></v-text-field>

            <v-text-field
            v-model="this.contacts.number"
            :counter="10"
            :rules="numberRules"
            label="Number"
            required
            ></v-text-field>

            <v-text-field
            v-model="this.contacts.notes"
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
            @click="editContact"
            >Submit
            </v-btn>

            <v-btn
            color="primary"
            class="mr-4"
            to="/"
            >Back
            </v-btn>

        </v-form>
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
                edit: false,
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
            editContact(e){
                
                e.preventDefault();
                
                    const contactItem = {
                        name: this.name,
                        email:this.email,
                        number:this.number,
                        notes:this.notes,
                        id: this.id
                    };
                    this.$emit('edit-contact-event', contactItem);
                    this.name = '';
                    this.email = '';
                    this.number = '';
                    this.notes = '';
                    this.edit = false;
                
            },
   
        },
        watch: {      
        contacts: {
            handler() {
                localStorage.setItem('contacts',JSON.stringify(this.contacts))     
            },
            deep: true
            },
    
     mounted() {
        if (localStorage.getItem("contacts")){
            this.contacts = JSON.parse(localStorage.getItem("contacts"))
        }
      }
   },
           
}
    
</script>

<style scoped>
</style>