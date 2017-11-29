if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://jdvd:hem258@ds123976.mlab.com:23976/vidjot-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}