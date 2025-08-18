const result = document.getElementById("result");

function display(number) {
    result.value += number;
}

function calculate() {
    try {
        let final_number = result.value;
   
    final_number = final_number.replace(/(\d+)\s*\+\s*(\d+)%/g, (match,num, percent) => {
        return Number(num) + (Number(num) * Number(percent) / 100);
    });
    final_number = final_number.replace(/(\d+)\s*\-\s*(\d+)%/g, (match, num, percent) => {
        return Number(num) - (Number(num) * Number(percent) / 100);
    });
    final_number = final_number.replace(/%/g, '/100');
    const final_result = new Function(`return ${final_number}`)();
    result.value = final_result;
     
    } catch (error) {
        result.value = "Error";
    }
}

function clrs() {
    result.value = "";
}

function dle() {
    result.value = result.value.slice(0, -1);
}


