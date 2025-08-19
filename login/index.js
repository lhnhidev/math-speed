document.getElementById("login-tab").addEventListener("click", function () {
  document.getElementById("login-tab").classList.add("active");
  document.getElementById("register-tab").classList.remove("active");

  document.getElementById("login-form").classList.remove("flipped");
  document.getElementById("register-form").classList.add("flipped");
});

document.getElementById("register-tab").addEventListener("click", function () {
  document.getElementById("register-tab").classList.add("active");
  document.getElementById("login-tab").classList.remove("active");

  document.getElementById("register-form").classList.remove("flipped");
  document.getElementById("login-form").classList.add("flipped");
});

document
  .getElementById("show-register")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("register-tab").click();
  });

document.getElementById("show-login").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("login-tab").click();
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value;

  document
    .querySelectorAll(".error-message")
    .forEach((el) => (el.style.display = "none"));

  if (!username) {
    document.getElementById("login-username-error").textContent =
      "Vui lòng nhập tên đăng nhập hoặc email";
    document.getElementById("login-username-error").style.display = "block";
    isValid = false;
  }

  if (!password) {
    document.getElementById("login-password-error").textContent =
      "Vui lòng nhập mật khẩu";
    document.getElementById("login-password-error").style.display = "block";
    isValid = false;
  } else if (password.length < 6) {
    document.getElementById("login-password-error").textContent =
      "Mật khẩu phải có ít nhất 6 ký tự";
    document.getElementById("login-password-error").style.display = "block";
    isValid = false;
  }

  if (isValid) {
    console.log(username, password);
    const notyf = new Notyf();
    notyf.success("Đăng nhập thành công! Đang chuyển hướng...");
  }
});

// Register form validation
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    const email = document.getElementById("register-email").value.trim();
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById(
      "register-confirm-password"
    ).value;

    // Reset errors
    document
      .querySelectorAll(".error-message")
      .forEach((el) => (el.style.display = "none"));

    if (!email) {
      document.getElementById("register-email-error").textContent =
        "Vui lòng nhập email";
      document.getElementById("register-email-error").style.display = "block";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      document.getElementById("register-email-error").textContent =
        "Email không hợp lệ";
      document.getElementById("register-email-error").style.display = "block";
      isValid = false;
    }

    if (!password) {
      document.getElementById("register-password-error").textContent =
        "Vui lòng nhập mật khẩu";
      document.getElementById("register-password-error").style.display =
        "block";
      isValid = false;
    } else if (password.length < 6) {
      document.getElementById("register-password-error").textContent =
        "Mật khẩu phải có ít nhất 6 ký tự";
      document.getElementById("register-password-error").style.display =
        "block";
      isValid = false;
    }

    if (!confirmPassword) {
      document.getElementById("register-confirm-password-error").textContent =
        "Vui lòng xác nhận mật khẩu";
      document.getElementById("register-confirm-password-error").style.display =
        "block";
      isValid = false;
    } else if (password !== confirmPassword) {
      document.getElementById("register-confirm-password-error").textContent =
        "Mật khẩu không khớp";
      document.getElementById("register-confirm-password-error").style.display =
        "block";
      isValid = false;
    }

    if (isValid) {
      console.log(email, password);
      const notyf = new Notyf();
      notyf.success("Đăng ký thành công! Vui lòng đăng nhập.");
      setTimeout(() => {
        document.getElementById("login-tab").click();
        document.getElementById("registerForm").reset();
      }, 500);
    }
  });
