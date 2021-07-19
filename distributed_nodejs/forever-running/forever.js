let i = 5;
const itv = setInterval(() => {
  if (i == 0) {
    console.log("condition met, process will exit");
    return clearInterval(itv);
  }
  console.log("Process still running");
  i--;
}, 1_000);
