/**
* ______
*|  ____|
*| |__   _ ____   _____  _   _
*|  __| | '_ \ \ / / _ \| | | |
*| |____| | | \ V / (_) | |_| |
*|______|_| |_|\_/ \___/ \__, |
*                         __/ |
*                        |___/
*/

// packages
const fetch = require('node-fetch');
const fs = require('fs');

/**
 * @function postCall - A generic fetch call
 * @param {string} api_url - The url for the fetch request
 * @param {string} req_method - The method type for the request - GET, POST etc
 * @param {string|json} req_body - The body payload for the request
 * @returns void
 */
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
        }).catch(json_err => {
            console.error('Error with json read', json_err.toString());
        });
    }).catch(err => {
        console.error('Error with api call', err.toString());
    });
}

/**
 * @function getApiUrl - Get the api call url
 * @returns {string}
 */
function getApiUrl() {
    let content;
    fs.readFile(`${__dirname}/url.txt`, 'utf8', (err, data) => {
        if (err) throw err;
        content = data;
    });

    return content;
}

/**
 * @function getReqMethod - Get the api call method
 * @returns {string}
 */
function getReqMethod() {
    let content;
    fs.readFile(`${__dirname}/method.txt`, 'utf8', (err, data) => {
        if (err) throw err;
        content = data;
    });

    return content;
}

/**
 * @function getApiUrl - Get the api call body payload
 * @returns {string}
 */
function getReqBody() {
    let content;
    fs.readFile(`${__dirname}/body.json`, 'utf8', (err, data) => {
        if (err) throw err;
        content = data;
    });

    return content;
}

// Invoke the api call
postCall({
    api_url: getApiUrl(),
    req_method: getReqMethod(),
    req_body: getReqBody(),
});