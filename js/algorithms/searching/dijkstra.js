/**
 * Variation of BFS but uses weighted graph to check 'cost'
 *
 * Steps:
 * 1. Find the cheapest node
 * 2. Check whether there's a cheaper path to the neighbors of this node
 * 3. Repeat until done for every node in graph
 * 4. Calculate final path
 *
 * Gotchas:
 * - cannot use if graph  has negative-weight edges (see: Bellman-Ford algorithm)
 * -
 */

export function buildAltGraph1() {
    return {
        start: { a: 6, b: 2 },
        a: { fin: 1 },
        b: { a: 3, fin: 5 },
        fin: {},
    };
}

export function buildAltGraph2() {
    return {
        start: { a: 5, b: 2 },
        a: { c: 4, d: 2 },
        b: { a: 8, d: 7 },
        c: { fin: 3 },
        d: { fin: 1 },
        fin: {},
    };
}

export function buildGraph() {
    const graph = {};
    graph['start'] = {};
    graph['start']['a'] = 6;
    graph['start']['b'] = 2;

    graph['a'] = {};
    graph['a']['fin'] = 1;

    graph['b'] = {};
    graph['b']['a'] = 3;
    graph['b']['fin'] = 5;

    graph['fin'] = {};

    return graph;
}

export function dijkstra(graph, start, end) {
    const parents = {};
    const costs = {};
    const processed = [];

    // Init costs & parents tables
    for (const n of Object.keys(graph[start])) {
        costs[n] = graph[start][n];
        parents[n] = start;
    }
    costs[end] = Infinity;
    parents[end] = null;

    //Find the cheapest node
    let node = findLowestCostNode(costs, processed);
    while (node) {
        let cost = costs[node];
        let neighbors = graph[node];
        for (const n of Object.keys(neighbors)) {
            const newCost = cost + neighbors[n];

            //check whether there a cheaper path to  the  neighbors if this node
            if (costs[n] > newCost) {
                costs[n] = newCost;
                parents[n] = node;
            }
        }
        processed.push(node);
        // repeat until done for every node in graph
        node = findLowestCostNode(costs, processed);
    }

    //  calculate  final path
    const shortestPath = [];
    let currentNode = end;

    while (currentNode !== start) {
        shortestPath.unshift(currentNode);
        currentNode = parents[currentNode];
    }

    shortestPath.unshift(start);

    return {
        path: shortestPath,
        cost: costs[end],
    };
}

function findLowestCostNode(costs, processed) {
    let lowestCost = Infinity;
    let lowestCostNeighbor = null;
    for (const c of Object.keys(costs)) {
        if (processed.includes(c)) continue;

        const cost = costs[c];
        if (cost < lowestCost) {
            lowestCost = cost;
            lowestCostNeighbor = c;
        }
    }

    return lowestCostNeighbor;
}
