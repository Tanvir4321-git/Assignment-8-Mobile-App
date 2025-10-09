
const getdata=()=>{
    const getData=localStorage.getItem('installedApp');
    if(getData){
        const getDataStr=JSON.parse(getData)
        return getDataStr
    }
    else{
        return []
    }
}

const setData=id=>{
    const storeData=getdata()
        if(storeData.includes(id)){
        alert('ami asi onno kaw k naw')
    }
        else{
            storeData.push(id)
            const Data=JSON.stringify(storeData)
            localStorage.setItem('installedApp' , Data)
        }
    
}
export {setData,getdata}