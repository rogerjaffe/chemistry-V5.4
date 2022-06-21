const copyNodeModules = require("copy-node-modules");
copyNodeModules(".", "./nodejs", (err, results) => {
  if (err) {
    console.error(err);
    return;
  }
  results.forEach((obj) => {
    console.log(`Package name: ${obj.name}, version: ${obj.version}`);
  });
});
