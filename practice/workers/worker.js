const {parentPort } = require('worker_threads');

parentPort.on('message',(message) =>{
    let response = message * 2;
    parentPort.postMessage(response);
});