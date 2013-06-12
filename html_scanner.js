

// If we are running at bundle time, set module.exports.
// For unit testing in server environment, don't.
if (typeof module !== 'undefined')
  module.exports = html_scanner;