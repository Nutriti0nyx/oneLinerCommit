const { exec } = require("child_process");

exec('rm -f .git/index.lock', (error, stdout, stderr) => {
      if (error) {
    console.error(`Erreur : ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr : ${stderr}`);
  }
  console.log(`Stdout: ${stdout}`);

  exec('git add .', (error, stdout, stderr) => {
  exec('git commit -m "commit"', (error, stdout, stderr) => {
  exec('git push -u origin main', (error, stdout, stderr) => {
});
});
});
});





