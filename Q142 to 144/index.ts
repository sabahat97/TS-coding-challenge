//143:- show how to use the.the () and .catch() methods to handle promise resolution and rejection.

const conditionPromise = new Promise<string>((reslove, reject)=>
{const success = Math.random()> 0.5;
    if (success){
        reslove("success!")
    }else {
        reject(new Error ("failure"));
    }
});

conditionPromise.then((result) => console.log (result)).
catch ((error => console.log(error.message)))