const {createApp} = Vue;

createApp({
  data(){
    return{
    lists:[
      {
        name:'Frutta e Verdura',
        img:'img/frutta.png',
        done:false,
        category:[
          'fragole',

        ]
      },
      {
        name:'Carne e Pesce',
        img:'img/carne.png',
        done:false,
        category:[
          'petto di pollo',

        ]
      },
      {
        name:'Panetteria e Pasta',
        img:'img/pane.png',
        done:false,
        category:[
          'pane'
        ]
      },
      {
        name:'Latte e Formaggi',
        img:'img/latte.png',
        done:false,
        category:[
          'latte parzialmente scremato'
        ]
      },
      {
        name:'Bevande',
        img:'img/bevande.png',
        done:false,
        category:[
          'acqua',
        ]
      },
      {
        name:'Non Classificati',
        img:'img/x.jpg',
        done:false,
        category:[
          'spugna per piatti'
        ]
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

  
  if (this.addNewToDo === this.lists.category){
    this.lists.push(addNewToDo)

  }

  
  console.log(addNewToDo)
  this.toDo="";
},

deleteRow(index){
    this.lists.splice(index,1);

  },
}



}).mount('#app')
