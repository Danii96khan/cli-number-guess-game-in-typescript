#! /usr/bin/env node
import inquirer from "inquirer";

console.log("guess a number between 1 to 10");

let a:Number = Math.floor(Math.random()*10);
while(true){
    let input=await inquirer.prompt
    ({name:"guess",type:"number",
message:"enter your guess number:"})

let ans:number=input.guess

if(a==ans)
{console.log("congratulation your guess number is correct")
break;}
else{console.log("sorry try again")}
}