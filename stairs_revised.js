// Problems:
// A staircase is given with a non-negative cost per each step. Once you pay the cost, you can either climb one or two steps. Create a solution to find the minimum sum of costs to reach the top (finishing the payments including cost[-2] or cost[-1]). You can either start at cost[0] or cost[1].

// staircase - non-negative cost
// climb : 1 or 2 steps 
// find: min sum to reach top 
 
// Examples:
// climbingStairs([0, 2, 2, 1]) ➞ 2
// climbingStairs([0, 2, 3, 2]) ➞ 3
// climbingStairs([10, 15, 20]) ➞ 15
// climbingStairs([0, 0, 0, 0, 0, 0]) ➞ 0
 
// Clue:
// Let dp[i] be the cost to climb the i-th staircase to from 0-th or 1-th step. Hence dp[i] = cost[i] + min(dp[i-1], dp[i-2]). Since dp[i-1] and dp[i-2] are needed to compute the cost of traveling from i-th step, a bottom-up approach can be used to solve the problem. The answer will be the minimum cost of reaching n-1th stair and n-2th stair. Compute the dp[] array in a bottom-up manner.

// 'stairCost' function that returns the minimum cost to reach the top of stairs 

const stairCost = (stairArr) => {
    
    var current = new Array(); // 'current' array to temporarilly store the cost needed to get to the ith step 
    current[0] = stairArr[0];
    current[1] = stairArr[1];
    var length = stairArr.length;

    // using the formula to find the lowest cost to get to the ith step 
    for (var i = 2; i<length; i++){
        current[i] = stairArr[i] + Math.min(stairArr[i-1],stairArr[i-2]);
    }

    //compare the cost to get to the last with the second last step 
    var minCost = Math.min(current[length-1], current[length-2]); 
    return minCost;
    
}

console.log(stairCost([0,2,2,1]));
console.log(stairCost([0, 2, 3, 2]));
console.log(stairCost([10, 15, 20]));
console.log(stairCost([0, 0, 0, 0, 0, 0]));
console.log(stairCost([0,2,3,2,1,2])); // function does not work here 