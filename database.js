const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1/mern';

mongoose.connect('mongodb://127.0.0.1/anderssonPortfolio', { useNewUrlParser: true })
.then(db=> console.log('Conectado a mongodb y db del portafolio.'))
.catch(err => console.console.error(err+' shiiit'));

module.exports = mongoose;