function validateForm() {
    const fullName = document.getElementById("fullName").value.trim();
    const ageGroup = document.querySelector("input[name='ageGroup']:checked");
    const browsers = document.querySelectorAll("input[name='browsers']:checked");
    const movieType = document.getElementById("movieType").value;

    let output = "";

    if (!fullName) output += "Please enter your full name.<br>";
    if (!ageGroup) output += "Please select your age group.<br>";
    if (browsers.length === 0) output += "Please select at least one browser.<br>";
    if (!movieType) output += "Please select your preferred movie type.<br>";

    document.getElementById("output").innerHTML = output ? output : "Thanks, your data was submitted!";
}
