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

function buildGraph() {
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

export function dijkstra() {
    const graph = buildGraph();
    console.log(Object.keys(graph), 'keys');
    console.log(Object.keys(graph['start']), 'neightbors');
    console.log(graph['start']['a'], 'a');
    console.log(graph['start']['b'], 'b');

    const cost = {};
    cost['a'] = 6;
    cost['b'] = 2;

    const parents = {};
    parents['a'] = 'start';
    parents['b'] = 'start';
    parents['fin'] = null;

    const processed = [];
}
