//142:- create a promise that resolved with "hello world after 2 second"
const hellopromise = new Promise<string>((resolve)=>{ setTimeout(()=>{
    resolve("hello world!");
}, 2000)
});
hellopromise.then((message) =>console.log(message));