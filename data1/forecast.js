const request =require('request')
const forecast=(latitude,longtude,callback)=>{
const url ="http://api.weatherapi.com/v1/current.json?key=f0c358b12b804adbb18113854231807&q="+latitude+","+ longtude
request({url,json:true},(error,response)=>{
    if(error){
        callback("cant connect to whather service",undefined)
    } else if (response.body.error) {
        console.log(response.body.error.message)
    } else {
        callback(undefined,
                response.body.location.name +
                " it is : "+
                response.body.current.condition.text +
                " tempreture is : "+
                response.body.current.temp_c
)}
})
}
module.exports=forecast;