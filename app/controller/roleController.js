const Role = require('../model/Role');

exports.list = (req, res) => {
    res.json(Role.findAll());
}

exports.create = async (req, res) => {
    try{
        const role = new Role(req.body);
        await role.save();
        res.json(role);
    }catch(err){
        res.send(err);
    }
}

exports.destroy = (req, res) => {
    Role.deleteById(req.params.id);
    res.send("Role Deleted");
}