"use strict";

const visible = () => {
  let ele = document.getElementById("password");
  ele.type = "text";

  let ele2 = document.getElementById("changeButton");
  ele2.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
};

const disable = () => {
  let ele = document.getElementById("password");
  ele.type = "password";

  let ele2 = document.getElementById("changeButton");
  ele2.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
};
