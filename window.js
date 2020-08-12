const name = "mahmud";

function add(num1, num2) {
    result = num1 + num2;
    console.log("name inside", name);
    function inside(number) {
        return number * 2;
        
    }
    const insideFunction = inside(5);
    console.log(insideFunction);
    return result;
}
console.log("name outside", name);

const show = add(55, 35);
console.log( "window", result);
console.log(show);


