let str = '|/-\|/-\|\n';
let time  = 0;
for(let i of str){
  setTimeout(() => {
    process.stdout.write(`\r${i}`);
  }, time)
 time+=500;
}