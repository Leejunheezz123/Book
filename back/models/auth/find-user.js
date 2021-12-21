const validator = require('validator')
const bcrypt = require('bcrypt')
const {pool} = require('../../modules/mysql-module')

// GET field, value를  회원데이터- 한명
const findUser = async (key, value) => {
    let sql
    try{
        sql = ` 
        SELECT U.*, S.idx AS sidx,
        S.provider, S.snsname, S.displayName,
        S.email AS snsEmail,
        S.profileURL,
        S.status AS snsStatus,
        A.domain, A.apikey
        FROM users AS U LEFT JOIN users_sns AS S 
        ON U.idx = S.fidx
        LEFT JOIN users_api AS A
        ON U.idx = A.fidx
        WHERE U.${key}=? `
        const [r] = await pool.execute(sql,[value])
        if(r.length ===1 )
        return { success: true, user: r[0]}
        else
        return { success: false, user: null}
    }
    catch(err){
        throw new Error(err)
    }

}
// GET 모든 회원 데이터
const findAllUser = async (order='ASC') => {
    let sql
    try{
        sql = ` SELECT * FROM users ORDER BY id ?  `
        const [users] = await pool.execute(sql, [order])
        return { success: true, user: users}
    }
    catch(err){
    throw new Error(err)
    }

    

}
// GET field, value-> 회원 존재여부
const existUser = async (key, value)=>{
    try{
        const sql = ` SELECT * FROM users WHERE ${key}=? `
        const [rs] = await pool.execute(sql, [value])
        return rs.length ? {success:true, idx: rs[0].idx} : {success: false, idx:null}

    }
    catch(err){
    throw new Error(err)
    }
}

// GET 로그인처리
const loginUser = async(userid, passwd)=>{
    let sql, compare
    try{
        sql= "SELECT * FROM users WHERE userid=? "
        const [r] = await pool.execute(sql,[userid])
        if(r.length ===1 ){
            compare = await bcrypt.compare(passwd + process.env.BCRYPT_SALT, r[0].passwd)
            return compare 
            ? { success: true, user: r[0], msg:'로그인 되었습니다.'} 
            : { success: false, user:null, msg: '비밀번호가 일치하지 않습니다.'}
        }
        else return {success: false, user:null, msg:'아이디가 일치하지 않습니다.'}
    }
    catch(err){
        throw new Error(err)

    }

}

module.exports = { findUser,findAllUser,existUser,loginUser} 