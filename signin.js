const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});
const nemail = document.getElementById("nemail").value;
const npassword = document.getElementById("npassword").value;

localStorage.getItem("API");
const button = document.getElementById("dangnha");

button.addEventListener("click", () => {
  if (nemail == "" || npassword == "") {
    alert("NHẬP THIẾU Ô!");
  } else {
    if (nemail == email && npassword == password) {
      alert("Đăng Nhập Thành Công");
      location.href = "index.html";
    } else {
      alert("Mật khẩu hoặc Email không trùng khớp");
    }
  }
});
