let express = require('express');
let app = express();
let port = 5002;

app.get('/temperature/:location_code', function (req, res) {
    const varLocation = req.params.location_code;
    weather.current(location, function (error, temp_f) {
        if (error) {
            res.send('Error: ' + error);
        } else {
            res.send('The temperature in ' + varLocation + ' is ' + temp_f + ' degrees Farenheit');
        }
    })
})

let server = app.listen(port,function(){
    console.log('Server listening on port ' + port);
})