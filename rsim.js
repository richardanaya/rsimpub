import { extractCString, insertString } from "./cstring.js";

// utility functions

async function loadJSON(url) {
  var response = await fetch(url);
  var json = await response.json();
  return json;
}

async function loadBytes(url) {
  var response = await fetch(url);
  var data = await response.arrayBuffer();
  return data;
}

// lets get some handle to elements we'll be using
let logEl = document.querySelector("#log");
let shelvesEl = document.querySelector("#shelves");
let driversEl = document.querySelector("#drivers");

// Add message to on screen log
function restaurantLog(msg) {
  // just do something simple right now to append log of whats happened
  logEl.innerHTML += `<div class="log">` + msg + "</div>";
}

function renderShelf(shelf) {
  shelvesEl.innerHTML += `<div class="shelf"><h2>${shelf.name} (max capacity: ${
    shelf.capacity
  })</h2><table class="shelf"><tr><th>Name</th><th>Order Value</th><th>Shelf Life</th><th>Age</th></tr>${shelf.items
    .map(
      x =>
        `<tr><td>${x.order.name}</td><td>${x.order_value}</td><td>${x.order.shelfLife}</td><td>${x.age}</td></tr>`
    )
    .join("")}</table></div>`;
}

function renderDrivers(drivers) {
  driversEl.innerHTML = `<h2>Drivers</h2><table class="drivers"><tr><th>Driver Order ID</th><th class="centered">Time Til Arrival</th></tr>${drivers
    .map(
      x =>
        `<tr><td>${x.order_id}</td><td class="centered">${x.time_til_arrival} seconds</td></tr>`
    )
    .join("")}</table></div>`;
}

// Loads the simulator and runs it's execution loop
async function runSimulation() {
  let config = await loadJSON("config.json");
  let orders = await loadJSON("orders.json");
  let bytes = await loadBytes("rsim.wasm");
  let mem;
  let program = await WebAssembly.instantiate(bytes, {
    env: {
      rsim_log: function(msgPtr) {
        let msg = extractCString(
          program.instance.exports.memory.buffer,
          msgPtr
        );
        restaurantLog(msg);
      },
      rsim_error: function(msgPtr) {
        let msg = extractCString(
          program.instance.exports.memory.buffer,
          msgPtr
        );
        console.error(msg);
      },
      rsim_rand: function() {
        return Math.random();
      },
      rsim_set_view_items: function(jsonPtr) {
        let jsonStr = extractCString(
          program.instance.exports.memory.buffer,
          jsonPtr
        );
        let viewState = JSON.parse(jsonStr);
        shelvesEl.innerHTML = "";
        renderDrivers(viewState.drivers);
        for (var s in viewState.shelves) {
          renderShelf(viewState.shelves[s]);
        }
        renderShelf(viewState.trash);
      }
    }
  });

  // first load in our config string into wasm memory
  let configStr = JSON.stringify(config);
  const [configStart, configLen] = insertString(
    () => program.instance.exports.memory.buffer,
    program.instance.exports.malloc,
    configStr
  );

  // then load in our orders string into wasm memory
  let ordersStr = JSON.stringify(orders);
  const [ordersStart, ordersLen] = insertString(
    () => program.instance.exports.memory.buffer,
    program.instance.exports.malloc,
    ordersStr
  );

  // initialize the simulator
  let result = program.instance.exports.init(
    configStart,
    configLen,
    ordersStart,
    ordersLen
  );

  if (!result) {
    restaurantLog("something went wrong");
    return;
  }

  let handle = window.setInterval(() => {
    let result = program.instance.exports.run(1);
    if (!result) {
      restaurantLog("something went wrong");
      window.clearInterval(handle);
    }
  }, 1000);
}

// get things started
runSimulation().then();
