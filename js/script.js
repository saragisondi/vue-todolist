const {createApp} = Vue;

createApp({
data(){
  return{
  lists:
    [
      {
        text:'Lista spesa',
        done: false,
      },
      {
        text:'Lista',
        done: true,
      },
      {
        text:'Spesa',
        done: false,
      },
      {
        text:'Lista',
        done: true,
      },
      {
        text:'Lista',
        done: true,
      },
    ],
    newToDo: '',
    
  }
},


methods:{


//creo una funzione per cancellare la riga al click del cestino
  deleteRow(i){
    this.lists.splice(i,1);
  }
}



}).mount('#app')