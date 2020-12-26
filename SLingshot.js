class SLingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
        this.pointB = pointB
        this.slingshot = Constraint.create(options);
        World.add(world, this.rope);
    }
    attach(body){
        this.slingshot.bodyA = body;
    }
    
    fly(){
        this.slingshot.bodyA = null;
    }

    display(){
        if(this.slingshot.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
                strokeWeight(7);
                stroke("red")
                line(pointB.x, pointB.y, pointA.x, pointA.y);
                
            pop();
        }
    }
    
}