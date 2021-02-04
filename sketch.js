const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var drop;

function preload(){
    
}

function setup(){
    createCanvas(600,800)
   
    engine = Engine.create();
    world = engine.world;

    drop = new Rain(50,1,20/2)
    
    Engine.run(engine);
}

function draw(){
    background("black");
    drop.display();
    
}   

