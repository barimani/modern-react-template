/** Returning the proper storeDev based on the environment */
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./store.prod.js');
} else {
    module.exports = require('./store.dev.js');
}
