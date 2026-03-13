let inventory = []

function addItem(item){

inventory.push(item)

document.getElementById("inventory").innerText =
inventory.join(", ")

}
