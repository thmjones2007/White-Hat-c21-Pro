function collide(object1,object2){

    if (object1.y -  object2.y < object1.height/2+object2.height/2 ){

        return true;
    }
    else{
        return false;
    } 
    
}