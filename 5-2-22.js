#905. Sort Array By Parity



var sortArrayByParity = function(nums) {
    nums = nums.sort((a, b) => 
     a % 2 - b % 2 )
    return nums;
};


//Runtime: 81 ms, faster than 80.49% of JavaScript online submissions for Sort Array By Parity.
Memory Usage: 45 MB, less than 29.02% of JavaScript online submissions for Sort Array By Parity.
