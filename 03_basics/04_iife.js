// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    //unnmaed iffe(no function name)
    console.log(`DB CONNECTED TWO ${name}`);
} )('dev')
