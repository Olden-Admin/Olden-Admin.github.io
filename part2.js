function calculateCommission() {
   // Retrieve input values
   const salespersonName = document.getElementById("salespersonName").value.trim();
   const item1Qty = parseInt(document.getElementById("item1").value);
   const item2Qty = parseInt(document.getElementById("item2").value);
   const item3Qty = parseInt(document.getElementById("item3").value);
   const item4Qty = parseInt(document.getElementById("item4").value);

   const resultsArea = document.getElementById("resultsArea");
   resultsArea.innerHTML = ""; // Clear previous results

   // Validate inputs
   if (salespersonName === "" || isNaN(item1Qty) || isNaN(item2Qty) || isNaN(item3Qty) || isNaN(item4Qty) || 
       item1Qty < 0 || item2Qty < 0 || item3Qty < 0 || item4Qty < 0) {
       
       resultsArea.innerHTML = "<p style='color:red;'>Error: Please enter a valid name and non-negative quantities for all items.</p>";
       return;
   }

   // Calculate the total sales amount
   const item1Price = 20.99;
   const item2Price = 12.75;
   const item3Price = 9.95;
   const item4Price = 35.89;

   const totalSales = (item1Qty * item1Price) + 
                      (item2Qty * item2Price) + 
                      (item3Qty * item3Price) + 
                      (item4Qty * item4Price);

   // Calculate the total earnings
   const baseSalary = 250;
   const commissionRate = 0.09;
   const totalEarnings = baseSalary + (totalSales * commissionRate);

   // Format the output to two decimal places
   const totalSalesFormatted = totalSales.toFixed(2);
   const totalEarningsFormatted = totalEarnings.toFixed(2);

   // Display the results
   let resultMessage = `<p>Salesperson: <strong>${salespersonName}</strong></p>`;
   resultMessage += `<p>Total Sales: <strong>$${totalSalesFormatted}</strong></p>`;
   resultMessage += `<p>Total Earnings (including base salary): <strong>$${totalEarningsFormatted}</strong></p>`;

   resultsArea.innerHTML = resultMessage;
}
