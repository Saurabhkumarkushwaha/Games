/**@type{HTMLCanvasElement} */
const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
CANVAS_WIDTH=canvas.width=500;
CANVAS_HEIGHT=canvas.height=1000;
const numberOfEnemies=200;
const enemyArray=[];

let gameFrame=0;


class Enemy{
    constructor(){
        this.image=new Image();
        this.image.src='enemy2.png';
        this.speed=Math.random()*4 + 1;
        this.spritewidth=266;
        this.spriteHeight=188;
        this.width=this.spritewidth/2;
        this.Height=this.spriteHeight/2;
        this.x=Math.random()*(canvas.width-this.width);
        this.y=Math.random()*(canvas.height-this.Height);
        this.frame=0;
        this.flapspeed=Math.floor(Math.random()*3+1);
        this.angle=0;
        this.angleSpeed=Math.random()*0.2;
        this.curve=Math.random()*7;
    }
    update(){
        this.x-=this.speed;
        this.y+=this.curve*Math.sin(this.angle);
        this.angle+=this.angleSpeed;
        if(this.x + this.width < 0)this.x=canvas.width;
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