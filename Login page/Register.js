document.addEventListener("DOMContentLoaded", () => {
  const signupBtn = document.querySelector(".signup-box button");

  signupBtn.addEventListener("click", () => {
    const createUsername = document.querySelector(".create-username").value;
    const createPassword = document.querySelector(".create-password").value;

    //signup API endpoint call
    signupUser(createUsername, createPassword);
  });
});

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

    // If signup successful
    //do shit here
  } catch (error) {
    console.error("Error:", error.message);
    //error goes here
  }
}
