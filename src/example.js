const contoh =(number)=>{
    return (number >=0)? number:-number;
    // if (number>0) return number;
    // if (number<0) return -number;
    // return 0;
}

module.exports.contoh = contoh;
//export default Example;

module.exports.getCustomer =()=>{

    return({
        id:1,
        username:"dedy"
    })

}