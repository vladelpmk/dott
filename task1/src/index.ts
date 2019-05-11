import { addN } from './addN';

const addEight = addN(8);

const result1 = addEight(7); // resolves to 15 
const result2 = addEight(100); // 108

console.log(result1, result2);