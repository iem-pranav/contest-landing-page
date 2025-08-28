// File: solutions.js
// Description: Stores all solution code, mapped by contest ID.

export const solutions = new Map([
    [1, `
// Python Solution for Knapsack Problem

def knapSack(W, wt, val, n):
    K = [[0 for x in range(W + 1)] for i in range(n + 1)]
    for i in range(n + 1):
        for w in range(W + 1):
            if i == 0 or w == 0:
                K[i][w] = 0
            elif wt[i-1] <= w:
                K[i][w] = max(val[i-1] + K[i-1][w-wt[i-1]], K[i-1][w])
            else:
                K[i][w] = K[i-1][w]
    return K[n][W]
`],
    [2, `
// JavaScript Solution for Breadth-First Search (BFS)

function bfs(graph, startNode) {
    let visited = new Set();
    let queue = [startNode];
    visited.add(startNode);
    
    while (queue.length > 0) {
        let node = queue.shift();
        console.log(node); // Process the node
        
        let neighbors = graph[node];
        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}
`]
]);
