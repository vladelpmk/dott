# Project Title

Test assignment for interview process at [dott](https://ridedott.com)

## Test requirements

Write function addN with the following behavior:

```
const addEight = addN(8);
addEight(7); // resolves to 15
addEight(100); // 108
```

## Technical details

*Project structure*
```bash
├── src | entry for typescript compiler
│   ├── index.ts //test script 
│   └── addN.ts  //function solution
└── dis | output for compiled files
    ├── index.ts
    └── addN.ts
```

*Run project*
```
npm i && npm start
```

*Expected output*
```
15 108
```