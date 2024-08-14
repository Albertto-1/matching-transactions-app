## Part 2 - Solve the problem

Now assume the above transactions are all manually transcribed and so the data has mistakes or can be missing. There may be mistakes in the customerName, orderId, and product (you can assume that date and price are always accurate). Also, assume a large volume (e.g. thousands of records) - so you can't match purely based on date and price, since there may be many orders on the same day for the same price.
Examples of possible mistakes: customerName (e.g. “Bryan” instead of “Brian”), orderId (e.g. “12OB-1” instead of “I208-L”), product (e.g. “Product ABC-1” vs “ABC Product v1”), while they are actually all the same customer, order, and product. For example, these could be a order / transaction pair that match.
