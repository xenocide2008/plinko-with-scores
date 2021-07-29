class Ball
{
    constructor(x,y)
    {
        var options={
            restitution:0.8 , isStatic:false , friction:1 , density:1
        }
        this.body=Bodies.circle(x,y,10,options);
              
        World.add(world,this.body);
    }

    display()
     {
         fill(random(0,255),random(0,255),random(0,255))
         ellipseMode(RADIUS);
         push()
         translate(this.body.position.x,this.body.position.y)
         rotate(this.body.angle)
         ellipse(0,0,10,10);
         pop()
         if(this.body.position.y>500&&this.body.position.x<250)
         {
             score=score+200
         }
     }   
    
}