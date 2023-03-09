async function loadHam() {
  let request = new Request("js/hamjson.json");
  let response = await fetch(request);
  let json_obj = await response.json();

  loadImg();
  loadMenu(json_obj);
}
let container = document.querySelector(".container");
container.style.display = "flex";
container.style.height = "100%";
container.style.width = "100%";

let divgrp = document.createElement("div");
let divmenu = document.createElement("div");

function loadImg() {
  divgrp.style.height = "100vh";
  divgrp.style.width = "45%";
  divgrp.style.background = "url(./Images/a31.jpg)";
  divgrp.style.backgroundSize = "cover";
  container.appendChild(divgrp);
}

function loadMenu(ham_json_obj) {
  divmenu.style.position = "relative";
  divmenu.style.height = "100%";
  divmenu.style.width = "55%";
  backgroundColor = "#fff";
  container.appendChild(divmenu);

  let a = document.createElement("a");
  let img = document.createElement("img");
  a.href = "btshome";
  img.src = ham_json_obj["cross"];
  img.style.float = "right";
  img.style.marginTop = "3.5%";
  img.style.height = "25px";
  img.style.paddingRight = "5%";
  a.appendChild(img);
  divmenu.appendChild(a);

  let p = document.createElement("p");
  p.textContent = ham_json_obj["logo"];
  p.style.marginTop = "1%";
  p.style.fontFamily = "Outfit";
  p.style.fontStyle = "normal";
  p.style.fontWeight = "bold";
  p.style.fontSize = "2.1rem";
  p.style.lineHeight = "5rem";
  p.style.padding = "0 6rem";
  p.style.letterSpacing = "0.06em";
  p.style.color = "#2f2f20";
  p.style.textShadow = "0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25)";
  p.style.zIndex = "5";
  divmenu.appendChild(p);

  let divtext = document.createElement("div");
  divtext.style.fontFamily = "Open Sans";
  divtext.style.padding = "0 6rem";
  divtext.style.fontSize = "30px";
  divtext.style.lineHeight = "60px";
  divtext.style.color = "#000000";
  divtext.style.cursor = "pointer";
  divmenu.appendChild(divtext);

  let hometext = document.createElement("p");
  hometext.className = "hometxt";
  hometext.textContent = ham_json_obj["home"];
  hometext.style.marginTop = "10%";
  hometext.style.marginBottom = "3%";
  hometext.style.fontFamily = "Open Sans";
  hometext.style.fontStyle = "italic";
  hometext.style.fontWeight = "300";
  hometext.style.fontSize = "30px";
  /* line-height: 200px; */
  hometext.style.color = "#d5cc93";
  divtext.appendChild(hometext);

  let abts = document.createElement("a");
  let pbts = document.createElement("p");
  pbts.id = "bts";
  pbts.textContent = ham_json_obj["bts"];
  abts.appendChild(pbts);
  abts.href = "btshome";
  abts.style.textDecoration = "none";
  abts.style.color = "#000000";
  divtext.appendChild(abts);

  let a_rm = document.createElement("a");
  a_rm.href = "rm";
  a_rm.style.textDecoration = "none";
  a_rm.style.color = "#000000";
  let pmembers = document.createElement("p");
  pmembers.id = "members";
  pmembers.textContent = ham_json_obj["members"];
  a_rm.appendChild(pmembers);
  divtext.appendChild(a_rm);

  let amerch = document.createElement("a");
  let pmerch = document.createElement("p");
  pmerch.id = "merch";
  pmerch.textContent = ham_json_obj["merch"];
  amerch.appendChild(pmerch);
  // amerch.href = "homejson.html";
  amerch.style.textDecoration = "none";
  amerch.style.color = "#000000";
  divtext.appendChild(amerch);

  let a_about = document.createElement("a");
  a_about.href = "aboutus";
  a_about.style.textDecoration = "none";
  a_about.style.color = "#000000";
  let pabout = document.createElement("p");
  pabout.id = "about";
  pabout.textContent = ham_json_obj["about"];
  a_about.appendChild(pabout);
  divtext.appendChild(a_about);

  let flowerimg = document.createElement("img");
  flowerimg.src = ham_json_obj["flower3"];
  flowerimg.style.position = "absolute";
  flowerimg.style.right = "10%";
  flowerimg.style.top = "20%";
  flowerimg.style.transform = "rotate(30deg)";
  flowerimg.style.opacity = "0.5";
  divmenu.appendChild(flowerimg);

  let divleft = document.createElement("div");
  divleft.style.position = "absolute";
  divleft.style.padding = "0 6rem";
  divleft.style.fontFamily = "Open Sans";
  divleft.style.fontStyle = "normal";
  /* font-weight: 400; */
  divleft.style.fontSize = "20px";
  divleft.style.lineHeight = "41px";
  divleft.style.color = "rgba(0, 0, 0, 0.5)";
  divmenu.appendChild(divleft);

  let pmore = document.createElement("p");
  pmore.textContent = ham_json_obj["more"];
  pmore.style.marginTop = "40%";
  pmore.style.color = "#000000";
  pmore.style.fontWeight = "600";
  divleft.appendChild(pmore);

  let ul = document.createElement("ul");
  ul.style.listStyle = "none";
  let content = ham_json_obj["submenu"];
  for (let con of content) {
    let li = document.createElement("li");
    li.textContent = con;
    ul.appendChild(li);
    divleft.appendChild(ul);
  }
  let divright = document.createElement("div");
  divright.style.position = "absolute";
  divright.style.right = "0";
  divright.style.padding = "0 6rem";
  divright.style.fontFamily = "Open Sans";
  divright.style.fontStyle = "normal";
  /* font-weight: 400; */
  divright.style.fontSize = "20px";
  divright.style.lineHeight = "41px";
  divright.style.color = "rgba(0, 0, 0, 0.5)";
  divmenu.appendChild(divright);

  let psocial = document.createElement("p");
  psocial.textContent = ham_json_obj["social"];
  psocial.style.marginTop = "27%";
  psocial.style.color = "#000000";
  psocial.style.fontWeight = "600";
  divright.appendChild(psocial);

  let ul2 = document.createElement("ul");
  ul2.style.listStyle = "none";
  let content2 = ham_json_obj["submenu2"];
  for (let con2 of content2) {
    let li2 = document.createElement("li");
    li2.textContent = con2;
    ul2.appendChild(li2);
    divright.appendChild(ul2);
  }
}

loadHam();
