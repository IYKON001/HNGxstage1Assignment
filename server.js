const express = require("express");

const server = express();

const PORT = 3000;

server.get('/get_time', (req,res) =>{
    const { Slack_Name, Track } = req.query;

    //get current day of the week
    const currentDay = new Date().toLocaleDateString('en-US', {weekday: 'long'});
    const currentUtcTime = new Date().toUTCString();

    //return info in json format
    const response = {
        Slack_Name,
        current_day: currentDay,
        current_utc_time: currentUtcTime,
        Track,
    };

    res.json(response);
});

server.get('/github_info', (req,res) =>{

    //get github url's
    const githubUrlFile = "https://github.com/IYKON001/HNGxstage1Assignment/blob/main/server.js";
    const githubUrlSource = "https://github.com/IYKON001/HNGxstage1Assignment";

    const response ={
        github_url_file: githubUrlFile,
        github_url_source: githubUrlSource
    };
    res.json(response);
});

server.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
