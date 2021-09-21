var abc = 'Dont'
let def = 'Call'
const ghi = "Don't Call me."
function callMe() {
    var abc = "Call me" 
    // The variable can be assigned another value within the application scope.
    let def = 'Call Me'
    // let - This one allows the varible to be changed within the scope only.
    const ghi = 'Call me.'
    // This is a constant and its value can never be changed.
    console.log(abc);
    console.log(def);
    console.log(ghi);

    function iwont() {
        let def = 'bce'
        console.log(def);
    }
}
