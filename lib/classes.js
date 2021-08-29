const htmlCode = require('./renderHTML')

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }

    getName() { return this.name }
    getId() { return `ID: ${this.id}` }
    getEmail() { return `Email: <a href="mailto:${this.email}">${this.email}</a>`}
    getRole() { return 'Employee' }
}

class Manager extends Employee {
      
    constructor(name, id, email, office) {
        super(name, id, email);
       this.office = office
        
    }
     
    getRole() {
         return 'Manager' 
        }
    getofficeNumber() {
         return `Office Number: <a href="tel:${this.office}">${this.office}</a>`
         };
      
   
}
class Engineer extends Employee {
    constructor(name, id, email, username) {
        super(name, id, email);
        this.username = username;
        
    }
    getRole() { return `Engineer` }
    getGithub() { return `GitHub: <a href="https://github.com/${this.username}">${this.username}</a> ` }

}

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
       
    }

    getRole() { return 'Intern' };
    getSchool() { return `School: ${this.school}`};
    
    
    
}

 function generateObject(data) {
  
     data.office ? ()=>{ return  new Manager(data.name, data.id, data.email, data.office)} :  
        data.title === 'Engineer' ? engineer = new Engineer(data.name, data.id, data.email, data.username) &  console.log('eninee') :
            data.title === 'Intern' ? intern = new Intern(data.name, data.id, data.email, data.school) : console.log('failed!');
            
                  


}



function getGithub() {  `GitHub: <a href="https://github.com/${username}">${username}</a> ` }

exports.generateObject=generateObject;
exports.Manager=Manager;
exports.Intern=Intern;
exports.Engineer=Engineer;
exports.Employee=Employee

    

