// const User = require('../model/User');
const User = require('../model/User3');

exports.list = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

exports.create = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
}

exports.destroy = async (req, res) => {
    await User.deleteOne({_id: req.params.id});
    // User.deleteById(req.params.id);
    res.send("User Deleted");
}