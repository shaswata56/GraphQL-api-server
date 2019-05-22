const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HeroSchema = new Schema({
    name: String
});

module.exports = mongoose.model('heroes', HeroSchema);
