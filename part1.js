function calculateGrade() {
   // Get form inputs
   const hwAvg = parseInt(document.getElementById("homeworkAvg").value);
   const midExam = parseInt(document.getElementById("midExam").value);
   const finalExam = parseInt(document.getElementById("finalExam").value);
   const participation = parseInt(document.getElementById("participation").value);

   const resultsArea = document.getElementById("resultsArea");
   resultsArea.innerHTML = ""; // Clear any previous results

   // Validate inputs are between 0 and 100
   if (isNaN(hwAvg) || hwAvg < 0 || hwAvg > 100 || 
       isNaN(midExam) || midExam < 0 || midExam > 100 || 
       isNaN(finalExam) || finalExam < 0 || finalExam > 100 || 
       isNaN(participation) || participation < 0 || participation > 100) {
       
       resultsArea.innerHTML = "<p style='color:red;'>Error: All input values must be numbers between 0 and 100.</p>";
       return;
   }

   // Calculate final average
   const finalAverage = Math.round((0.5 * hwAvg) + (0.2 * midExam) + (0.2 * finalExam) + (0.1 * participation));

   // Determine the final letter grade
   let letterGrade = '';
   if (finalAverage >= 90) letterGrade = 'A';
   else if (finalAverage >= 80) letterGrade = 'B';
   else if (finalAverage >= 70) letterGrade = 'C';
   else if (finalAverage >= 60) letterGrade = 'D';
   else letterGrade = 'F';

   // Display the final result
   let resultMessage = `<p>Final Average: <strong>${finalAverage}</strong></p>`;
   resultMessage += `<p>Final Grade: <strong>${letterGrade}</strong></p>`;
   
   // If the final grade is D or F, show a message
   if (letterGrade === 'D' || letterGrade === 'F') {
       resultMessage += "<p style='color:red;'>Student must retake the course.</p>";
   }

   // Output the result to the results area
   resultsArea.innerHTML = resultMessage;
}
