const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

function drawMap(){

for(let y=0;y<map.length;y++){
for(let x=0;x<map[y].length;x++){

let tile = map[y][x]

if(tile===0) ctx.fillStyle="#3c8f5a"
if(tile===1) ctx.fillStyle="#1f5f3a"
if(tile===2) ctx.fillStyle="#8b5a2b"
if(tile===3) ctx.fillStyle="#c2b280"

ctx.fillRect(
x*tileSize,
y*tileSize,
tileSize,
tileSize
)

}
}

}

function drawPlayer(){

ctx.fillStyle="blue"

ctx.fillRect(
player.x,
player.y,
player.size,
player.size
)

}

function drawEnemy(){

ctx.fillStyle="red"

ctx.fillRect(
enemy.x,
enemy.y,
enemy.size,
enemy.size
)

}

function update(){

movePlayer()

document.getElementById("hp").innerText = player.hp

}

function draw(){

ctx.clearRect(0,0,800,600)

drawMap()
drawPlayer()
drawEnemy()

}

function gameLoop(){

update()
draw()

requestAnimationFrame(gameLoop)

}

gameLoop()
