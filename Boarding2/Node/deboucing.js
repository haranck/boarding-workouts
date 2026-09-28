//debouncing

// function debounce(fn, delay) {
//     let timer = 0;

//     return (...args) => {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn(...args);
//         }, delay);
//     };
// }

// function SearchUser(name) {
//     console.log(`Searching ${name}`);
// }

// const debounceFunction = debounce(SearchUser, 500);

// debounceFunction("H");
// debounceFunction("Ha");
// debounceFunction("Har");
// debounceFunction("Hara");
// debounceFunction("Haran");


//throttling

function throttling(fn,delay){
    let lastCall = 0

    return (...args)=>{
        let now  = Date.now()
        if(now - lastCall >= delay){
            lastCall = now
            fn(...args)
        }
    }
}

function SearchUser(name){
    console.log(`Searching ${name}`);
}

const throttlingFn = throttling(SearchUser,2000)

throttlingFn("Haran")