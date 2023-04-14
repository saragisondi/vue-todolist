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
      }
    ],
  }
},






}).mount('#app')