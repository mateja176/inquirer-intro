import * as inquirer from "inquirer"

const howAreYou = "How are you"

inquirer
  .prompt([
    {
      name: howAreYou,
      message: howAreYou,
      suffix: " >",
    },
  ])
  .then(console.log)
