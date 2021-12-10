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

const loginUser = async({userid, passwd})=>{
    let sql, compare
    try{
        sql= "SELECT * FROM users WHERE userid=? "
        const [r] = await pool.execute(sql,[userid])
        if(r.length ===1 ){
            compare = await bcrypt.compare(passwd + process.env.BCRYPT_SALT, r[0].passwd)
            return compare ? { success: true, user: r[0], msg:'로그인 되었습니다.'} : { success: false, user:null, msg: '비밀번호가 일치하지 않습니다.'}
        }
        else return {success: false, user:null, msg:'아이디가 일치하지 않습니다.'}
    }
    catch(err){
        return {success: false, user:null, err : err }

    }

}

module.exports = { findUser,findAllUser,isVerify,loginUser } 