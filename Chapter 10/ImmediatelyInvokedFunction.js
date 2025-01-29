const runOnce = function(){
    console.log(`This will never run again`)
}

runOnce();


(function(){
    console.log(`This will never run again 2`)
})();

(()=>console.log(`This will never run again 3`))(); 