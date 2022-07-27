function preload(){
    
    
} 


function setup(){

    canvas = createCanvas(300,300);
    canvas.position(500,100);
    //canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
    


function draw(){

    image(video, 0,0, 300,300);
    tint(tint_color);

}

function apply_filter(){

    tint_color = document.getElementById("color_name").value;
}

function take_snapshot(){

    save("my_selfie.png");
}