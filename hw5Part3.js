const statesData = [
    ["AL", "Alabama", "Montgomery", "4,903,185"],
    ["AK", "Alaska", "Juneau", "731,545"],
    ["AZ", "Arizona", "Phoenix", "7,278,717"],
    ["AR", "Arkansas", "Little Rock", "3,017,825"],
    ["CA", "California", "Sacramento", "39,512,223"],
    ["CO", "Colorado", "Denver", "5,758,736"]
];

function lookupState() {
    const userInput = document.getElementById("stateInput").value.trim().toLowerCase();
    const stateInfo = statesData.find(([abbr, name]) => abbr.toLowerCase() === userInput || name.toLowerCase() === userInput);

    document.getElementById("stateOutput").innerHTML = stateInfo
        ? `Thanks for your inquiry, here is the information you requested:<br>
           State Abbr = ${stateInfo[0]}<br>
           State Name = ${stateInfo[1]}<br>
           Capital = ${stateInfo[2]}<br>
           Population = ${stateInfo[3]}`
        : `Sorry, we do not have information about this state! We only have information about AL, AK, AZ, AR, CA, and CO.`;
    
    return false;
}
