const express = require("express");

const server = express();

const PORT = 3000;

// Manually set values for IYKON and BACKEND
const Slack_Name = "IYKON";
const Track = "BACKEND";

server.get('/get_time', (req,res) =>{
    // Use the manually set values
    const currentDay = new Date().toLocaleDateString('en-US', {weekday: 'long'})
    const currentUtcTime = new Date().toUTCString();

    const response = {
        Slack_Name,
        current_day: currentDay,
        current_utc_time: currentUtcTime,
        Track,
    }

    res.json(response);
})

server.get('/github_info', (req,res) =>{

    const githubUrlFolder = "https://github.com/IYKON001/HNGxstage1Assignment"
    const githubUrlSource = "https://github.com/IYKON001/HNGxstage1Assignment/blob/main/server.js"

    const response ={
        github_url_folder: githubUrlFolder,
        github_url_source: githubUrlSource
    }
    res.json(response)
})

server.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);
})
