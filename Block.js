class Block {
    constructor(x, y, width, height) {
      var options = {
           restitution : 0.8,
          density: 0.7,
          friction :0.4,
          isStatic:false
   
           
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
       
      push();
      translate(pos.x, pos.y);
       
      rectMode(CENTER);
      fill(247,88,147);
       
      rect(0, 0, this.width, this.height);
      pop();
    }
  } 