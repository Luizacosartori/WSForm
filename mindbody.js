const { Console } = require('console');
const { ClientRequest } = require('http');
const MB_hostname = 'api.mindbodyonline.com';
const siteID = '11407';
const ApiKey = 'edaf873396a445bea2124da244398511';

module.exports = {
	login: (username,password, callback)=>{
        const https = require('https');

        const options = {
            hostname: MB_hostname,
            path: '/public/v6/usertoken/issue',
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'SiteID': siteID,
                'Api-Key': ApiKey
            }
        }
        
        const body = `{
            "username": "${username}",
            "password": "${password}"}
        }`;
        
        https.request(options, res =>{
            var data = "";

            res.on('data', chunk => {
                data += chunk;
            });
        
            res.on('end', () => {
                let tokenIssue = JSON.parse(data);
                callback(tokenIssue.AccessToken);
            });
        
        }).on('error', err => {
            console.log('Error: ', err.message);
        }).end(body);
    },
    getTreatments:(AccessToken,callback) =>{
        const https = require('https');

        const options = {
            hostname: MB_hostname,
            path: '/public/v6/appointment/staffappointments?limit=200&offset=0&startDate=2023-05-12T12%3A00%3A22Z',
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'SiteID': siteID,
                'Api-Key': ApiKey,
                'Authorization':AccessToken
            }
        }

        var data = []

        https.request(options, res =>{
            res.on('data', chunk => {
                data.push(chunk);
            });

            res.on('end', () => {
                try {
                    data = JSON.parse(Buffer.concat(data).toString());
                } catch(e) {
                    reject(e);
                }
                callback(data);
            });
        }).on('error', err => {
            console.log('Error: ', err.message);
        }).end();
    },
    getStaff:(AccessToken,callback) =>{
        const https = require('https');

        const options = {
            hostname: MB_hostname,
            path: '/public/v6/Staff/Staff',
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'SiteID': siteID,
                'Api-Key': ApiKey,
                'Authorization':AccessToken
            }
        }

        var data = []

        https.request(options, res =>{
            res.on('data', chunk => {
                data.push(chunk);
            });

            res.on('end', () => {
                try {
                    data = JSON.parse(Buffer.concat(data).toString());
                } catch(e) {
                    reject(e);
                }
                callback(data);
            });
        }).on('error', err => {
            console.log('Error: ', err.message);
        }).end();
    },
    getClient:(AccessToken,clients,callback) =>{
        const https = require('https');

        var _path = "/public/v6/Client/Clients?limit=100&offset=0&";

        clients.forEach(c => {
            _path += "ClientIDs="+c.ClientId+"&";
        });
        _path = _path.substring(0, _path.length - 1);
        
        const options = {
            hostname: MB_hostname,
            path: _path,
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'SiteID': siteID,
                'Api-Key': ApiKey,
                'Authorization':AccessToken
            }
        }

        var data = []

        https.request(options, res =>{
            res.on('data', chunk => {
                data.push(chunk);
            });

            res.on('end', () => {
                try {
                    data = JSON.parse(Buffer.concat(data).toString());
                } catch(e) {
                    console.log("error:", e);
                }
                callback(data);
            });
        }).on('error', err => {
            console.log('Error: ', err.message);
        }).end();
    }
}