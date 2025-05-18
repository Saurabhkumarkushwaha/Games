/**@type{HTMLCanvasElement} */
const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
CANVAS_WIDTH=canvas.width=500;
CANVAS_HEIGHT=canvas.height=1000;
const numberOfEnemies=20;
const enemyArray=[];

let gameFrame=0;

class Enemy{
    constructor(){
        this.image=new Image();
        this.image.src='enemy1.png';
        this.speed=Math.random()*4 - 2;
        this.spritewidth=293;
        this.spriteHeight=155;
        this.width=this.spritewidth/2.5;
        this.Height=this.spriteHeight/2.5;
        this.x=Math.random()*(canvas.width-this.width);
        this.y=Math.random()*(canvas.height-this.Height);
        this.frame=0;
        this.flapspeed=Math.floor(Math.random()*3+1);
    }
    update(){
        this.x+=Math.random()*5-2.5;
        this.y+=Math.random()*5-2.5;
        //animate sprites
        if (gameFrame % this.flapspeed===0){
            this.frame > 4 ? this.frame=0 : this.frame++;
        }
    }
    draw(){
        ctx.drawImage(this.image,this.frame*this.spritewidth,0,this.spritewidth, this.spritewidth,this.x,this.y,this.width,this.Height);
    }
};

for(let i=0;i<numberOfEnemies;i++){
    enemyArray.push(new Enemy());
}

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    enemyArray.forEach(enemy =>{
        enemy.update();
        enemy.draw();
    });
    requestAnimationFrame(animate);
}
animate();