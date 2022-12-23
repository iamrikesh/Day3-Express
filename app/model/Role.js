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
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                Role.#roleList.push(this.obj);
                // reject('failed');
            },5000);
        })
    }

    static findAll(){
        return Role.#roleList;
    }
    
    static deleteById(id){
        Role.#roleList = Role.#roleList.filter(role => role.id != id);
    }
}