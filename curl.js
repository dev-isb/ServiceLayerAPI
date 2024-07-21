'use strict';

const util = require('util');
const exec = util.promisify(require('child_process').exec);
const validator = require('validator');

class cURL {
    constructor(url) {
        this.url = url;
    }

    validate() {
        return typeof this.url === 'string' && validator.isURL(this.url);
    }

    parseHeaders(output) {
        if (!output || output.length === 0) {
            return null;
        }
        const lines = output.split(/\r\n/);
        let headers = {};
        lines.forEach(line => {
            let values = line.split(/:\s/);
            if (values.length === 2 && typeof values[0] === 'string' && typeof values[1] === 'string') {
                let [key, value] = values;
                headers[key] = value.trim();
            }
        });
        return headers;
    }

    async getHeaders() {
        if (!this.validate()) {
            throw new Error('Invalid parameter.');
        }
        const cmd = `curl -I ${this.url}`;

        try {
            const { stdout, stderr } = await exec(cmd);
            return this.parseHeaders(stdout);
        } catch (err) {
            return err;
        }
    }
}

module.exports = cURL;