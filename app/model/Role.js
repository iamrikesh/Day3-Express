const uuid = require('uuid').v4;

module.exports = class Role{
    static #roleList = [
        {
            id: 1,
            name: 'admin'
        },
        {
            id: 2,
            name: 'user'
        }
    ];

    constructor(obj){
        obj.id = uuid();
        this.obj = obj;
    }

    save(){
        Role.#roleList.push(this.obj);
    }

    static findAll(){
        return Role.#roleList;
    }
    
    static deleteById(id){
        Role.#roleList = Role.#roleList.filter(role => role.id != id);
    }
}