class Rain {
    constructor(x,y,r){
      var options={
          isStatic:false,
          restitution:0.96,
          friction:0.1,
          density:0.80
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options);
     
      World.add(world,this.body);
      
    }

    display(){
        var maxDrops=100
        var pos=this.body.position
        if(pos.y>height){
            Matter.Body.setPosition(this.Rain,{X:random(0,400),y:random(0,400)})
        }
        if(frameCount%20==0){
        for(var i=0;i<maxDrops;i++){
            Rain.push( new createDrop(random(0,400),random(0,400)));
        }
    }
        
        push()
        translate(pos.x,pos.y);
        fill("blue");
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop()
        
    }
}