fill(255, 234, 0);
    ellipse(faceObj.mouseX, faceObj.mouseY, 150, 150);
    fill(0, 0, 0);
    ellipse(faceObj.mouseX-30, faceObj.mouseY-30, 20, 20); 
    ellipse(faceObj.mouseX+30, faceObj.mouseY-30, 20, 20); 
    noFill(); 
    strokeWeight(3);
    arc(faceObj.mouseX, faceObj.centerY+10, 64, 40, 0, 180);
};
