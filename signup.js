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

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    forms.classList.toggle("show-signup");
  });
});
button.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const cpassword = document.getElementById("cpassword").value;
  if (email == "" || password == "" || cpassword == "") {
    alert("NHẬP THIẾU Ô!");
  } else {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    if (password == confirmpassword) {
      document.getElementById("cpassword").innerHTML = "Mật khẩu đã khớp";
    } else {
      document.getElementById("cpassword").innerHTML = (
        <span color="red"> Mật khẩu chưa khớp</span>
      );
      setTimeout(() => {
        location.href = "signin.html";
      }, 1000);
    }
  }
});
