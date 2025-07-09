const display = document.querySelector("#display");
const btns = document.querySelectorAll("button");

let expression = "";

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        if (value === "AC") {
            expression = "";
        } else if (value === "Backspace") {
            expression = expression.slice(0, -1);
        } else if (value === "=") {
            try {
                // Replace symbols with valid JS operators
                const result = eval(expression
                    .replace(/÷/g, "/")
                    .replace(/x/g, "*"));
                expression = result.toString();
            } catch {
                expression = "Error";
            }
        } else {
            // Avoid leading 0 unless entering decimal
            if (expression === "0" && value !== ".") {
                expression = value;
            } else {
                expression += value;
            }
        }

        display.textContent = expression || "0";
    });
});