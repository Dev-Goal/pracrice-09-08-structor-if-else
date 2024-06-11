// let txt = prompt("What is the 'offical' name of JS?", "");
// if (txt == "ECMAScript") {
//   alert("Yeah, Right");
// } else {
//   alert("Didn't you know?ECMAScript");
// }

var check = document.getElementById("btn1");
check.addEventListener("click", getCheck);
function getCheck() {
  txtCheck = document.getElementById("txt1").value;
  if (txtCheck == "ECMAScript") {
    document.getElementById("result").innerHTML = "Yeah, right!";
  } else {
    document.getElementById("result").innerHTML = "Didn't you know? ECMAScript";
  }
}

var reset = document.getElementById("btn2");
reset.addEventListener("click", getReset);
function getReset() {
  location.reload();
}
