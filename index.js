/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

document.getElementById("convert-number").value = 0
let convertNumber = 0
const lenght = document.getElementById("lenght")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
const convertBtn = document.getElementById("convert-btn")
let MTF = FTM = LTG = GTL = KTP = PTK = 0

convertBtn.addEventListener("click",function(){
    convertNumber = document.getElementById("convert-number").value
    
    MTF = Number(convertNumber)*3.281
    FTM = Number(convertNumber)/3.281
    
    LTG = Number(convertNumber)*0.264
    GTL = Number(convertNumber)/0.264
    
    KTP = Number(convertNumber)*2.204
    PTK = Number(convertNumber)/2.204
    
     converted()
})
function converted(){
    convertNumber = document.getElementById("convert-number").value
    lenght.innerText = 
    `${convertNumber} Meter = ${MTF.toFixed(3)} feet | ${convertNumber} feet = ${FTM.toFixed(3)} meter `
     
    volume.innerText = 
    `${convertNumber} Liters = ${LTG.toFixed(3)} Gallons | ${convertNumber} Gallons = ${GTL.toFixed(3)} Liters `
     
    mass.innerText = 
    `${convertNumber} Kilograms = ${KTP.toFixed(3)} Pounds |  ${convertNumber} Pounds = ${PTK.toFixed(3)} Kilograms `
    
    // console.log("converted")
    
}
converted()
