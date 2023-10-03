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

let grade = prompt("Enter grade information");
if (grade >= 0 && grade <= 100) {
let letterGrade;

  if (grade < 50) 
    letterGrade = "FF :(";
   else if (grade < 60) 
    letterGrade = "FD :)";
   else if (grade < 65) 
    letterGrade = "DD :)";
   else if (grade < 70) 
    letterGrade = "DC :)";
   else if (grade < 75) 
    letterGrade = "CC :)";
   else if (grade < 80) 
    letterGrade = "CB :)";
   else if (grade < 85) 
    letterGrade = "BB :)";
   else if (grade < 90) 
    letterGrade = "BA :)";
   else 
    letterGrade = "AA :)";
  
    document.querySelector("#info").innerHTML = letterGrade;
} else {

  // Alert the user of the error
  alert("Please enter information in the correct range");
}
