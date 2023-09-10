const express = require("express");

const server = express();

const PORT = 3000;

server.get('/', (req,res) =>{
   
    const response = {
      message: "good"
    };

    res.json(response);
});

server.get('/api', (req,res) =>{
    const { slack_name, track } = req.query;

    const currentDay = new Date().toLocaleDateString('en-NG', { weekday: 'short'});
    const currentUtcTime = new Date().toISOString();

    //get github url's
    const githubUrlFile = "https://github.com/IYKON001/HNGxstage1Assignment/blob/main/server.js";
    const githubUrlSource = "https://github.com/IYKON001/HNGxstage1Assignment";

    const response ={
        slack_name,
        current_day: currentDay,
        current_utc_time: currentUtcTime,
        track,
        status_code: 200,
        github_url_file: githubUrlFile,
        github_url_source: githubUrlSource
    };
    res.json(response);
});

server.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
