export const part4 = `## Part 4 - User matching flow`;

export const part3Code = `## Code`;

export const part3Input = `## Part 3 - Deploy & Run your solution

## Input`;

export const part3Output = `## Output`;

export const fuzzyMatchSolution = `## Solution

To be able to match **Orders** and **Transactions** having the orderId, customerName and product with typos, we need to fuzzy find (approximately string matching) matches and then decide which match to use deppending on the score.
Doing that will ignore the duplicates (we can have them based on the input examples) and will assing a transaction to the best order match.

> Duplicates in orders and transactions are possible. This solution focuses on the matching rather than the cleaning of duplicates or syncing between orders and transactions misspelled attrs.

For fuzzy finding I used a library called [Fuse.js](https://www.fusejs.io/) which internally uses the [Bitap algorithm](https://en.wikipedia.org/wiki/Bitap_algorithm).

The solution below is **O(n^2)**. That is not optimal but is required since we can't trust the data matching attrs and we can have duplicates.

To optimize we could group by date and then by price (orders and transactions) and run the fuzzyMatching algorithm parallel (would require [Worker Threads](https://nodejs.org/api/worker_threads.html) or changing the solution languaje).

---`;

export const exactMatchSolution = `
## Solution

\`\`\`
O(n+m) ≈ O(n)
\`\`\`
`;

export const exactMatchInstructions = `## Part 1 - Get to know the problem

Write a function that takes in two arrays, and returns transaction records “matched” to their order records. The output can be any data structure that clearly ties the transaction records to their order record.

---

### Typescript types for the solution:`;

export const fuzzyMatchInstructions2 = `Write another function or update your previous function to still be able to match the transactions with their most likely orders, allowing/handling these mistakes as best you can. You can use your own judgement about what constitutes a “likely match”, but please explain it.
If external libraries would be useful, feel free to use them. It's best to have a working function here, but if you need to, you can make up imaginary functions/libraries to call. They should be realistic helper functions that you would expect to find in a library or online service, and you should describe clearly what the functions do / return (it should be limited in scope rather than a drop-in replacement for this problem).`;

export const fuzzyMatchInstructions1 = `## Part 2 - Solve the problem

Now assume the above transactions are all manually transcribed and so the data has mistakes or can be missing. There may be mistakes in the customerName, orderId, and product (you can assume that date and price are always accurate). Also, assume a large volume (e.g. thousands of records) - so you can't match purely based on date and price, since there may be many orders on the same day for the same price.
Examples of possible mistakes: customerName (e.g. “Bryan” instead of “Brian”), orderId (e.g. “12OB-1” instead of “I208-L”), product (e.g. “Product ABC-1” vs “ABC Product v1”), while they are actually all the same customer, order, and product. For example, these could be a order / transaction pair that match.`;

export const readme = `# Coding Challenge

### Useful links

- https://github.com/Albertto-1/matching-transactions-app`;
