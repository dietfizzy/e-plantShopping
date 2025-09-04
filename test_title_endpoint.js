const http = require('http');

// Test the title endpoint
function testTitleEndpoint() {
    const options = {
        hostname: 'localhost',
        port: 5000,
        path: '/title/Fairy%20tales',
        method: 'GET'
    };

    const req = http.request(options, (res) => {
        console.log(`Status: ${res.statusCode}`);
        console.log(`Headers: ${JSON.stringify(res.headers)}`);
        
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        
        res.on('end', () => {
            console.log('Response Body:');
            console.log(JSON.stringify(JSON.parse(data), null, 2));
        });
    });

    req.on('error', (e) => {
        console.error(`Problem with request: ${e.message}`);
    });

    req.end();
}

// Test with a non-existent title
function testNonExistentTitle() {
    const options = {
        hostname: 'localhost',
        port: 5000,
        path: '/title/Nonexistent%20Book',
        method: 'GET'
    };

    const req = http.request(options, (res) => {
        console.log(`\nStatus: ${res.statusCode}`);
        console.log(`Headers: ${JSON.stringify(res.headers)}`);
        
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        
        res.on('end', () => {
            console.log('Response Body:');
            console.log(JSON.stringify(JSON.parse(data), null, 2));
        });
    });

    req.on('error', (e) => {
        console.error(`Problem with request: ${e.message}`);
    });

    req.end();
}

console.log('Testing title endpoint with "Fairy tales":');
testTitleEndpoint();

setTimeout(() => {
    console.log('\n\nTesting title endpoint with non-existent book:');
    testNonExistentTitle();
}, 1000);
