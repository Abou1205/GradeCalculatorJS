const midterm = document.getElementById("midterm");
const final = document.getElementById("final");
const calculateBtn = document.getElementById("calculate");
const resetBtn = document.getElementById("reset");
const resultGrade = document.getElementById("resultGrade");

const calculate = () => {
 
    calculateBtn.addEventListener("click", () => {
        let midtermValue = parseFloat(midterm.value);
        let finalValue = parseFloat(final.value);

        if (!isNaN(midtermValue) && !isNaN(finalValue) && midtermValue >= 0 && midtermValue <= 100 && finalValue >= 0 && finalValue <= 100) {
            let result = (midtermValue * 0.4 + finalValue * 0.6).toFixed(1);
            displayGrade(result);
        } else {
            alert("Please enter valid grades between 0 and 100.");
        }
    });

    resetBtn.addEventListener("click", () => {
        midterm.value = "";
        final.value = "";
        resultGrade.innerHTML = "";
    });
};

const displayGrade = (result) => {
    if (result >= 88 && final.value >= 40) {
        resultGrade.innerHTML = `Result Grade: <span>${result}</span> <span>AA</span>`;
    } else if (result >= 81 && final.value >= 40) {
        resultGrade.innerHTML = `Result Grade: <span>${result}</span> <span>BA</span>`;
    } else if (result >= 74 && final.value >= 40) {
        resultGrade.innerHTML = `Result Grade: <span>${result}</span> <span>BB</span>`;
    } else if (result >= 67 && final.value >= 40) {
        resultGrade.innerHTML = `Result Grade: <span>${result}</span> <span>CB</span>`;
    } else if (result >= 60 && final.value >= 40) {
        resultGrade.innerHTML = `Result Grade: <span>${result}</span> <span>CC</span>`;
    } else {
        resultGrade.innerHTML = `Result Grade: <span>${result}</span> <span>Failed</span>`;
    }
};

calculate();
