var canvas, ctx;
var currentX = 0;
var currentY = 0;
var newImg = new Image();
var origImg = "temp";

canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

  
function drawOriginalImage() {
  // console.log("from original pictue fxn")
  const img = document.getElementById(origImg);  
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

function go(){
  setInterval(function() {
    drawOriginalImage(); //reseting canvas
    writeTxt();
    // drawNewImg();
  }, 1000/30);
}

function drawNewImg(){
  // console.log("from new img fxn");
  ctx.drawImage(newImg, currentX, currentY, newImg.width<canvas.width ? newImg.width : canvas.width / 4, newImg.height<canvas.height ? newImg.height : canvas.height / 4);
}

window.onload = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawOriginalImage(canvas, ctx);
  //draw new image given by user
  newImg = new Image();
  newImg.src = 'https://raw.githubusercontent.com/kanwarjotp/Imprctl-Jkrs-Meme-Creator/0ec2b299ab0e521857ab6ddf274c32804a0856e0/impkrs%20imgs/img1.jpg?raw=true'

  newImg.onload = function() {
    go();
  }
}

function writeTxt() {
  var txt = document.getElementById("line").value;
  // ctx.textBaseline = "middle";
  ctx.fillStyle = "red";
  ctx.font = "small-caps bold 50px arial";
  ctx.fillText(txt, 50, 150);
}

function downImg() {
  var img=new Image();
  img.crossOrigin="anonymous"
  console.log("activated");
  let link = canvas.toDataURL();
  img.src = link;
  // let node = document.getElementById('downButton');
  // let txt = '<a id="downLink" href="' + link + '"> CLICK HERE ! </a>';
  // node.insertAdjacentHTML("afterend", txt);
  // window.open('"'+link+'"');
}

function choseImg(imgId) {
  origImg = imgId; 
}