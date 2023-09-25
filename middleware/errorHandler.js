// Error handling Middleware function for logging the error message --------

function errorLogger(err, req, res, next) {
  console.error(`Error: ${err.message}`);
  next(err); //calling next middleware
}

// Error handling Middleware function reads the error message
// and sends back a response in JSON format

function errorResponder(err, req, res, next) {
  res.header('Content-Type', 'application/json');

  const status = err.statusCode || 404;
  res.status(status).send(err.message);
}

// Fallback Middleware function for returning
// 404 error for undefined paths -------------------------

function invalidPathHandler(req, res, next) {
  res.status(400);
  res.send('Invalid Url ! Please Correct the Url. ');
}

module.exports = {
  errorLogger,
  errorResponder,
  invalidPathHandler,
};
