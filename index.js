const inquirer = require('inquirer');
const fs = require('fs');
const [Circle, Square, Triangle] = require('./lib/shapes');

class Svg{
    constructor(){
        this.texEl = ''
        this.shapeEl = ''
    }
   render({
    
   })
}



const questions = [
    {
        type: "input",
        name: "text",
        message: "Please input up to 3 characters:"
    },
    {
        type: "input",
        name: "textColor",
        message: "Please enter a color keyword (OR a hexadecimal number) for font color:"
    },
    {
        type: "list",
        name: "shape",
        choices: ["Square","Circle","Triangle"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Please enter a color keyword (OR a hexadecimal number) for background color:"
    }
]

const answers  = await inquirer.prompt(questions);