document.addEventListener("DOMContentLoaded", () => {
  const signupBtn = document.querySelector(".signup-box button");

  signupBtn.addEventListener("click", () => {
    const createUsername = document.querySelector(".create-username").value;
    const createPassword = document.querySelector(".create-password").value;

    // password strength validation function
    if (isPasswordStrong(createPassword)) {
      // signup API endpoint here
      signupUser(createUsername, createPassword);
    } else {
      // error message for weak password
      alert(
        "Password must be at least 8 characters long and include a number and a symbol."
      );
    }
  });
});

function redirtoLogin() {
  window.location.href = "login.html";
}

function isPasswordStrong(password) {
  // min 8 chars, at least one number, at least one symbol
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return passwordRegex.test(password);
}

async function signupUser(username, password) {
  const url = "http://localhost:3000/api/register";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    // Display success message
    const successMessage = document.getElementById("reg-success-message");
    successMessage.style.display = "block";

    // Redirect to the login page after a delay (e.g., 3 seconds)
    setTimeout(() => {
      window.location.href = "login.html";
    }, 3000); // Adjust the delay as needed
  } catch (error) {
    console.error("Error:", error.message);
    // Handle error, e.g., show an error message to the user
  }
}
