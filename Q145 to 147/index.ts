// 145:- create a function that accepts to a callback and invokes it with some argumnents

function excuteCallback(
    callback : (arg1: number , arg2 :number) => void,
    arg1 : number,
    arg2 : number
): void{
    callback(arg1, arg2);
}

const add = ( a : number, b : number) =>{
    console.log(a+b);
   
}
excuteCallback( add , 6 , 3) // output 9