function validate() {
    var usn = document.getElementById("usn").value;
    var pwd = document.getElementById("pwd").value;

    var fs = require('fs');

    fs.readFile('loginDetails.txt', 'utf8', function(err, data) {
        if (err) {
            document.getElementById("usn").value = err;
        }
        document.getElementById("usn").value = data;
    });
}