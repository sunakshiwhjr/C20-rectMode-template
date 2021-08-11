
function setup()
{
   createCanvas(400, 400);

}


function draw()
{
    background("yellow");
 

    rect(200, 200, 60, 40);
  

    text(mouseX + "," + mouseY, mouseX, mouseY);

}