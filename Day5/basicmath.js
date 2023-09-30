let add=(params)=>{
    let sum=0;
    params.forEach(element => {
        sum+=element
        
    });
    return sum
    
}
let sub=(params)=>{
    let sub=0;
    params.forEach(element => {
        sub-=element
        
    });
    return sub
    
}
let mul=(params)=>{
    let mul=0;
    params.forEach(element => {
        mul*=element
        
    });
    return mul
    
}
let div=(params)=>{
    let div=0;
    params.forEach(element => {
        div/=element
        
    });
    return div
    
}

module.exports={
    add:add,
    sub:sub,
    mul:mul,
    div:div
}