$(document).ready(function reset() {
    var num1 = ""
    var oper = ""
    var num2 = ""
$("#calculator").on("click", "button", function(e) {
    var val = $(this).html()

    if (val === "=") {
        if (oper === "+") {
            $("#result").html(Number(num1) + Number(num2))
            val = $("#result")
        } else if (oper === "-") {
            $("#result").html(Number(num1) - Number(num2)) 
        } else if (oper === "*") {
            $("#result").html(Number(num1) * Number(num2))
        }else if (oper === "/") {
            $("#result").html(Number(num1) / Number(num2))
        }
    } else if (val === "*" || val === "+" || val === "/" || val === "-") {
        oper = val 
    } else if (val === "C") {
        num1 = ""
        num1 = ""
        oper = ""
        reset()
        $("#result").html("")
    }else{
        if (oper === "") {
            num1 += val
            $("#result").html(num1)
        }else{
            num2 += val
            $("#result").html(num2)
        }
    }
    console.log("num1" + num1)
    console.log("oper" + oper)
    console.log("num2" + num2)
    })
})