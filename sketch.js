function setup() {
    createCanvas(600, 600); 
    background("white");
  }
  
  function draw() {
    
    stroke("#3F51B5");
    fill("#03A9F4");
    
   // console.log (mouseIsPressed);
    
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 20, 45);                                          
    }
  }
  