const sentence = "hello there from lighthouse labs";

for (let index = 0; index < sentence.length; index++) {
  setTimeout(()=>{
    let char = "";
    char = sentence[index];
    if (index === sentence.length - 1) {
      process.stdout.write(`${char}\n`);
    } else {
      process.stdout.write(char);
    }
  }, index * 50);
}
