const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

let player = {
x:400,
y:300,
speed:4
}

let keys = {}

document.addEventListener("keydown",(e)=>{
keys[e.key] = true
})

document.addEventListener("keyup",(e)=>{
keys[e.key] = false
})

function update(){

if(keys["w"]) player.y -= player.speed
if(keys["s"]) player.y += player.speed
if(keys["a"]) player.x -= player.speed
if(keys["d"]) player.x += player.speed

}

function draw(){

ctx.clearRect(0,0,800,600)

ctx.fillStyle = "blue"
ctx.fillRect(player.x,player.y,32,32)

}

function gameLoop(){

update()
draw()

requestAnimationFrame(gameLoop)

}

gameLoop()
