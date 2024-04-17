//144 :- explain the use of the Promise.all() method with an example.

const Promise1= Promise.resolve(3);
const Promise2= 42;
const Promise3 = new Promise<string>((resolve)=>{
    setTimeout(resolve, 100, "foo")
});
Promise.all ([Promise1, Promise2,Promise3]).then((values)=>{
    console.log(values);
})