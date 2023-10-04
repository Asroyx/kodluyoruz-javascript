// Conditions Exercise: Final Exercise
/*
AA 90-100
BA 85-89
BB 80-84
CB 75-79
CC 70-74
DC 65-69
DD 60-64
FD 50-59
FF. 0-49
1. Display the grade information in #info using the following structure based on the information you receive with prompt
2. Check if the data entered by the user is within the desired range
3. Display a sad face icon in FF information, and a smiley face in the others :)
4. The FF class information should be text-danger, and the others should be text-primary
*/
const smile = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`;

const frown = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`;

let info = document.querySelector("#info");
const grade = prompt("Enter grade information");
let letterGrade = smile;
if (grade >= 0 && grade <= 100) {

  info.classList.add("text-primary");
  if (grade >= 90) 
  letterGrade += " AA";
  else if (grade >= 85) 
  letterGrade += " BA";
  else if (grade >= 80) 
  letterGrade += " BB";
  else if (grade >= 75) 
  letterGrade += " CB";
  else if (grade >= 70) 
  letterGrade += " CC";
  else if (grade >= 65) 
  letterGrade += " DC";
  else if (grade >= 60) 
  letterGrade += " DD";
  else if (grade >= 50) 
  letterGrade += " FD";

  else if (grade < 50) {
    info.classList.remove("text-primary");
    info.classList.add("text-danger");
    letterGrade = `${frown} FF`;
  }
} else {
  // Alert the user of the error
  alert("Please enter information in the correct range");
}

info.innerHTML = `${letterGrade} -> ${grade}`;
