const { exec } = require("child_process");
async function main() {
await exec('rm -f .git/index.lock', (error, stdout, stderr) => {
      if (error) {
    console.error(`Erreur : ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr : ${stderr}`);
  }
  console.log(`Stdout: ${stdout}`);
});

await exec('git add .', (error, stdout, stderr) => {
      if (error) {
    console.error(`Erreur : ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr : ${stderr}`);
  }
  console.log(`Stdout: ${stdout}`);
});

await exec('git commit -m "commit"', (error, stdout, stderr) => {
      if (error) {
    console.error(`Erreur : ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr : ${stderr}`);
  }
  console.log(`Stdout: ${stdout}`);
});

await exec('git push -u origin main', (error, stdout, stderr) => {
      if (error) {
    console.error(`Erreur : ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr : ${stderr}`);
  }
  console.log(`Stdout: ${stdout}`);
});
}

main();