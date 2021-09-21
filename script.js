
async function callMe() {
    // var and let are both used for variable declaration in javascript but the difference 
    // between them is that var is function scoped and let is block scoped. It can be said that 
    // a variable declared with var is defined throughout the program as compared to let.

    var abc = "Call me" 
    // The variable can be assigned another value within the application scope.
    let def = 'Call Me'
    // let - This one allows the varible to be changed within the scope only.
    const ghi = 'Call me.'

    // This is a constant and its value can never be changed.
    
    console.log(abc);
    console.log(def);
    console.log(ghi);
    
    console.log("Waiting then printing.");

    await iwont();

    function iwont() {
        let def = 'bce'
        console.log(def);
    }
}
