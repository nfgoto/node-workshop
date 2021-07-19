#!/usr/bin/env node
// required to run this module file as a shell command
// indicates the location of the Node binary

import fs from "fs";

fs.readFile("/etc/passwd", (err, data) => {
  if (err) throw err;
  const bytes = new Uint8Array(data)
    .toString()
    .split(",")
    .map((b) => (+b).toString(2));
  console.log(bytes);
});

setImmediate(() => {
  console.log("This runs while file is being read");
});
