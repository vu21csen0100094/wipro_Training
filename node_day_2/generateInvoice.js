// This file generates invoice using ASYNC / AWAIT

async function generateInvoice(order) {

    console.log("Generating invoice...");

    // Returning a Promise because invoice generation also takes time
    return new Promise((resolve) => {

        setTimeout(() => {

            // After 1 second, invoice is "generated"
            resolve(`Invoice generated for Order ID ${order.id}`);

        }, 1000);
    });
}

// Export for use in main file
module.exports = generateInvoice;
