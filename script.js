let monthlyTotal = 0

function openTab(tab){

document.getElementById("analyzer").style.display="none"
document.getElementById("saved").style.display="none"
document.getElementById("monthly").style.display="none"
document.getElementById("tips").style.display="none"

document.getElementById(tab).style.display="block"

}


function analyzeFlip(){

let retail = Number(document.getElementById("retail").value)
let buy = Number(document.getElementById("buy").value)
let sell = Number(document.getElementById("sell").value)
let shipping = Number(document.getElementById("shipping").value)
let feeRate = Number(document.getElementById("platform").value)

let fee = sell * feeRate

let profit = sell - buy - shipping - fee

document.getElementById("profit").innerText =
"Estimated Net Profit: $" + profit.toFixed(2)

let score=""

if(profit >= 50){

score="Hot Flip – Excellent Profit Potential"

}

else if(profit >= 20){

score="Strong Flip – Profitable Opportunity"

}

else if(profit >= 5){

score="Moderate Flip – Lower Margin"

}

else{

score="Poor Flip – Not Recommended"

}

document.getElementById("score").innerText = score

}


function saveFlip(){

let item=document.getElementById("item").value
let profitText=document.getElementById("profit").innerText

if(profitText===""){

alert("Please analyze the flip before saving.")

return

}

let li=document.createElement("li")

li.innerText=item + " | " + profitText

document.getElementById("savedList").appendChild(li)

let profitNumber=parseFloat(profitText.replace(/[^0-9.-]+/g,""))

monthlyTotal+=profitNumber

document.getElementById("monthlyProfit").innerText=
"$"+monthlyTotal.toFixed(2)

}
function getTip(){

let question=document.getElementById("tipQuestion").value.toLowerCase()

let answer=""

if(question.includes("sneaker") || question.includes("shoes")){

answer="Sneaker Reselling Guide:\n\n1. Research recent sold listings on eBay or StockX.\n2. Limited releases and collaborations usually hold the most value.\n3. Keep the original box and packaging if possible.\n4. Take clear photos of the condition and tags.\n5. Price slightly below the average sold price to sell faster.\n\nPro Tip: Deadstock sneakers (brand new) often sell 30–200% higher than retail depending on demand."

}

else if(question.includes("thrift")){

answer="Thrift Store Flipping Guide:\n\n1. Focus on popular brands like Nike, Patagonia, Levi's, Carhartt, and vintage sportswear.\n2. Look for items in excellent condition.\n3. Check electronics, jackets, and vintage clothing.\n4. Always check resale prices before purchasing.\n5. Items bought for $3–$10 can often resell for $30–$80.\n\nPro Tip: Vintage clothing from the 90s and early 2000s is trending in resale markets."

}

else if(question.includes("price")){

answer="Pricing Strategy:\n\n1. Search the item on eBay.\n2. Filter by SOLD listings.\n3. Find the average price of the last 5–10 sales.\n4. Price your item slightly below competitors.\n\nExample:\nIf items sell for $50–$60, list at $54.99.\n\nPro Tip: Ending prices with .99 often increases buyer clicks."

}

else if(question.includes("electronics")){

answer="Electronics Reselling Guide:\n\n1. Always test the item before selling.\n2. Clean the device and remove personal data.\n3. Include charger and accessories if possible.\n4. Take clear photos of the screen and ports.\n5. Electronics with minor scratches still sell well if fully functional.\n\nPro Tip: Gaming consoles and Apple products have very strong resale demand."

}

else{

answer="General Reselling Strategy:\n\n1. Always research market prices before buying.\n2. Factor in marketplace fees (usually 10–13%).\n3. Include shipping costs in your profit calculation.\n4. Focus on items with strong demand.\n5. Buy low and sell at competitive prices.\n\nPro Tip: Many successful resellers aim for at least $20 profit per item."

}

document.getElementById("tipAnswer").innerText=answer

}