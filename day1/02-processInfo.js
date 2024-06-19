console.log("Node.js Version: " + process.version + " Platform: " + process.platform + " Process ID: " + process.pid);


setInterval(
    () => {
        console.log(process.memoryUsage());
    },
    5 * 1000
  );
