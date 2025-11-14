FOODEXPRESS — Order Processing System (Simple English Explanation)
FoodExpress wants to test how Node.js handles asynchronous work.
So they asked us to build a simple order processing system that performs 3 steps:

Fetch Order Details

Process Payment

Generate Invoice

But the special part is:
Each step must use a different asynchronous technique in Node.js.

Example:
You put rice on the stove 
You don’t sit there and watch it.
You go do other work.
When the rice is cooked, cooker whistles.
You come back.

This is asynchronous.

Node.js works the same way.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

FETCH ORDER (Using Callback)
Why use callback?
This is the oldest method in Node.
Just like:

“When you finish this work, call me back.”

A callback is a function you give to another function.

 What does the code do?
It waits 2 seconds (like fetching from database).
Then returns the order.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

PROCESS PAYMENT (Using Promise)
Why use Promise?
Promises are cleaner than callbacks.

Promise means:

“I promise to give you a result later.”

It can end in:

resolve → success

reject → failure

Simple English:
“Try to take the payment.
If payment goes through → resolve.
If payment fails → reject.”
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Generate Invoice (Using Async/Await)

Why Async/Await?
Async/await looks like normal code but works asynchronously.
It is the cleanest and most readable method.

Simple explanation
generateInvoice() returns a Promise and is used with async/await.