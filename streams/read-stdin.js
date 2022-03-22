async function main() {
  for await (const chunk of process.stdin) {
    console.log("New Data available");
    console.log(`Chunk read (${chunk.length} bytes)`);
  }
  console.log("End of stream");
}
main()