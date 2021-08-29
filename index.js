const inquirer = require("inquirer")
const fs=require('fs')
const chalk = require('chalk');
const job= require('./lib/classes');
const htmlCode = require("./lib/renderHTML");
let team = []

//manager questions
const managerqs=[{
    type: 'input',
    name: 'name',
    message: `What is the Manager's name?`
},
{
    type: 'input',
    name: 'id',
    message: 'What is the employees id number?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is the employees email address?'
},
{
    type: 'input',
    name: 'office',
    message: 'What is the office number?',
    
},
{   type: 'list',
        name: 'save',
        message: `Do you want to save this employee?`,
        choices: ['Save', 'Cancel'],
                
    },   

]

//Other Questions
const questions = [
    {
        type: 'list',
        name: 'title',
        message: `Select an employee type to add.`,
        choices: ['Engineer', 'Intern', 'Generate'],
        
        
        
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the employees name?',
        when: (questions) => questions.title !== 'Generate'

    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employees id number?',
        when: (questions) => questions.title !== 'Generate'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employees email address?',
        when: (questions) => questions.title !== 'Generate'
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is the office number?',
        when: (questions) => questions.title === 'Manager'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is the employees GitHub username?',
        when: (questions) => questions.title === 'Engineer'
    },

    {
        type: 'input',
        name: 'school',
        message: `What is the intern's school name?`,
        when: (questions) =>  questions.title === 'Intern'
    },
    {   type: 'list',
        name: 'save',
        message: `Do you want to save this employee?`,
        choices: ['Save', 'Cancel'],
        when: (questions) => questions.title !== 'Generate'

        
    },   
    
]




//Load page and manager question function
function init() {
    console.log(chalk.blue(`
    ********************************************************************
    Let generate your staff profile? Answer the following Questions
    *******************************************************************`));
    inquirer.prompt(managerqs).then((data) => {
        
        (data.save=='Save') ? team.push(new job.Manager(data.name, data.id, data.email, data.office)) & menu() : console.log('Cancelled') ;
        

       
    });
}
   
 //Write to File Function 
        function writeToFile(file, data) { 
    
            fs.writeFile(file, data, (err) => {
            err ? console.log(err) : console.log("Success!");
        })
        
        }

//Initializer    
init();

//questions function
    function menu(){ inquirer.prompt(questions).then((data) => {
        
        
        data.save=='Save' & data.title === 'Engineer' ? team.push(new job.Engineer(data.name, data.id, data.email,  data.username)) & menu():
        data.title === 'Intern' & data.save==='Save' ? team.push(new job.Intern(data.name, data.id, data.email,  data.school)) & menu():
        data.title === 'Generate' ?  writeToFile('dist/rendered.html',htmlCode(team)) :console.log(' Cancelled') })}
            
        
    
