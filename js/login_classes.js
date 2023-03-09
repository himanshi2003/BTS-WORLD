{
  let body = document.getElementsByTagName("BODY")[0];
  body.style.width = "100vw";
  body.style.height = "100vh";

  let container = document.querySelector(".container");
  container.style.backgroundColor = "#f3f2f5";
  container.style.height = "100%";
  container.style.width = "100%";
  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";

  let login = document.createElement("login_box");
  login.style.width = "60%";
  login.style.height = "80%";
  login.style.backgroundColor = "#ffffff";
  login.style.display = "flex";
  login.style.alignItems = "center";
  container.appendChild(login);

  let col1 = document.querySelector(".col1");
  col1.style.width = "45%";
  col1.style.height = "100%";
  img = document.createElement("img");
  img.src = "images/2.jpg";
  img.style.height = "100%";
  img.style.width = "100%";
  img.style.display = "block";
  col1.appendChild(img);
  login.appendChild(col1);

  let col2 = document.querySelector(".col2");
  col2.style.fontFamily = '"Open Sans", sans-serif';
  col2.style.backgroundColor = "white";
  col2.style.width = "55%";
  col2.style.height = "100%";
  col2.style.position = "relative";
  login.appendChild(col2);

  let cross_a = document.createElement("a");
  cross_a.href = "btshome";
  let cross = document.createElement("img");
  cross.src = "images/Group.png";

  cross.style.position = "absolute";
  // cross.style.width = "1%";
  cross.style.height = "3%";
  cross.style.right = "4%";
  cross.style.top = "5%";
  cross_a.appendChild(cross);
  col2.appendChild(cross_a);

  {
    let h2 = document.createElement("h2");
    h2.textContent = "Log In";
    h2.style.fontSize = "25px";
    h2.style.marginTop = "30px";
    h2.style.marginBottom = "30px";
    h2.style.padding = "20px 50px 0px";
    col2.appendChild(h2);
  }

  let Email_Address = document.getElementById("Email_Address");
  // Email_Address.innerHTML = "Email Address";

  let Set_Password = document.getElementById("Set_Password");
  // Set_Password.innerHTML = "Set Password";

  Email_Address.style.padding = "10px 50px 10px";
  Email_Address.style.fontWeight = "500";

  let input1 = document.getElementById("input1");
  input1.placeholder = "Enter your Email";
  input1.type = "email";
  input1.style.padding = "10px";
  input1.style.borderRadius = "4px";
  input1.style.border = "1px solid black";
  input1.style.outline = "none";
  input1.style.display = "block";
  input1.style.width = "75%";
  input1.style.margin = "2px 0 10px 50px";
  col2.appendChild(Email_Address);
  col2.appendChild(input1);

  Set_Password.style.padding = "10px 50px 10px";
  Set_Password.style.fontWeight = "500";

  let input2 = document.getElementById("input2");
  input2.placeholder = "Enter your password";
  input2.type = "password";
  input2.style.padding = "10px";
  input2.style.borderRadius = "4px";
  input2.style.border = "1px solid black";
  input2.style.outline = "none";
  input2.style.display = "block";
  input2.style.width = "75%";
  input2.style.margin = "2px 50px 10px";
  col2.appendChild(Set_Password);
  col2.appendChild(input2);

  let row = document.querySelector(".row");
  row.style.display = "flex";
  row.style.alignItems = "center";

  let input3 = document.getElementById("input3");
  // input3.setAttribute("type", "checkbox");
  input3.style.margin = "20px 5px 10px 50px";

  let span1 = document.getElementById("span1");
  span1.textContent = "Remember Me";
  span1.style.padding = "20px 0px 10px";
  span1.style.fontWeight = "500";
  row.appendChild(input3);
  row.appendChild(span1);
  col2.append(row);

  // button1 = document.getElementsByClassName("btn");
  // col2.append(button1);
  // // button1.innerHTML = "LOG IN";
  // button1.style.color = "white";
  // button1.style.padding = "2px";
  // button1.style.borderRadius = "40px";
  // button1.style.width = "60%";
  // button1.style.height = "8%";
  // button1.style.margin = "25px 105px 20px";
  // button1.style.backgroundColor = "#060227";
  // button1.style.cursor = "pointer";
  // button1.style.fontSize = "20px";
  // col2.appendChild(button1);

  // let btn = document.getElementById("sub_1").getElementsByTagName("input");
  // btn.style.color = "white";
  // btn.style.backgroundColor = "#060227"
  let sign = document.createElement("span");
  let a_sign = document.createElement("a");
  sign.textContent = "Sign Up";
  a_sign.href = "register";
  a_sign.style.textDecoration = "none";
  a_sign.style.color = "black";
  sign.style.fontSize = "15px";
  sign.style.position = "absolute";
  sign.style.top = "62%";
  sign.style.margin = "50px";
  sign.style.paddingLeft = "70px";
  sign.style.paddingRight = "40px";
  let pass = document.createElement("span");
  pass.textContent = "Forget Password";
  pass.style.margin = "50px";
  pass.style.fontSize = "15px";
  pass.style.position = "absolute";
  pass.style.top = "62%";
  pass.style.left = "50%";
  let or = document.createElement("p");
  or.textContent = "or";
  or.style.fontSize = "15px";
  or.style.margin = "140px 0px 10px";
  or.style.textAlign = "center";

  let hr = document.createElement("hr");
  hr.style.width = "60%";
  hr.style.margin = "auto";
  a_sign.appendChild(sign);
  col2.appendChild(a_sign);
  col2.appendChild(pass);
  col2.appendChild(or);
  col2.appendChild(hr);

  let g_a = document.createElement("a");
  g_a.href = "#";
  let g_img = document.createElement("img");
  g_img.src = "images/google_icon.png";
  g_img.style.margin = "40px 5px -5px 157px";
  g_img.style.width = "4%";
  g_text = document.createElement("span");
  g_text.textContent = "Sign In with Google";
  g_a.style.textDecoration = "none";
  g_text.style.color = "black";
  g_a.appendChild(g_img);
  g_a.appendChild(g_text);
  col2.appendChild(g_a);
}
// class Login {
//   constructor(Email_Address, Set_Password) {
//     this.Email_Address = Email_Address;
//     this.Set_Password = Set_Password;
//   }
//   getemail() {
//     return this.Email_Address;
//   }

//   getpassword() {
//     return this.Set_Password;
//   }
// }

// let obj_array = [];

// function submit() {
//   Email_Address = document.getElementById("input1").value;
//   Set_Password = document.getElementById("input2").value;
//   let ob = new Login(Email_Address, Set_Password);
//   obj_array.push(ob);
//   document.getElementsByName("form_1")[0].reset();

// }
