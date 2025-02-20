// Problem 1 : Three ways to sum to n 

//Solution 1 :
var sum_to_n_a = function(n) {
    // your code here
    let sum = 0;
    for(let i = 1; i < n; i++)
    {
        sum += i;
    }
    return sum;
};
//Solution 2 :
var sum_to_n_b = function(n) {
    // your code here
    return (n*(n+1))/2;
};
//Solution w :
var sum_to_n_c = function(n) {
    // your code here
    if(n===1)
        return 1;
    return n + sum_to_n_c(n-1);
};