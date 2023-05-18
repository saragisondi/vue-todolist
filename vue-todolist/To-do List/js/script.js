const {createApp} = Vue;

createApp({
data(){
  return{
  lists:
    [
      {
        text:'Fare la spesa',
        done: false,
      },
      {
        text:'Finire Esercizi Vue',
        done: true,
      },
      {
        text:'Fare la Lavatrice',
        done: false,
      },
      {
        text:'Fare bagnetto a Nedo',
        done: true,
      },
      {
        text:'Comprare crocchette per Nedo',
        done: true,
      },
    ],
    AddToDo: '',
    
  }
},


methods:{


//creo una funzione per cancellare la riga al click del cestino
  deleteRow(i){
    this.lists.splice(i,1);

  },

  NewToDo(){
    // console.log(event.key)

    //creo un nuovo oggetto
    const ToDo = {
      text: this.AddToDo,
      done: false
    }

    console.log(this.AddToDo)

    //aggiungo l'oggetto all'array
    this.lists.unshift(ToDo)

    //resetto il campo di input
    this.AddToDo="";

  }
  

}


}).mount('#app')