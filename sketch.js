var canvas;
var redB;
var blueB;
var block3;
var block4;
var main;

var music;

function preload(){
    //music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    redB = createSprite(700,590,90,20);
    redB.shapeColor = "red";


    blueB = createSprite(600,590,90,20);
    blueB.shapeColor = "blue";

    
    block3 = createSprite(500,590,90,20);
    block3.shapeColor = "green";


    block4 = createSprite(400,590,90,20);
    block4.shapeColor = "orange";
    
    main = createSprite(400,300,20,20);
    main.shapeColor = "black";

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));


    console.log(main.y-redB.y)

    if(keyDown("up")){
        main.y = main.y-2;
    }
    if(keyDown("down")){
        main.y = main.y+2;
    }
    if(keyDown("right")){
        main.x = main.x+2;
    }
    if(keyDown("left")){
        main.x = main.x-2;
    }


  if(collide(redB,main) && main.bounceOff(redB) ){
      main.shapeColor = "red";
      redB.shapeColor = "red";
      //music.play();
  }

  if(collide(blueB,main) && main.bounceOff(blueB)){
    main.shapeColor = "blue";
    blueB.shapeColor = "blue";
    //music.play();
}

  if(collide(block3,main) && main.bounceOff(block3)){
    main.shapeColor = "green";
    block3.shapeColor = "green";
   //music.play();
}


 if(collide(block4,main) && main.bounceOff(block4)){
    main.shapeColor = "orange";
    block4.shapeColor = "orange";
    //music.play();
}
    drawSprites();

    //add condition to check if box touching surface and make it box
}


