function calculateCommission() {
    // Retrieve input values
    const salespersonName = document.getElementById("salespersonName").value.trim();
    const item1Qty = parseInt(document.getElementById("item1").value);
    const item2Qty = parseInt(document.getElementById("item2").value);
    const item3Qty = parseInt(document.getElementById("item3").value);
    const item4Qty = parseInt(document.getElementById("item4").value);

    const resultsTableBody = document.getElementById("resultsTableBody");
    const summaryArea = document.getElementById("summaryArea");
    resultsTableBody.innerHTML = ""; // Clear previous table rows
    summaryArea.innerHTML = ""; // Clear previous summary

    // Validate inputs
    if (salespersonName === "" || isNaN(item1Qty) || isNaN(item2Qty) || isNaN(item3Qty) || isNaN(item4Qty) || 
        item1Qty < 0 || item2Qty < 0 || item3Qty < 0 || item4Qty < 0) {
        
        resultsTableBody.innerHTML = "<tr><td colspan='4' style='color:red;'>Error: Please enter a valid name and non-negative quantities for all items.</td></tr>";
        return;
    }

    // Calculate the total sales amount
    const item1Price = 20.99;
    const item2Price = 12.75;
    const item3Price = 9.95;
    const item4Price = 35.89;

    const item1Total = item1Qty * item1Price;
    const item2Total = item2Qty * item2Price;
    const item3Total = item3Qty * item3Price;
    const item4Total = item4Qty * item4Price;

    const totalSales = item1Total + item2Total + item3Total + item4Total;

    // Calculate the total earnings
    const baseSalary = 250;
    const commissionRate = 0.09;
    const totalEarnings = baseSalary + (totalSales * commissionRate);

    // Format the output to two decimal places
    const item1TotalFormatted = item1Total.toFixed(2);
    const item2TotalFormatted = item2Total.toFixed(2);
    const item3TotalFormatted = item3Total.toFixed(2);
    const item4TotalFormatted = item4Total.toFixed(2);
    const totalSalesFormatted = totalSales.toFixed(2);
    const totalEarningsFormatted = totalEarnings.toFixed(2);

    // Create table rows for each item
    const rows = `
        <tr><td>1</td><td>$${item1Price}</td><td><input readonly value="${item1Qty}"></td><td><input readonly value="$${item1TotalFormatted}"></td></tr>
        <tr><td>2</td><td>$${item2Price}</td><td><input readonly value="${item2Qty}"></td><td><input readonly value="$${item2TotalFormatted}"></td></tr>
        <tr><td>3</td><td>$${item3Price}</td><td><input readonly value="${item3Qty}"></td><td><input readonly value="$${item3TotalFormatted}"></td></tr>
        <tr><td>4</td><td>$${item4Price}</td><td><input readonly value="${item4Qty}"></td><td><input readonly value="$${item4TotalFormatted}"></td></tr>
    `;
    resultsTableBody.innerHTML = rows;

    // Display final summary
    summaryArea.innerHTML = `
        <p><strong>Total Amount Sold: $${totalSalesFormatted}</strong></p>
        <p><strong>Total Weekly Earnings: $${totalEarningsFormatted}</strong></p>
    `;
}
