const input_box = document.getElementById('bill');
const submit_button = document.querySelector("button");

const output = document.getElementById("output");

submit_button.addEventListener("click", calculateTip)

function calculateTip(){
    // console.log("clicked")
    let bill_amount  = input_box.value

    if(bill_amount === ""){
        alert("Please enter a value")
        return
    }

    let tip = bill_amount*2/100
    // console.log(tip)
    output.innerText = `Tips is ${tip}`
}