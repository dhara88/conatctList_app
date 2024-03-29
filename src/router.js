import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import Axios from 'axios';
import AddContactItem from "./components/addContactItem";
import Contact from "./components/contact";
import EditContact from "./components/editContact";



Vue.use(VueRouter);
Vue.use(VueAxios, Axios);



const routes = [
  
    {
      name: 'EditContact',
      path: '/editContact',
      component: EditContact
    },
    {
      name: 'Contact',
      path: '/',
      component: Contact
    },
    {
      name: 'AddContactItem',
      path: '/addContactItem',
      component:AddContactItem 
    }
  ];
  
  
  const router = new VueRouter({ mode: 'history', routes: routes });  
 
  export default router
