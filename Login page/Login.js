document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector(".login-box button");

  loginBtn.addEventListener("click", () => {
    const username = document.querySelector(".username").value;
    const password = document.querySelector(".password").value;

    //login API endpoint
    loginUser(username, password);
  });
});

async function loginUser(username, password) {
  const url = "http://localhost:3000/api/login";

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
      const data = await response.json();
      throw new Error(data.message || `HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    // If login successful
    // Redirect to index.html
    window.location.href = "/../index.html";
  } catch (error) {
    console.error("Error:", error.message);
    //error goes here
    alert("Incorrect username or password");
  }
}
