/*
  Q8: Callback → Promise → Async/Await
  ----------------------------------------------------
  - Same functionality converted into 3 async styles
*/

const http = require("http");

// ---------------- CALLBACK VERSION -----------------
function fetchDataCallback(url, callback) {
  http.get(url, (res) => {
    let data = "";

    res.on("data", (chunk) => (data += chunk));
    res.on("end", () => callback(null, data));
  }).on("error", (err) => callback(err));
}

// ---------------- PROMISE VERSION ------------------
function fetchDataPromise(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(data));
    }).on("error", (err) => reject(err));
  });
}

// --------------- ASYNC / AWAIT VERSION -------------
async function fetchDataAsync(url) {
  const data = await fetchDataPromise(url);
  return data;
}

// --------------- DEMO SECTION ----------------------
const URL = "http://localhost:3001"; // refers to cli.js server

// Callback usage
fetchDataCallback(URL, (err, data) => {
  console.log("\nCALLBACK RESULT:");
  console.log(err || data);
});

// Promise usage
fetchDataPromise(URL).then((data) => {
  console.log("\nPROMISE RESULT:");
  console.log(data);
});

// Async/Await usage
(async () => {
  console.log("\nASYNC/AWAIT RESULT:");
  console.log(await fetchDataAsync(URL));
})();
