const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown',keyHandler);
}


let prog=0;
function keyHandler(e){
  console.log("key: ",e.which);
  console.log("Prog: ", prog);
  if(e.which===code[prog] || e.detail===code[prog]){
    prog++;
  } else {
    prog=0;
  }
  if(prog===10){
    alert("Hurray!");
  }
}