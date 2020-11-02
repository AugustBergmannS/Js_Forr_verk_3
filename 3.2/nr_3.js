let Person = {  
  name: 'Sam',  
  sayName: function(){    
     console.log('My name is '+ this.name);  
  }
};
buttonEl.addEventListener('click', Person.sayName);