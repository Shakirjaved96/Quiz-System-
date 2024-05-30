#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from "chalk"

// welcome message
console.log(chalk.bold.yellow(
    "\n\n<================================THIS IS QUIZ SYSTEM====================================>\n"));

let questions = [
    {
        question: "1 kilobyte (kb) = ___bytes ?",
        choices: ["1024", "1000", "1275"],
        correctAnswer: "1024",
    },
    {
        question: "What is the output of the following JavaScript code: console.log(2 + '2' - 1)?",
        choices: ["21","23","1","NaN"],
        correctAnswer: "23",
    },
    {
        question: "What is software?",
        choices: ["any part of the computer that has a physical structure", "flexible parts of a computer case", "instructions that tell the hardware what to do"],
        correctAnswer: "instructions that tell the hardware what to do",
    },
    {
        question: "The computer's main circuit board is called a ______?",
        choices: ["monitor", "motherboard", "Bluetooth card"],
        correctAnswer: "motherboard",
    },
    {
        question: "Which programming language is known for its use in web development alongside HTML and CSS?",
        choices: ["JavaScript","Python","Java","C++"],
        correctAnswer: "JavaScript"
    }
];

function runQuiz() {
    let score = 0;

    let askQuestion = async (index: number) => {
        if (index >= questions.length) {
            console.log((chalk.underline`Quiz completed! You scored ${score} out of ${questions.length}.`));
            return;
        }

        let questionData = questions[index];
        let { question, choices, correctAnswer } = questionData;

        let answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'userAnswer',
                message: question,
                choices: choices,
            },
        ]);

        if (answer.userAnswer === correctAnswer) {
            console.log(chalk.green("Correct!\n"));
            score++;
        } else {
            console.log(chalk.red (`Wrong`));
            let correct = (chalk.yellow(`The correct answer is: ${correctAnswer}\n`));
            console.log(correct)
        }

        askQuestion(index + 1);
    };

    
     askQuestion(0);
}

 runQuiz();

