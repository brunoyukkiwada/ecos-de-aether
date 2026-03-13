let player = {
x:100,
y:100,
size:28,
speed:3,
hp:100
}

let keys = {}

document.addEventListener("keydown", e => {
keys[e.key] = true
})

document.addEventListener("keyup", e => {
keys[e.key] = false
})

function movePlayer(){

if(keys["w"]) player.y -= player.speed
if(keys["s"]) player.y += player.speed
if(keys["a"]) player.x -= player.speed
if(keys["d"]) player.x += player.speed

}
