let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        let value = button.innerHTML;

        // Equal
        if (value === "=") {

            if (string === "") {
                return;
            }

            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        }

        // All Clear
        else if (value === "AC") {
            string = "";
            input.value = "";
        }

        // Delete
        else if (value === "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        // Percentage
        else if (value === "%") {

            if (string !== "") {
                try {
                    string = eval(string) / 100;
                    input.value = string;
                } catch (error) {
                    input.value = "Error";
                    string = "";
                }
            }
        }

        // Decimal
        else if (value === ".") {

            // Current number mein already decimal hai to dobara add nahi hoga
            let parts = string.split(/[\+\-\*\/]/);
            let currentNumber = parts[parts.length - 1];

            if (!currentNumber.includes(".")) {
                string += value;
                input.value = string;
            }
        }

        // Operators
        else if (
            value === "+" ||
            value === "-" ||
            value === "*" ||
            value === "/"
        ) {

            // Empty string mein operator add nahi hoga
            if (string === "") {
                return;
            }

            // Last character agar already operator hai
            let lastChar = string[string.length - 1];

            if (
                lastChar === "+" ||
                lastChar === "-" ||
                lastChar === "*" ||
                lastChar === "/"
            ) {
                // Previous operator replace hoga
                string = string.slice(0, -1) + value;
            } else {
                string += value;
            }

            input.value = string;
        }

        // Numbers
        else {
            string += value;
            input.value = string;
        }
    });
});