let favNumber = 8;
let baseURL = "http://numbersapi.com";

$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {console.log(data);});

let favNumbers = [1,2,3];
$.getJSON(`${baseURL}/${favNumbers}?JSON`).then(data => {console.log(data);});

Promise.all(
    Array.from({ length:4}, () => {
        return $.getJSON(`${baseURL}/${favNumber}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}<p>`))
});

//we utilize promise all here to get 4 responses
