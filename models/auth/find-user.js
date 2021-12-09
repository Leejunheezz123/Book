const validator = require('validator')
const bcrypt = require('bcrypt')
const {pool} = require('../../modules/mysql-module')


const findUser = async (key, value) => {
    let sql
    try{
        sql = ` SELECT * FROM users WHERE ${key}=? `
        const [r] = await pool.execute(sql,[value])
        return { success: true, user: r[0]}
    }
    catch(err){
        console.log(err)
        return {success: false, user: null,err}
    }

}

const findAllUser = async (order='ASC') => {
    let sql
    try{
        sql = ` SELECT * FROM users ORDER BY id ?  `
        const [users] = await pool.execute(sql, [order])
        return { success: true, user: users}
    }
    catch(err){
        console.log(err)
        return {success: false, user: null,err}
    }

    

}
const isVerify = async (key, value)=>{
    const sql = ` SELECT * FROM users WHERE ${key}=? `
    const [rs] = await pool.execute(sql, [value])
    console.log(rs)
    return rs.length ? true : false
}

const loginUser = async(user)=>{

}

module.exports = { findUser,findAllUser,isVerify,loginUser } 