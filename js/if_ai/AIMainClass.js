let _possible = new Array();
_possible.push("hi", "Hi", "Hello", "hello", "how are you");
let _pos_len = _possible.length;
export class AIMainClass {
    constructor(props) {
        super(props);
        if (props[0]) {
            console.log("Init_AI");
            console.warn("Using logging mode. to disable, use `var ai = new AIMainClass(false)`");
            console.log("Possible expectations: " + _possible);
        } else {
            console.log("Init_AI");
            console.warn("Using logging mode. to disable, use `var ai = new AIMainClass(false)`");
            console.log("Possible expectations: " + _possible);
        }
    }
}