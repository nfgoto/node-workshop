console.time("sync_timer");

const t1 = setTimeout(() => {
  console.log("t1 reached");
}, 1_000_000);

const t2 = setTimeout(() => {
  console.log("t2 reached");
}, 2_000_000);

// t1 will not require the event loop to keep the process alive
t1.unref();

// ...
clearTimeout(t2);

console.timeEnd("sync_timer");
