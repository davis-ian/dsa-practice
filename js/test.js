
import { bfs } from './algorithms/searching/bfs.js'


// let queue = new Queue();

// queue.push('3')
// queue.push('10')
// queue.push('bob')
// queue.push('green')

// queue.pop();
// queue.pop();

// // console.log('next: ', next)
// queue.print()

const graph = {
    bob: ['johnny'],
    janine: ['allen', 'fred', 'bob'],
    timothy: [],
    alex: ['allem', 'jim', 'zinger'],
}

bfs(graph, 'allem')