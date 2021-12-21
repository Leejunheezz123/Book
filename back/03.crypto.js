const crypto = require('crypto');
const bcrypt = require('bcrypt');
const cipher =require('crypto-js')

const salt = 'qfaskfmlsakmfdw'

let pass = '123456'
let pass512 =crypto.createHash('sha512').update(pass + salt).digest('base64')
//console.log(pass512)

const genPass =  async pass=>{ //password 암호화 = hash 사용
    return await bcrypt.hash(pass + salt, 5)
}


const comparePass = async (pass, hash) => { //비밀번호 검증 = compare 사용

    return await bcrypt.compare(pass + salt, hash)
    console.log(compare)
}


const passVerify =async () => { //hash는 찍을때마다 틀리게나오지만 검증이가능.
    let pass = '123456' 
    let hash = await genPass(pass)
    console.log(hash)
    let compare = await comparePass('123456', hash)
    console.log(compare)
}
passVerify()

const passVerify2 = async () =>{
    let pass = '1111'
    let salt = '123123asdf'
    let hash = await bcrypt.hash(pass + salt, 5)
    let compare = await bcrypt.compare(pass+salt, hash)
    console.log("verify2:", compare)
}
passVerify2()



const encrypt = cihper.AES.encrypt('아버지를 아버지라', salt).toString()
console.log(encrypt)

const decrypt = cihper.AES.decrypt(encrypt, salt)
