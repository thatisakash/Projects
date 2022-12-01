function calc() {
  let prev_operand = document.getElementById("output").value;
  let next_operand = eval(prev_operand);
  document.getElementById("output").value = next_operand;
}

function display(calc_val) {
  document.getElementById("output").value += calc_val;
}

function clr() {
  document.getElementById("output").value = "";
}

function changesign() {
  let p1 = document.getElementById("output").value;
  clr();
  p1 = -p1;
  display(p1);
}

function back() {
  let p1 = document.getElementById("output").value;
  clr();
  p1 = (p1 - (p1 % 10)) / 10;
  display(p1);
}

function clearentry() {
  let p1 = document.getElementById("output").value;
  let str = p1.split("");
  //console.log(str);
  clr();
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i]>0) str.pop();
    else {
      p1 = str.join("");
      //console.log(p1);
      display(p1);
      return;
    }
  }
}
