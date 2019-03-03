import * as inquirer from "inquirer"

const howAreYou = "How are you"
const howOldAreYou = "How old are you"

inquirer
  .prompt([
    {
      name: howAreYou,
      message: howAreYou,
      suffix: " >",
    },
    {
      name: howOldAreYou,
      message: howOldAreYou,
      suffix: " >",
      when: answers => {
        console.log("current answers:", answers)

        return true
      },
    },
  ])
  .then(console.log)
