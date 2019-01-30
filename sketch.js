
let img;
let dog;
let kitten_speed = 1
let y = 200;
let speed = 0.8;
let kitten_y = 200;
let dog_y = 200;
let kitten;
let dog_speed = 0.5
let orangekitty;
let orange_kitty_speed = 1
let orange_kitty_y = 200
let breedpicture;
let breedpicture_speed = .75
let breedpicture_y = 200





function preload(){
    img = loadImage('images/IMG_8013.jpg')
    dog = loadImage('images/dog.png')
    kitten = loadImage('images/kitten-pounce.png')
    orangekitty = loadImage('images/orange_kitty.png')
    breedpicture = loadImage('images/breed_picture.png')

    
}

function setup(){
    createCanvas(600, 600);
    background(255);


    

}

function draw(){
    image(img, 0, 0, img.width/3, img.height/3);
    image(dog, 300, dog_y, dog.width/6, dog.height/6);
    if(mouseX < width/2){
       dog_y = dog_y + dog_speed;
    }
    if(y > width){
       dog_y = 350;
    }
    image(kitten, 450, kitten_y, kitten.width/6, kitten.height/6);
    if(mouseX < width/2){
       kitten_y = kitten_y + kitten_speed;
    }
    if(y > width){
       kitten_y = 350;
    }
    image(orangekitty, 200, orange_kitty_y, orangekitty.width/6, orangekitty.height/6);
    if(mouseX < width/2){
        orange_kitty_y = orange_kitty_y + orange_kitty_speed;
     }
     if(y > width){
        orange_kitty_y = 350;
     }
    image(breedpicture, 300, breedpicture_y, breedpicture.width/1.5, breedpicture.height/1.5);
    if(mouseX < width/2){
        breedpicture_y = breedpicture_y + breedpicture_speed;
     }
     if(y > width){
        breedpicture_y = 350;
     }

  
    fill('black')
        noFill()
        stroke(0)
        for (var i = 0; i < 10000; i += 10) {
            bezier(mouseX-(i/2.0), 20+i, 50, 60, 5, 200, 240-(i/2.0), 350+(i/1.0));
          }



}





