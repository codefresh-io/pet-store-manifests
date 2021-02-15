const http = require('http');
http.createServer(function (req, res) {
    res.write('Hello JIRA');
    res.end();
}).listen(1700);
/*




 */
