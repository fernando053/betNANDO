const path = require('path');

// Set working directory to apps/api for Prisma and dotenv
process.chdir(path.join(__dirname, '..', 'apps', 'api'));

// Load environment variables
require('dotenv').config({ path: path.join(__dirname, '..', 'apps', 'api', '.env') });

// Import the compiled Express app
const app = require('../apps/api/dist/index.js');

module.exports = app;
