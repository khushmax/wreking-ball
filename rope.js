class Rope{
constructor(body1,point2)
{
    var options = {
        bodyA : body1,
        pointB : point2,
        length : 350,
        stiffness : 0.1,
        
    }
    
    this.pointB = point2;

    this.rope = Constraint.create(options);
    World.add(world,this.rope);    
}

attach(body)
{
    this.rope.bodyA = body;
}

fly(){
    this.rope.bodyA = null;
}
 display()
 {
 if(this.rope.bodyA)   
  {
var pointA = this.rope.bodyA.position;
var pointB = this.pointB;
push();
stroke("yellow");
strokeWeight(4);
line(pointA.x,pointA.y,pointB.x,pointB.y);
pop();
  }
 }
 
}