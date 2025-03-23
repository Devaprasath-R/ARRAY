let numbers = [];
function getArray(){
    const input = document.getElementById("box").value;
    const number=input.split(",").reduce((acc,num) => {
        const parsedNum=parseFloat(num.trim());
        if(!isNaN(parsedNum)){
            acc.push(parsedNum);
        }
        return acc;
    } ,[]);
    return number;
}

function diplayResult(text){
    document.getElementById("result").innerText=text;
}

function findeven() {
    const numbers=getArray();
    const findeven=numbers.filter((num)=> num % 2 === 0);
    document.getElementById("result").innerText = "Even num: "+ findeven.join(",");
    
}

function findodd(){
    const numbers=getArray();
    const findodd=numbers.filter((num)=>num % 2 !== 0);
    document.getElementById("result").innerText = "Odd Num: "+ findodd.join(",");
}

function findmax(){
    const numbers=getArray();
    const findmax= Math.max(...numbers);
    document.getElementById("result").innerText="Maximum Num: "+ (isFinite(findmax) ? findmax : "No valid numbers");
}

function sort(){
    const numbers=getArray();
    const sort= numbers.sort ((a,b) => a-b);
    document.getElementById("result").innerText = "Sorted: "+ sort.join(",");
}

function reverse(){
    const numbers=getArray();
    const reverse=numbers.reverse();
    document.getElementById("result").innerText = "Reverse: "+ reverse.join(",");
}