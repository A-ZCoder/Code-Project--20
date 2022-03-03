const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var engine, world;

var box;
var ball1, ball2, ball3, ball4, ball5;
var ball6, ball7, ball8, ball9, ball10;
var rotator1, rotator2, rotator3;
var rotator4, rotator5, rotator6, rotator7;
var rotator8, rotator9;

angle1 = 500
angle2= 500
angle3 = 500
angle4 = 500
angle5 = 500
angle6 = 500
angle7 = 500
angle8 = 500
angle9 = 500

function setup() {
createCanvas(1000,600)

engine = Engine.create()
world = engine.world


var brick_options={
  isStatic : true
}

plane= Bodies.rectangle(width/2, height-7,1000,20, brick_options)
World.add(world, plane)
plane2= Bodies.rectangle(width/2, 6,1000,20, brick_options)
World.add(world, plane2)
plane3= Bodies.rectangle(width/2+489, height/2,20,1000, brick_options)
World.add(world, plane3)
plane4= Bodies.rectangle(width/2-493, height/2,20,1000, brick_options)
World.add(world, plane4)

var ball_options = {
  restitution : 1.28,
  friction: 0.02,
}



box = Bodies.rectangle(width/2, 20, 50,50)
World.add(world, box)

ball1 = Bodies.circle(width/2, 20, 13, ball_options)
World.add(world, ball1)
ball2 = Bodies.circle(width/2+10, 20, 13, ball_options)
World.add(world, ball2)
ball3 = Bodies.circle(width/2-10, 20, 13, ball_options)
World.add(world, ball3)
ball4 = Bodies.circle(width/2-5, 20, 13, ball_options)
World.add(world, ball4)
ball5 = Bodies.circle(width/2+5, 20, 13, ball_options)
World.add(world, ball5)
ball6 = Bodies.circle(width/2-5, 30, 13, ball_options)
World.add(world, ball6)
ball7 = Bodies.circle(width/2-15, 10, 13, ball_options)
World.add(world, ball7)
ball8 = Bodies.circle(width/2+15, 20, 13, ball_options)
World.add(world, ball8)
ball9 = Bodies.circle(width/2+7, 20, 13, ball_options)
World.add(world, ball9)
ball10 = Bodies.circle(width/2-7, 20, 13, ball_options)
World.add(world, ball10)
ball11 = Bodies.circle(width/2+15, 10, 13, ball_options)
World.add(world, ball11)


var rotator_options={
  isStatic : true
}

rotator1 = Bodies.rectangle(width/2, height/2+180, 200,20, rotator_options)
World.add(world, rotator1)
rotator2 = Bodies.rectangle(width/2, height/2+180, 200,20, rotator_options)
World.add(world, rotator2)
rotator3 = Bodies.rectangle(width/2, height/2+180, 200,20, rotator_options)
World.add(world, rotator3)

rotator4 = Bodies.rectangle(width/2-180, height/2-20, 200,20, rotator_options)
World.add(world, rotator4)
rotator5 = Bodies.rectangle(width/2-180, height/2-20, 200,20, rotator_options)
World.add(world, rotator5)
rotator6 = Bodies.rectangle(width/2,-180, height/2-20, 200,20, rotator_options)
World.add(world, rotator6)

rotator7 = Bodies.rectangle(width/2+180, height/2-20, 200,20, rotator_options)
World.add(world, rotator7)
rotator8 = Bodies.rectangle(width/2+180, height/2-20, 200,20, rotator_options)
World.add(world, rotator8)
rotator9 = Bodies.rectangle(width/2+180, height/2-20, 200,20, rotator_options)
World.add(world, rotator9)

fill("green");
rectMode(CENTER)
ellipseMode(RADIUS)
}


function draw() {
background("skyblue")

Engine.update(engine)

rect(plane.position.x, plane.position.y, 1000,20);
rect(plane2.position.x, plane2.position.y, 1000,20)
rect(plane3.position.x, plane3.position.y, 20,1000)
rect(plane4.position.x, plane4.position.y, 20,1000)
rect(box.position.x, box.position.y, 50,50)

ellipse(ball1.position.x, ball1.position.y, 13)
ellipse(ball2.position.x, ball2.position.y, 13)
ellipse(ball3.position.x, ball3.position.y, 13)
ellipse(ball4.position.x, ball4.position.y, 13)
ellipse(ball5.position.x, ball5.position.y, 13)
ellipse(ball6.position.x, ball6.position.y, 13)
ellipse(ball7.position.x, ball7.position.y, 13)
ellipse(ball8.position.x, ball8.position.y, 13)
ellipse(ball9.position.x, ball9.position.y, 13)
ellipse(ball10.position.x, ball10.position.y, 13)
ellipse(ball11.position.x, ball11.position.y, 13)

Matter.Body.rotate(rotator1, angle1)
push() 
translate(rotator1.position.x, rotator1.position.y)
rotate(angle1)
rect(0,0,200,20)
pop()
angle1 += 0.3



Matter.Body.rotate(rotator2, angle2)
push()
translate(rotator2.position.x, rotator2.position.y)
rotate(angle2)
rect(0,0,200,20)
pop()
angle2 += 0.4


Matter.Body.rotate(rotator3, angle3)
push()
translate(rotator3.position.x, rotator3.position.y)
rotate(angle3)
rect(0,0,200,20)
pop()
angle3 += 0.18


//sfegevf



Matter.Body.rotate(rotator4, angle4)
push() 
translate(rotator4.position.x, rotator4.position.y)
rotate(angle4)
rect(0,0,200,20)
pop()
angle4 += 0.3



Matter.Body.rotate(rotator5, angle5)
push()
translate(rotator5.position.x, rotator5.position.y)
rotate(angle5)
rect(0,0,200,20)
pop()
angle5 += 0.4


Matter.Body.rotate(rotator6, angle6)
push()
translate(rotator6.position.x, rotator6.position.y)
rotate(angle6)
rect(0,0,200,20)
pop()
angle6 += 0.18







Matter.Body.rotate(rotator7, angle7)
push() 
translate(rotator7.position.x, rotator7.position.y)
rotate(angle7)
rect(0,0,200,20)
pop()
angle7 += 0.3



Matter.Body.rotate(rotator8, angle8)
push()
translate(rotator8.position.x, rotator8.position.y)
rotate(angle8)
rect(0,0,200,20)
pop()
angle8 += 0.4


Matter.Body.rotate(rotator9, angle9)
push()
translate(rotator9.position.x, rotator9.position.y)
rotate(angle9)
rect(0,0,200,20)
pop()
angle9 += 0.18



}


