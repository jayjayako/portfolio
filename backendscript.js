function openNav() {
  document.getElementById("myNav").style.width = "80%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function loadhome() {
  document.getElementById("cursor").style.display = "none";
  var i = 0;
  var txt1 = "Hi Im";
  var txt2 = "Arturo";
  var txt3 = "Web developer";
  var speed1 = 200;
  var speed2 = 300;
  var speed3 = 200;
  document.getElementById("job").style.display = "none";
  document.getElementById("typingcursor").style.display = "none";
  function clearalltext() {
    document.getElementById("hiim").innerHTML = "";
    document.getElementById("name").innerHTML = "";
    document.getElementById("job").innerHTML = "";
    document.getElementById("cursor").style.display = "none";
    document.getElementById("job").style.display = "none";
  }

  function typeWriter() {
    if (i < txt1.length) {
      document.getElementById("hiim").innerHTML = document
        .getElementById("hiim")
        .innerHTML.replace("_", "");
      document.getElementById("hiim").innerHTML += txt1.charAt(i) + "_";
      i++;
      setTimeout(typeWriter, speed1);
    } else {
      i = 0;
      document.getElementById("hiim").innerHTML = document
        .getElementById("hiim")
        .innerHTML.replace("_", "");
      typeWriter2();
    }
  }
  function typeWriter2() {
    if (i < txt2.length) {
      document.getElementById("name").innerHTML = document
        .getElementById("name")
        .innerHTML.replace("_", "");
      document.getElementById("name").innerHTML += txt2.charAt(i) + "_";
      i++;
      setTimeout(typeWriter2, speed2);
    } else {
      i = 0;
      document.getElementById("name").innerHTML = document
        .getElementById("name")
        .innerHTML.replace("_", "");
      typeWriter3();
    }
  }
  function typeWriter3() {
    document.getElementById("job").style.display = "inline-block";
    document.getElementById("typingcursor").style.display = "inline-block";
    if (i < txt3.length) {
      document.getElementById("job").innerHTML += txt3.charAt(i);
      i++;
      setTimeout(typeWriter3, speed3);
    } else {
      i = 0;
      document.getElementById("typingcursor").style.display = "none";
      document.getElementById("cursor").style.display = "inline-block";
      setTimeout(clearalltext, 5000);
      setTimeout(typeWriter, 6000);
    }
  }
  typeWriter();
}
