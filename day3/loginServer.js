const http = require('http');
let userObj = [];
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    // res.end('Hello, World!\n')

    if (req.url === '/login' && req.method === 'POST') {
        let data = '';
        req.on('data', chunk => {
            data += chunk.toString();
        });
        req.on('end', () => {
            console.log('POST data:', data);
            const dataJson = JSON.parse(data);
            if (dataJson.userName && dataJson.password) {
                userObj.push(dataJson);
                res.end('Login Successful!');
            } else {
                res.end('Login Failed: Username and password are required.');
            }
        });
    }
    // Handle PUT request to update username
    else if (req.url === '/update' && req.method === 'PUT') {
        let data = '';
        req.on('data', chunk => {
            data += chunk.toString();
        });
        req.on('end', () => {
            console.log('PUT data:', data);
            const dataJson = JSON.parse(data);
            if (dataJson.userName && dataJson.password) {
                let userFind = userObj.find(element => element.userName === dataJson.userName);
                if (userFind) {
                    userFind.password = dataJson.password;
                    res.end('Update Successful!');
                } else res.end('Operation Failed: User not found.')
            } else {
                res.end('Update Unsuccessful!');
            }
        });
    } // Handle DELETE request to remove username
    else if (req.url === '/delete' && req.method === 'DELETE') {
        let data = '';
        req.on('data', chunk => {
            data += chunk.toString();
        });
        req.on('end', () => {
            data = data === '' ? '{}' : data;
            const dataJson = JSON.parse(data);
            if (dataJson.userName) {

                let userFind = userObj.find(element => element.userName === dataJson.userName);
                if (userFind) {
                    userObj = userObj.filter(element => element.userName !== dataJson.userName);
                    res.end('Deletion Successful!');
                } else {
                    res.end('Operation Failed: User not found.');
                }

            } else {
                res.end('Delete : Invalid data.');
            }
        });
    } else if (req.url === '/list' && req.method === 'GET') {
        res.end(JSON.stringify(userObj));

    }

    else {
        // Handle 404 - Page Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
    }
});

const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
})