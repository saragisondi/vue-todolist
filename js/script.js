const {createApp} = Vue;

createApp({
data(){
  return{
   lists:
     [
      {
        text:'lista spesa',
        done: false,
      },
      {
        text:'lista',
        done: true,
      },
      {
        text:'spesa',
        done: false,
      }
    ]
  }
},






}).mount('#app')