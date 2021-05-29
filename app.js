function Calculater(Cal1, Cal2, Sign) {
    if (Sign === "*") {
        alert(Cal1 * Cal2)
    }
    else if (Sign === "/") {
        alert(Cal1 / Cal2)
    }
    else if (Sign === "+") {
        alert(Cal1 + Cal2)
    }
    else if (Sign === "-") {
        alert(Cal1 - Cal2)
    }
    else {
        alert("Input True Value")
    }
}
var A = +prompt("value1");
var C = prompt("Sign");
var B = +prompt("value2");
Calculater(A, B, C)