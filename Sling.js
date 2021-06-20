class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 10
        }
       
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);

            strokeWeight(4);
            line(pointA.x - 0, pointA.y, pointB.x - 10, pointB.y + 10);
            line(pointA.x - 0, pointA.y, pointB.x + 10, pointB.y + 7);
            
        
           
           
            
            pop();
        }
    }
    
}