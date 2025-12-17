const user = JSON.parse(localStorage.getItem("qbits_user"));
if (!user) location.href = "login.html";

function logout() {
  localStorage.removeItem("qbits_user");
  location.href = "index.html";
}
