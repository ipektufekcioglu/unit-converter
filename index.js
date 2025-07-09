/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

inputNum = document.getElementById("input-num")
convertBtn = document.getElementById("convert-btn")
lengthArea = document.getElementById("length-box")
volumeArea = document.getElementById("volume-box")
massArea = document.getElementById("mass-box")

unit_types = ["length", "volume", "mass"]

convertBtn.addEventListener("click", function render(unit_types) {
    units = convertUnit(inputNum.value)
    lengthArea.innerHTML = `${inputNum.value} meters = ${units.feet} feet | ${inputNum.value} feet = ${units.meters} meters`
    volumeArea.innerHTML = `${inputNum.value} liters = ${units.gallons} gallons | ${inputNum.value} gallons = ${units.liters} liters`
    massArea.innerHTML = `${inputNum.value} kilos = ${units.pounds} pounds | ${inputNum.value} pounds = ${units.kilos} kilos`
})   


function convertUnit(inputNum) {
    let feet = (inputNum * 3.281).toFixed(3)
    let meters = (inputNum / 3.281).toFixed(3)
    let gallons = (inputNum * 0.264).toFixed(3)
    let liters = (inputNum / 0.264).toFixed(3)
    let pounds = (inputNum * 2.204).toFixed(3)
    let kilos = (inputNum / 2.204).toFixed(3)
    let units = {
        feet: feet,
        meters: meters,
        gallons: gallons,
        liters: liters,
        pounds: pounds,
        kilos: kilos
    }
    console.log(units)
    return units
}