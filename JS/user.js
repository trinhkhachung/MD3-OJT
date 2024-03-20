window.onload = function () {
  displayUsers();
};

function displayUsers() {
  const usersList = document.getElementById("usersList");
  usersList.innerHTML = "";

  // Get users from Local Storage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  users.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${user.userId}</td>
        <td>${user.userName}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>${user.address}</td>
          <button onclick="edituser(${user.userId})">Edit</button>
          <button onclick="deleteuser(${user.userId})">Delete</button>
        </td>
      `;
    usersList.appendChild(row);
  });
}


function edituser(userId) {
  // Find User by id
  const Users = JSON.parse(localStorage.getItem("users")) || [];
  const UserToEdit = Users.find((User) => User.userId === userId);
  console.log(userId);
  if (UserToEdit) {
    const newUserName = prompt("Enter new name:", UserToEdit.userName);
    const newEmail = prompt("Enter new email:", UserToEdit.email);
    const newPassword = prompt("Enter new password:", UserToEdit.password);
    const newAddress = prompt("Enter new address:", UserToEdit.address);

    // Update User
    UserToEdit.userName = newUserName;
    UserToEdit.email = newEmail;
    UserToEdit.password = newPassword;
    UserToEdit.address = newAddress;

    // Update Local Storage
    localStorage.setItem("users", JSON.stringify(Users));

    // Refresh table
    displayUsers();
  } else {
    alert("User not found!");
  }
}

function deleteuser(userId) {
  // Find User by id
  const Users = JSON.parse(localStorage.getItem("users")) || [];
  const UserIndex = Users.findIndex((User) => User.userId === userId);

  if (UserIndex !== -1) {
    // Remove User from array
    Users.splice(UserIndex, 1);

    // Update Local Storage
    localStorage.setItem("users", JSON.stringify(Users));

    // Refresh table
    displayUsers();
  } else {
    alert("Product not found!");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Load default content (Dashboard) when page loads

  // Add event listeners to sidebar links

  document
    .getElementById("productsLink")
    .addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "product.html";
    });

  document
    .getElementById("ordersLink")
    .addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "user.html";
    });
});
