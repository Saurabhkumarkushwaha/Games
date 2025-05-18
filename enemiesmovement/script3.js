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
        this.image.src='enemy3.png';
        this.speed=Math.random()*4 + 1;
        this.spritewidth=218;
        this.spriteHeight=177;
        this.width=this.spritewidth/2;
        this.Height=this.spriteHeight/2;
        this.x=Math.random()*(canvas.width-this.width);
        this.y=Math.random()*(canvas.height-this.Height);
        this.frame=0;
        this.flapspeed=Math.floor(Math.random()*3+1);
        this.angle=0;
        this.angleSpeed=Math.random()*5+0.5;
        //this.curve=Math.random()*200+50;
    }
    update(){
        this.x=canvas.width/2*Math.sin(this.angle*Math.PI/180)+(canvas.width/2-this.width/2);
        this.y=canvas.height/2*Math.cos(this.angle*Math.PI/500)+(canvas.height/2-this.Height/2);
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