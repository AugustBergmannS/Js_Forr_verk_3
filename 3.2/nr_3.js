let Person = {  
  name: 'Sam',  
  sayName: function(){    
     return 'My name is '+ this.name;  
  }
};
const pp = Person.sayName;
const bb = pp.bind(Person);
buttonEl.addEventListener('click', bb);
console.log(bb());
