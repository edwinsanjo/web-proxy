const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));

function isValidUrl(_string) {
    const matchpattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;
    return matchpattern.test(_string);
}

app.get('/', (req, res) => {
    if (!req.query.url) {
        res.sendFile(path.join(__dirname + '/index.html'));
    } else {

        axios.get(req.query.url).then(resp => {
            res.send(resp.data)
        });
    }
});

app.listen(3001, () => console.log(`Running On : http://localhost:3001`));
