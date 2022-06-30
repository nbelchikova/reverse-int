module.exports = function reverse (n) {
    let reversed = n.toString().split("").reverse().join("");

    reversed = parseInt(reversed);
  
    
    return reversed;
}
