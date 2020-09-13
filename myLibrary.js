function bounceSprites(object1, object2) {
    //if the difference between the x of a and b is less than their width/2 added together 
    //then reverse the velocities do they appear to bounceOff each other
    if(object1.x-object2.x < object1.width/2+object2.width/2 && object2.x-object1.x < object1.width/2+object2.width/2){
      object1.velocityX = object1.velocityX*(-1);
      object2.velocityX = object2.velocityX*(-1);
    }
    
    //if the difference between the y of a and b is less than their height/2 added together 
    //then reverse the velocities do they appear to bounceOff each other
    if(object1.y-object2.y < object1.height/2+object2.height/2 && object2.y-object1.y < object1.height/2+object2.height/2){
      object1.velocityY = object1.velocityY*(-1);
      object2.velocityY = object2.velocityY*(-1);
    }
  }

  function touch(o1, o2) {
    if(o1.x-o2.x < o1.width/2 + o2.width/2 && o2.x-o1.x < o1.width/2 + o2.width/2 
      && o1.y-o2.y < o1.height/2 + o2.height/2 && o2.y-o1.y < o1.height/2 + o2.height/2){
      return true;
    }
    else{
     return false;
    }
  }