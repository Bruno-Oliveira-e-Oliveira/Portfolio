function getEnvironmentVariables() {
    const fs = require('fs');
    let environmentVariables = null;
    try {
        environmentVariables = JSON.parse(fs.readFileSync('./env.json'));  
    } catch (error) {
        environmentVariables = {
            "host": "127.0.0.1",
            "port": 3000
        }
    }
    return environmentVariables;  
};

module.exports = getEnvironmentVariables;