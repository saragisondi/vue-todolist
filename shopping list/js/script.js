const {createApp} = Vue;

createApp({
  data(){
    return{
    lists:[
      {
        category:'Frutta e Verdura',
        img:'img/frutta.png',
        done:false
      },
      {
        category:'Carne e Pesce',
        img:'img/carne.png',
        done:false
      },
      {
        category:'Panetteria e Pasta',
        img:'img/pane.png',
        done:false
      },
      {
        category:'Latte e Formaggi',
        img:'img/latte.png',
        done:false
      },
      {
        category:'Bevande',
        img:'img/bevande.png',
        done:false
      },
      {
        category:'Non Classificati',
        img:'img/x.jpg',
        done:false
      },
    ],
    toDo: "",
    }
},

methods:{

addNew(){
  const addNewToDo = {
    text: this.toDo,
    done: false
  }
  
  this.lists.unshift(addNewToDo)
  console.log(addNewToDo)
  this.toDo="";
}
}



}).mount('#app')
