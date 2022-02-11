const pool = require("../../config/database");
const { genSaltSync, hashSync} = require("bcrypt");

module.exports = {
    createUser: (data, callBack) => {
        pool.query(
            'insert into registration (name, gender, email, password, number) values(?, ?, ?, ?, ?)',
            [
                data.name,
                data.gender,
                data.email,
                data.password,
                data.number
            ],
            (error, results, fields) =>{
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    updateUser: (data, callBack) => {
        pool.query(
            'update registration set (name = ? , gender = ?, email = ?, password = ?, number = ? where id = ?) ',
            [
                data.name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (error, results, fields) =>{
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getUsers: callBack => {
        pool.query(
            'select id, name, gender, email, number from registration',
            [],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getUserByUserId:(id, callBack) => {
        pool.query(
            'select id, name, gender, email, number from registration where id = ?',
            [id],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    deleteUser: (data, callBack) => {
        pool.query(
            'delete from registration where id = ?',
            [data.id],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },

    getUserByEmail: (email, callBack) =>{
        pool.query(
            'select * from registration where email = ?',
            [email],
            (error, results, fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },


};