// Importing all 3 functions from separate files
const fetchOrder = require("./fetchOrder");
const processPayment = require("./processPayment");
const generateInvoice = require("./generateInvoice");

// STEP 1: Fetch order using CALLBACKS
fetchOrder(101, (err, order) => {

    // If error occurs while fetching order
    if (err) {
        console.error("Callback Error:", err);
        return;
    }

    // Order fetched successfully
    console.log("Order Fetched:", order);

    // STEP 2: Process payment using PROMISES
    processPayment(order)
        .then((msg) => {
            console.log(msg); // payment success message

            // STEP 3: Generate invoice using ASYNC / AWAIT (inside promise chain)
            return generateInvoice(order);
        })
        .then((invoiceMsg) => {
            console.log(invoiceMsg); // invoice generated

            console.log("Order Processing Completed Successfully!");
        })
        .catch((error) => {
            // handles payment errors or invoice errors
            console.error("Promise Error:", error);
        });
});
