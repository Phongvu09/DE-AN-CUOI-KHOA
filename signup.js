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

const button = document.getElementById("dangnhap");

button.addEventListener("click", () => {
  console.log(1);
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const cpassword = document.getElementById("cpassword").value;
  if (email == "" || password == "" || cpassword == "") {
    alert("NHẬP THIẾU Ô!");
  } else {
    if (password == cpassword) {
      alert("Mật khẩu đẫ khớp");
      location.href = "signin.html";
      const array = [
        {
          email: "email",
          password: "password",
        },
      ];
      const setjson = JSON.stringify(obj);
      localStorage.setItem("API", setjson);
    } else {
      alert("Mật khẩu chưa khớp");
    }
  }
});
