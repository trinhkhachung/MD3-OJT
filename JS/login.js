// Elements của trang
const formLogin = document.getElementById("formLogin");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const alertError = document.getElementById("alertError");

// Lắng nghe sự kiện submit form đăng nhập tài khoản
formLogin.addEventListener("submit", function (e) {
  // Ngăn chặn sự kiện load lại trang
  e.preventDefault();

  // Validate dữ liệu đầu vào

  // Lấy dữ liệu từ local về
  const userLocal = JSON.parse(localStorage.getItem("users")) || [];

  // Tìm kiếm email và mật khẩu người dùng nhập vào có tồn tại trên local ?
  const findUser = userLocal.find(
    (user) =>
      user.email === emailElement.value &&
      user.password === passwordElement.value
  );

  if (!findUser) {
    // Nếu không thì thông báo cho người dùng nhập lại dữ liệu
    alertError.style.display = "block";
  } else {
    // Nếu có thì đăng nhập thành công và chuyển hướng về trang chủ
    window.location.href = "index.html";

    // Lưu thông tin của user đăng nhập lên local
    localStorage.setItem("userLogin", JSON.stringify(findUser));
  }
});

// Danh sách sản phẩm trên trang home
// const products = [
//   {
//     id: 1,
//     name: "iPhone 15 ProMax - Quốc Tế",
//     price: 31.699999,
//     description: "Like New 99%",
//     img: "../img/15tt.jpeg",
//   },
//   {
//     id: 2,
//     name: "iPhone 15 ProMax - Quốc Tế",
//     price: 31.699999,
//     description: "Like New 99%",
//     img: "../img/15tt.jpeg",
//   },
//   {
//     id: 3,
//     name: "iPhone 15 ProMax - Quốc Tế",
//     price: 31.699999,
//     description: "Like New 99%",
//     img: "../img/15tt.jpeg",
//   },
//   {
//     id: 4,
//     name: "iPhone 15 ProMax - Quốc Tế",
//     price: 31.699999,
//     description: "Like New 99%",
//     img: "../img/15tt.jpeg",
//   },
//   {
//     id: 5,
//     name: "iPhone 15 ProMax - Quốc Tế",
//     price: 31.699999,
//     description: "Like New 99%",
//     img: "../img/15tt.jpeg",
//   },
//   {
//     id: 6,
//     name: "iPhone 15 ProMax - Quốc Tế",
//     price: 31.699999,
//     description: "Like New 99%",
//     img: "../img/15tt.jpeg",
//   },
//   {
//     id: 7,
//     name: "iPhone 15 ProMax - Quốc Tế",
//     price: 31.699999,
//     description: "Like New 99%",
//     img: "../img/15tt.jpeg",
//   },
//   {
//     id: 8,
//     name: "iPhone 15 ProMax - Quốc Tế",
//     price: 31.699999,
//     description: "Like New 99%",
//     img: "../img/15tt.jpeg",
//   },
//   {
//     id: 9,
//     name: "iPhone 15 ProMax - Quốc Tế",
//     price: 31.699999,
//     description: "Like New 99%",
//     img: "../img/15tt.jpeg",
//   },
//   {
//     id: 10,
//     name: "iPhone 11 ProMax - Lock",
//     price: 31.699999,
//     description: "Like New 99%",
//     img: "../img/15tt.jpeg",
//   },
// ];

// Lưu trữ danh sách sản phẩm vào Local Storage để sử dụng trên trang admin
localStorage.setItem("products", JSON.stringify(products));
