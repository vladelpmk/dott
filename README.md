# Project Title

Test assignment for interview process at [dott](https://ridedott.com)

## Test requirements

### Hi there, 

Thank you for taking the time to complete a code challenge with dott. 
Please solve these tasks in TypeScript and make sure to complete the challenge in 48 hours. 
Please commit your code to a Git repo we can access. 

Good luck and we hope you will find it interesting!

#### Task 1 

Write function addN with the following behavior:

```
const addEight = addN(8);
addEight(7); // resolves to 15
addEight(100); // 108
```


#### Task 2

Develop a simple application using Custom Elements which displays a search bar, a carousel of books (covers and basic information) you search for and a relative time of a moment the results were fetched. Aesthetic design will be a plus, but it's not a strict requirement.

* Develop the application in TypeScript.
* Focus on modern browser APIs, target the latest version of Chrome.
* The search bar should support both text and voice input (voice recognition). Some ideas on how to add voice recognition:
    * place a microphone button on the right side of an input;
    * use a keyword such as "search for".
* Use Open Library API (https://openlibrary.org/developers/api) to get the search results and images of book covers.
* There are multiple sizes of images available in the API, choose a correct size based on a viewport size.
* Automatically scroll the carousel through all search results in an infinite loop using modern, native techniques. Do not use any libraries.
* Stop scrolling when the webpage is in the background.
* Load images lazily as the carousel scrolls with a small buffer of a few images.
* Relative time of a moment when the last search query was performed should be updated automatically.
* Display the relative time in a user's preferred language (navigator.language).
