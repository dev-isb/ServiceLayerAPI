const services = {}
const fs = require('fs')
const jwtService = require('../../middlewares/jwt');
const bcryptService = require("../../middlewares/bcrypt");
services.signIn = async ({ email, password }) => {
    // await Agent.query(dbConn).where({ email }).first();
    const object = require('../../utils/users/users.json');

    var foundUser = null;
    for (const iterator of object) {
        if (email === iterator.email) {
            foundUser = iterator
        }
    }

    if (!foundUser) {
        return {
            success: false,
            message: "User not subscribed",
        };
    }

    const isPwdOk = await bcryptService.validatePassword(
        password,
        foundUser.password
    );

    if (isPwdOk) {
        const token = jwtService.getToken({
            email: foundUser.email,
        });

        const lastSignin = new Date();

        // await Agent.query(dbConn)
        //     .update({ last_signin_dt: lastSignin })
        //     .where({ email })
        //     .catch((error) => log(error.message));

        return {
            success: true,
            message: "signin successfull",
            data: {
                token: token,
                name: foundUser.name,
                email: foundUser.email,
                lastSigninDt: lastSignin,
                createdAt: foundUser.created_at,
            },
        };
    } else {
        return {
            success: false,
            message: "Invalid Credentials",
        };
    }
}


services.createUser = async ({ email, name, password }) => {

    // const foundUser = await Agent.query(dbConn).where({ email }).first();

    const object = require('../../utils/users/users.json')

    var foundUser = null;
    for (const iterator of object) {
        if (email === iterator.email) {
            foundUser = iterator
        }
    }


    // findOne({ where: { email: email } });

    if (foundUser) {
        return {
            success: false,
            message: "User already subscribed",
        };
    }

    const pwdHash = await bcryptService.generatePasswordHash(password);
    console.log({
        email: email,
        password: pwdHash,
        name: name,
        status: true,
        created_at: new Date(),
    });
    const newUser = {
        email: email,
        password: pwdHash,
        name: name,
    }

    object.push(newUser);


    fs.writeFile("../../utils/users/users.json", JSON.stringify(object), function (err) {
        if (err) throw err;
        console.log('complete');
    }
    );

    if (!newUser) {
        return {
            success: false,
            message: "Something went wrong",
        };
    }

    return {
        success: true,
        message: "User subscribed successfully",
    };
}

module.exports = services