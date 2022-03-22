process.stdin
  .on("readable", () => {
    let chunk;
    console.log("New Data available");
    while ((chunk = process.stdin.read()) !== null) {
      console.log(`Chunk read (${chunk.length} bytes)`);
    }
  })
  .on("end", () => console.log("End of stream"));
