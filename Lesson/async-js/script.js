// console.log('First');
// console.log('Second');
// console.log('Third');

// console.log('Task 1')

// setTimeout(()=>{
//     console.log('Task 2') // connecting to DB
// }, 2000);

// console.log('Task 3')

// callback - funcs being passed as an argument
const getData = (callback) => {
    setTimeout(()=>{
        const data = "This is the data";
        callback(data);
    }, 3000)
}

const processData = (data) => {
    console.log("Processed Data: " + data);
}

// getData(processData);

const step1 = (callback) => {
    setTimeout(()=>{
        console.log("Step 1 Complete")
        callback(step2)
    }, 1000)
}

const step2 = (callback) => {
    setTimeout(()=>{
        console.log("Step 2 Complete")
        callback(step3)
    }, 1000)
}

const step3 = (callback) => {
    setTimeout(()=>{
        console.log("Step 3 Complete")
        callback()
    }, 1000)
}

step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log("All Steps Complete");
        });
    });
});