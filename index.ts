#! /usr/bin/env node

import inquirer from "inquirer";

let c_value: {[key: string]: number} = {
    PKR: 278.40,
    UAE: 3.67,
    INR: 3.32,
    TAKA: 2.53,
    SAR:  73.92,
    OMR: 722.85,
    CAD: 201.29,
    CNY: 39.01,
    JPY: 1.81,
    AUD: 179.91,
    NZD: 164.80,
    USD: 1
}




let ans = await inquirer.prompt([{
    type: "list",
    name: "from",
    message: "convertingg from",
    choices: ['PKR','UAE','USD','INR','TAKA','SAR','OMR','CAD','CNY','JPY','AUD','NZD',]
},
{
    type: "list",
    name: "to",
    message: "convertingg to",
    choices: ['PKR','UAE','USD','INR','TAKA','SAR','OMR','CAD','CNY','JPY','AUD','NZD']
},
{
    type: "number",
    name: "amount",
    message: "your amount to convert"
}


])

console.log(c_value[ans.to] / c_value[ans.from] * ans.amount);