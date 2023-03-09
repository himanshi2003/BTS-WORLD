async function loadIntroPage() {
    let request = new Request("js/index2json.json");
    let response = await fetch(request);
    let json_obj = await response.json();

    loadImg(json_obj);
    loadFullForm(json_obj);
    loadLine(json_obj);
    loadButton(json_obj);
  }

  let div1 = document.querySelector(".background-image");

  function loadImg(bts_json_obj) {
    let img = document.createElement("img");
    img.src = bts_json_obj["image"];
    img.style.position = "fixed";
    img.style.left = "0";
    img.style.top = "-7px";
    img.style.backgroundRepeat = "no-repeat";
    img.style.width = "100%";
    img.style.height = "48rem";
    img.style.filter = "saturate(1.4)";
    img.style.opacity = "95%";
    img.style.backgroundPosition = "center center";
    img.style.backgroundAttachment = "fixed";
    img.style.backgroundSize = "cover";
    div1.appendChild(img);
  }

  let div2 = document.querySelector(".BPBS");

  function loadFullForm(bts_json_obj) {
    let p = document.createElement("p");
    p.textContent = bts_json_obj["fullform"];
    p.style.position = "absolute";
    p.style.width = "100%";
    p.style.left = " 50%";
    p.style.top = "69%";
    p.style.zIndex = "5";
    p.style.transform = "translate(-50%, -50%)";
    p.style.fontFamily = "Piazzolla";
    p.style.fontStyle = "normal";
    p.style.fontSize = "3.75rem";
    p.style.textAlign = "center";
    p.style.letterSpacing = "0.03em";
    p.style.color = "#ffffff";
    div2.appendChild(p);
  }
  let div3 = document.querySelector(".BB");

  function loadLine(bts_json_obj) {
    let p = document.createElement("p");
    p.textContent = bts_json_obj["line"];
    div3.appendChild(p);
    p.style.position = "absolute";
    p.style.zIndex = "5";
    p.style.width = "100%";
    p.style.left = "50%";
    p.style.top = "78%";
    p.style.transform = "translate(-50%, -50%)";
    p.style.fontFamily = "Oooh Baby";
    p.style.fontStyle = "normal";
    p.style.fontSize = "2.375rem";
    p.style.textAlign = "center";
    p.style.letterSpacing = "0.03em";
    p.style.color = "#ffffff";
  }
  let body = document.querySelector("body");
  function loadButton(bts_json_obj) {
    let button = document.createElement("button");
    let text = document.createTextNode("EXPLORE BTS");
    button.appendChild(text);
    button.style.position = "absolute";
    button.style.display = "inline-block";
    button.style.zIndex = "5";
    button.style.width = "11%";
    button.style.height = "3rem";
    button.style.left = "50%";
    button.style.top = "88%";
    button.style.transform = "translate(-50%, -50%)";
    button.style.fontFamily = "Piazzolla";
    button.style.fontStyle = "normal";
    button.style.fontSize = "1.25rem";
    button.style.textAlign = "center";
    button.style.background = "rgba(198, 181, 181, 0.4)";
    button.style.borderRadius = "0.9375rem";
    button.style.borderStyle = "none";
    button.style.cursor = "pointer";
    //   div3.appendChild(button);
    body.appendChild(button);
    button.onclick = function () {
      location.href = "btshome";
    };
  }
  loadIntroPage();