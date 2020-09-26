class Tree{
    
    constructor(x, y)
	{
		this.x = x;
		this.y = y;
		this.TreeWidth = 450;
		this.TreeHeight = 600;
		this.TreeThickness = 10

		this.image=loadImage("images/tree.png");
		this.TreeBody = Bodies.rectangle(this.x, this.y, this.TreeWidth, this.TreeThickness, {isStatic = true});

		World.add(world, this.TreeBody);
		
	}
	
	display()
	{
	  var position = this.TreeBody.position;	
	  push()
	  translate(position.x, position.y);		
	  fill(255)
	  imageMode(CENTER);
	  image(this.image, 0, -this.TreeHeight/2, this.TreeWidth, this.TreeHeight);
	  pop();
	}

}