process.stdin
  .on("data", (chunk) => {
    console.log("New Data available");
    console.log(`Chunk read (${chunk.length} bytes)`);
  })
  .on("end", () => console.log("End of stream"));
