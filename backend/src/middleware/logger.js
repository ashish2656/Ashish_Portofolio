/**
 * Logger middleware to log HTTP requests
 */
const logger = (req, res, next) => {
  const start = new Date();
  const { method, url } = req;
  
  // Continue to the next middleware or route handler
  next();
  
  // After the request is processed, log the details
  const end = new Date();
  const responseTime = end - start;
  console.log(`${method} ${url} - Status: ${res.statusCode} - ${responseTime}ms - ${new Date().toISOString()}`);
};

module.exports = logger; 