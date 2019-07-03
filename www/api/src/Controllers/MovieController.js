const mongoose = require('mongoose');
const Model = mongoose.model('Movie');
const { paginate } = require('../../config/.env');

module.exports = {
  // index - list all
  async index(req, res) {
    const { limit } = paginate;
    const page = (typeof req.query.page !== 'undefined') ? req.query.page: 1;
    const data = await Model.paginate( { onair: true }, { page, limit } ); //const data = await Model.find( { onair: true } );

    return res.json(data);
  },

  // detail - show
  async show(req, res){
    const data = await Model.findById(req.params.id);

    return res.json(data);
  },

  // store - add new
  async store(req, res){
    const data = await Model.create(req.body);

    return res.json(data);
  },

  // update - update data
  async update(req, res){
    const data = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true} ); // new: true - return updated data

    return res.json(data);
  },

  // destroy - delete data
  async destroy(req, res){
    await Model.findByIdAndRemove(req.params.id);
    //req.body.onair = false;
    //await Model.findByIdAndUpdate(req.params.id, req.body, { new: true} ); // new: true - return updated data

    return res.json({'result': 'success'});
  }
};