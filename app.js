const country=process.argv[2]
const gecode=require('./data1/geocode')
const forecast = require('./data1/forecast')
gecode(country,(error,data)=>{
    console.log('ERROR',error)
    console.log('DATA',data)
    if(data){
        forecast(data.longtude,data.latitude,(error,data)=>{
            console.log("ERROR",error)
            console.log('DATA',data)
        })
    }else{
        console.log('there is an error from your location please enter a correct country ...!!')
    }
    
})