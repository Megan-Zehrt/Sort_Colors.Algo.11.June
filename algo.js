// 75. Sort Colors


// Given an array "nums" with "n" objects colored red, white or blue, sort them in-place so that objects
// of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the 0,1, and 2 to represent the color red, white, and blue, respectively.






/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    return nums.sort((a,b) => a-b)
};