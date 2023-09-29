// const inquirer = require('inquirer');
// const { join } = require('path');
// const { writeFile } = require('fs/promises');
// const { createDocument } = require('./document');

// class CLI {
//   constructor() {
//     this.title = '';
//     // Array of task objects e.g. [{ text: string, priority: bool }, ...]
//     this.tasks = [];
//   }
//   addTask() {
//     return inquirer
//       .prompt([
//         {
//           type: 'input',
//           name: 'text',
//           message: 'Enter task',
//         },
//         {
//           type: 'confirm',
//           name: 'priority',
//           message: 'Is this a priority task?',
//         },
//         {
//           type: 'confirm',
//           name: 'confirmAddTask',
//           message: 'Would you like to add another task?',
//         },
//       ])
//       .then(({ text, priority, confirmAddTask }) => {
//         this.tasks.push({ text, priority });
//         if (confirmAddTask) {
//           return this.addTask();
//         }
//       });
//   }
// }

// module.exports = CLI;
