exports.logSuccess = (msg) => console.log(`\u001b[32msuccess\u001b[0m ${msg}`);

exports.logError = (err) =>
  console.log(`\u001b[31merror\u001b[0m ${err.message}`);
