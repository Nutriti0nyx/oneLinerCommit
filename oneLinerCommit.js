const { exec } = require("child_process");

exec('rm -f .git/index.lock', () => {
    exec('git add .', () => {
        exec('git commit -m "commit"', () => {
            exec('git push -u origin main', () => {
            });
        });
    });
});





