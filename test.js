const opts = {
    url: 'https://prod.bkk.ag/weather-api/weather/historic/32.044597/72.595179/8-09-2022/8-09-2022',

}
const curl = require('request-curl');


const { exec } = require("child_process");


const main = async () => {

    return new Promise((resolve, reject) => {
        curl(opts).then(res => {
            // assert.equal((res.body.args.a == 'b' && res.body.args.foo == 'bar' && res.body.args.test == 'true'), true)
            console.log(res);
            resolve(res);
        })
    })

    // return new Promise((resolve, reject) => {
    //     exec("curl 'http://prod.bkk.ag/weather-api/weather/historic/32.044597/72.595179/8-09-2022/8-09-2022'", (error, stdout, stderr) => {
    //         if (error) {
    //             console.log(`error: ${error.message}`);
    //             return;
    //         }
    //         if (stderr) {
    //             console.log(`stderr: ${stderr}`);
    //             return;
    //         }
    //         console.log(`stdout: ${stdout}`);
    //         if (stdout) {
    //             resolve(stdout);

    //         }
    //     });
    // })


}

const main2 = async () => {
    await main();
}
main2()
