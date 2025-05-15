/**
 * Breadth-First Search
 *
 * Allows finding shortest distance between two items
 *
 * Sample Use Cases:
 * - checkers AI that calculates fewest moves to victory
 * - spell checker (fewest edits from mispelling to a real word)
 * - find doctor closest to you in your network
 */

/**
 * Sudo
 *
 * 1. keep a queue containing nodes to check
 * 2. pop an item off the queue
 * 3. check item for base case
 * 4. if base case: done; else: add neighbors to queue
 * 5. loop
 * 6. if queue is empty, no base case match
 */

import { Queue } from '../../data-structures/queue.js';

function buildQueueFromGraph(graph) {
    const queue = new Queue();

    for (const key of Object.keys(graph)) {
        queue.push(key);
    }

    return queue;
}

function personIsSeller(name) {
    return name.includes('z');
}

export function bfs(graph, name) {
    const queue = buildQueueFromGraph(graph);
    const searched = {};

    let person = queue.pop();
    while (person) {
        if (searched[person]) {
            console.log('already checked ', person);
        } else {
            if (personIsSeller(person)) {
                console.log('Seller found: ', person);
                return true;
            }

            if (graph[person]) {
                for (let i = 0; i < graph[person].length; i++) {
                    queue.push(graph[person][i]);
                }
            }
            searched[person] = true;
        }

        person = queue.pop();
    }

    console.log('no seller found');
    return false;
}
