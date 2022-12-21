const Role = require('../model/Role');

exports.list = (req, res) => {
    res.json(Role.findAll());
}

exports.create = (req, res) => {
    const role = new Role(req.body);
    role.save();
    res.json(role);
}

exports.destroy = (req, res) => {
    Role.deleteById(req.params.id);
    res.send("Role Deleted");
}