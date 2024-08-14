## Solution

To be able to match **Orders** and **Transactions** having the orderId, customerName and product with typos, we need to fuzzy find (approximately string matching) matches and then decide which match to use deppending on the score.
Doing that will ignore the duplicates (we can have them based on the input examples) and will assing a transaction to the best order match.

> Duplicates in orders and transactions are possible. This solution focuses on the matching rather than the cleaning of duplicates or syncing between orders and transactions misspelled attrs.

For fuzzy finding I used a library called [Fuse.js](https://www.fusejs.io/) which internally uses the [Bitap algorithm](https://en.wikipedia.org/wiki/Bitap_algorithm).

The solution below is **O(n^2)**. That is not optimal but is required since we can't trust the data matching attrs and we can have duplicates.

To optimize we could group by date and then by price (orders and transactions) and run the fuzzyMatching algorithm parallel (would require [Worker Threads](https://nodejs.org/api/worker_threads.html) or changing the solution languaje).

---
