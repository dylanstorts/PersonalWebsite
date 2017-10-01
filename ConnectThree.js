/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var GamePiece = {
    worth:Math.floor(Math.random() * 11),
    position:1,
    adjacents:[1,2,3,4],
    getWorth:function(){
        return this.worth;
    },
    getPostion:function(){
        return position;
    },
    setPosition:function(pos, rowSize, MAX){
        this.position = pos;
        
        if(rowSize % pos > 1){
        //here iff there IS a cell to the left
            this.adjacents[0] = pos - 1;
        }
        else{
            this.adjacents[0] = -1;
        }
        
        if(pos % rowSize !== 0){
        //here iff there is a cell to the right
            this.adjacents[1] = pos + 1;
        }
        else{
            this.adjacents[1] = -1;
        }
        
        if(pos - rowSize > 0){
        //here iff there is a cell above
            this.adjacents[2] = pos - rowSize;
        }
        else{
            this.adjacents[2] = -1;
        }
        
        if(pos + rowSize <= MAX){
        //here iff ther is a cell below
            this.adjacents[3] = pos + rowSize;
        }
        else{
            this.adjacents[3] = -1;
        }
    },
    validMove:function(moveTo){
        for(var i = 0; i < 4; i++){
            if(this.adjacents[ i ] === moveTo)
                return true;
        }
        return false;
    },
    moveTo:function(pos, rowSize, MAX){
    this.position = pos;
    
    this.setPosition(pos, rowSize, MAX);
    }
    
};
