// This file handles processing payment using PROMISES

function processPayment(order) {

    // Returning a Promise because payment takes time
    return new Promise((resolve, reject) => {

        console.log("Processing payment...");

        // Delay added to simulate real payment process
        setTimeout(() => {

            const success = true; // change to false to test rejection

            // If payment succeeds, resolve the promise
            if (success) {
                resolve(`Payment of ₹${order.amount} processed successfully.`);
            } 
            // If payment fails, reject the promise
            else {
                reject("Payment failed!");
            }

        }, 1500);
    });
}

// Export the function for use in other files
module.exports = processPayment;
