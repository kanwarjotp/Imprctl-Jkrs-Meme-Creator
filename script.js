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
  newImg.src = 'https://thumbs-prod.si-cdn.com/vykbs6TJSb8Z8Jv6dCPQldUI6M0=/fit-in/1600x0/https://public-media.si-cdn.com/filer/01/a8/01a82275-e542-47c5-aa79-1af3caecdac4/gettyimages-1010735052.jpg'

  newImg.onload = function() {
    go();
  }
}

function writeTxt() {
  var txt = document.getElementById("line").value;
  console.log(txt);
  // ctx.textBaseline = "middle";
  ctx.fillStyle = "red";
  ctx.font = "small-caps bold 50px arial";
  ctx.fillText(txt, 50, 150);
}

function downImg() {
  console.log("activated")
  let link = canvas.toDataURL()
  let node = document.getElementById('downButton');
  let txt = '<a id="downLink" href="' + link + '"> CLICK HERE ! </a>';
  node.insertAdjacentHTML("afterend", txt);
  window.open('"'+link+'"');
}

function choseImg(imgId) {
  origImg = imgId; 
}