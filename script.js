function volunteer() {
    // You can replace the URL below with the actual URL of your Google Form
    var googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdNWBPU9H0hBOYIOy-v7-4pJIrxYAeeiuYIkLuopKpX7Wlmfg/viewform?usp=sf_link";
    window.open(googleFormUrl, "_blank");
}

function donate() {
    // You can replace the URL below with the actual payment gateway URL
    window.location.href = "https://paytm.com/";
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform basic validation
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }

    // Add your logic for login here (e.g., API call, authentication checks)
    // For demonstration purposes, just show an alert
    alert("Login successful for user: " + username);
}



