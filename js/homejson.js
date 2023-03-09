async function loadHomePage() {
    let request = new Request("js/homejson.json");
    let response = await fetch(request);
    let json_obj = await response.json();

    loadFlower1(json_obj);
    loadFlower2(json_obj);
    loadGate(json_obj);
    loadBangtan(json_obj);
    loadQuote(json_obj);
    loadRM(json_obj);
    loadJin(json_obj);
    loadSuga(json_obj);
    loadJhope(json_obj);
    loadJimin(json_obj);
    loadV(json_obj);
    loadJungkook(json_obj);
  }
  let body = document.querySelector("body");
  let main = document.querySelector("main");
  body.style.backgroundColor = "#f3f2f5";

  function loadFlower1(home_json_obj) {
    let img = document.createElement("img");
    img.src = home_json_obj["flower1"];
    img.style.position = "absolute";
    img.style.opacity = "0.7";
    img.style.left = "0%";
    img.style.height = "65%";
    img.style.top = "15%";
    main.appendChild(img);
  }

  function loadFlower2(home_json_obj) {
    let img = document.createElement("img");
    img.src = home_json_obj["flower2"];
    img.style.position = "absolute";
    img.style.opacity = "0.7";
    img.style.right = "5%";
    img.style.height = "45%";
    img.style.top = "20%";
    main.appendChild(img);
  }

  function loadGate(home_json_obj) {
    let img = document.createElement("img");
    img.src = home_json_obj["gate"];
    img.style.position = "absolute";
    img.style.top = "15%";
    img.style.left = "46%";
    img.style.filter = "drop-shadow(0px 3.61011px 28.8809px #bd9be7)";
    img.style.width = "6.3rem";
    img.style.height = "8.125rem";
    img.style.zIndex = "0";
    main.appendChild(img);
  }

  function loadBangtan(home_json_obj) {
    let p = document.createElement("p");
    p.textContent = home_json_obj["bangtan"];
    p.style.position = "absolute";
    p.style.left = "37%";
    p.style.top = "40%";
    p.style.fontFamily = "Algerian";
    p.style.fontStyle = "normal";
    p.style.fontSize = "1.5625rem";
    /* font-weight: 500px; */
    p.style.letterSpacing = "0.07em";
    p.style.color = "#000000";
    main.appendChild(p);
  }

  function loadQuote(home_json_obj) {
    let p = document.createElement("p");
    p.textContent = home_json_obj["quote"];
    p.style.position = "absolute";
    p.style.left = "27%";
    p.style.top = "45%";
    p.style.fontFamily = "Oooh Baby";
    p.style.fontStyle = "normal";
    /* font-weight: 400; */
    p.style.fontSize = "4.0265rem";
    /* line-height: 135px; */
    /* identical to box height */

    p.style.letterSpacing = "0.07em";
    p.style.color = "#000000";
    p.style.textShadow = "0rem 0.4375rem 0.25rem rgba(132, 70, 137, 0.4)";
    main.appendChild(p);
  }

  let div = document.querySelector(".imagescroll");
  div.style.top = "60%";
  div.style.position = "absolute";
  div.style.width = "100%";
  div.style.overflow = "auto";
  div.style.whiteSpace = "nowrap";

  function loadRM(home_json_obj) {
    let a = document.createElement("a");
    let img = document.createElement("img");
    img.src = home_json_obj["RM"];
    img.style.margin = "1.25rem 1.25rem 1.875rem";
    img.style.height = "25rem";
    a.appendChild(img);
    a.href = "rm";
    a.style.display = "inline block";
    a.style.textDecoration = "none";
    div.appendChild(a);
    main.appendChild(div);
  }
  function loadJin(home_json_obj) {
    let a = document.createElement("a");
    let img = document.createElement("img");
    img.src = home_json_obj["Jin"];
    img.style.margin = "1.25rem 1.25rem 1.875rem";
    img.style.height = "28.125rem";
    a.appendChild(img);
    a.href = "jin";
    a.style.display = "inline block";
    a.style.textDecoration = "none";
    div.appendChild(a);
    main.appendChild(div);
  }
  function loadSuga(home_json_obj) {
    let a = document.createElement("a");
    let img = document.createElement("img");
    img.src = home_json_obj["Suga"];
    img.style.margin = "1.25rem 1.25rem 1.875rem";
    img.style.height = "26.875rem";
    a.appendChild(img);
    a.href = "suga";
    a.style.display = "inline block";
    a.style.textDecoration = "none";
    div.appendChild(a);
    main.appendChild(div);
  }
  function loadJhope(home_json_obj) {
    let a = document.createElement("a");
    let img = document.createElement("img");
    img.src = home_json_obj["Jhope"];
    img.style.margin = "1.25rem 1.25rem 1.875rem";
    img.style.height = "25rem";
    a.appendChild(img);
    a.href = "jhope";
    a.style.display = "inline block";
    a.style.textDecoration = "none";
    div.appendChild(a);
    main.appendChild(div);
  }
  function loadJimin(home_json_obj) {
    let a = document.createElement("a");
    let img = document.createElement("img");
    img.src = home_json_obj["Jimin"];
    img.style.margin = "1.25rem 1.25rem 1.875rem";
    img.style.height = "27.5rem";
    a.appendChild(img);
    a.href = "jimin";
    a.style.display = "inline block";
    a.style.textDecoration = "none";
    div.appendChild(a);
    main.appendChild(div);
  }
  function loadV(home_json_obj) {
    let a = document.createElement("a");
    let img = document.createElement("img");
    img.src = home_json_obj["V"];
    img.style.margin = "1.25rem 1.25rem 1.875rem";
    img.style.height = "25rem";
    a.appendChild(img);
    a.href = "v";
    a.style.display = "inline block";
    a.style.textDecoration = "none";
    div.appendChild(a);
    main.appendChild(div);
  }
  function loadJungkook(home_json_obj) {
    let a = document.createElement("a");
    let img = document.createElement("img");
    img.src = home_json_obj["Jungkook"];
    img.style.margin = "1.25rem 1.25rem 1.875rem";
    img.style.height = "27.5rem";
    a.appendChild(img);
    a.href = "jk";
    a.style.display = "inline block";
    a.style.textDecoration = "none";
    div.appendChild(a);
    main.appendChild(div);
  }
  loadHomePage();