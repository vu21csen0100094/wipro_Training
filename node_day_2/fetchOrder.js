// This file handles fetching order details using CALLBACKS

function fetchOrder(orderId, callback) {

    console.log("Fetching order from database...");

    // setTimeout is used to simulate a delay (like real database work)
    setTimeout(() => {

        // Mock order info (as if coming from database)
        const order = { id: orderId, item: "Pizza", amount: 300 };

        const error = null; // change to true to see error callback

        // If there is an error, send error in callback
        if (error) {
            callback("Error fetching order!", null);
        } 
        // If success, return order through callback
        else {
            callback(null, order);
        }

    }, 2000);
}

// Export this function so other files can use it
module.exports = fetchOrder;
