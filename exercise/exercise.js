// packages here
const fetch = require('node-fetch');
const fs = require('fs');

function postCall({
    api_url,
    req_method,
    req_body
}) {
    fetch(api_url, {
        method: req_method,
        body: req_body,
    }).then(res => {
        res.json().then(data => {
            console.log(data);
        });
    })
}

function getApiUrl() {
    let content;
    fs.readFile(`${__dirname}/url.txt`, 'utf8', (err, data) => {
        if (err) throw err;
        content = data;
    });

    return content;
}

function getReqMethod() {
    let content;
    fs.readFile(`${__dirname}/method.txt`, 'utf8', (err, data) => {
        if (err) throw err;
        content = data;
    });

    return content;
}

function getReqBody() {
    let content;
    fs.readFile(`${__dirname}/body.json`, 'utf8', (err, data) => {
        if (err) throw err;
        content = data;
    });

    return content;
}

postCall({
    api_url: getApiUrl(),
    req_method: getReqMethod(),
    req_body: getReqBody(),
});