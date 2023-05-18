 **Vue To Do List**
 ======

**Descrizione:**
Rifare l’esercizio della to do list.
Ogni todo sarà un oggetto, formato da due proprietà:
- `text`: una stringa che indica il testo del todo;
- `done`: un booleano (true/false) che indica se il todo è stato fatto oppure no;

**MILESTONE 1**
Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà `done` è uguale a `true`, visualizzare il testo del todo ~~sbarrato~~.

**MILESTONE 2**
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

**MILESTONE 3**
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

**Bonus:**
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se `done` era uguale a `false`, impostare `true` e viceversa)

### **STEPS**

1. Creo il Markup e gli stili;
2. Creo un array di oggetti dove andrò a inserire la lista delle cose da fare e se la cosa da fare è stata fatta oppure no;
3. Faccio  un ciclo per visualizzare la lista di oggetti;
4. Faccio un If per verificare quale oggetto della lista sia già stato fatto e sbarrare quelli fatti;
5. Faccio una funzione per eliminare un oggetto dalla lista;
6. Creo un input text con il tasto aggiungi;
7. Creo una funzione ( che collego al tasto enter) dove all'interno mi creo una costante per il nuovo To Do che verrà inserito e lo aggiungo all'array, dopodiché svuoto il campo di input;