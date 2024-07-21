
const controller = {}
const services = require("./services");
controller.signinUser = async ({ email, password }) => {
    if (!email) {
        return {
            success: false,
            message: "email not found",
        };
    }

    if (!password) {
        return {
            success: false,
            message: "password not found",
        };
    }

    const result = await services.signIn({ email, password });

    return result;
}


module.exports = controller;