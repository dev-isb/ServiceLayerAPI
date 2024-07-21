const controller = {};
const Joi = require("joi");
const services = require('./services');


controller.getJobs = async () => {


    try {

        const response = await services.getJobs();
        if (response.length > 0) {
            return {
                success: true,
                data: response
            }
        }
        else {
            return {
                success: false,
                message: "no record found"
            }
        }
    } catch (error) {
        console.log("errror  : ", error);
        return {
            success: false,
            error: error.message
        }
    }

}

controller.getJobById = async (payload) => {


    try {
        const schema = Joi.object().keys({
            id: Joi.number().required()
        });

        const notValid = schema.validate(payload).error;

        if (notValid) {
            return {
                success: false,
                message: notValid.message,
            };
        }

        const response = await services.getJobById(payload);
        if (response.length > 0) {
            return {
                success: true,
                data: response
            }
        }
        else {
            return {
                success: false,
                message: "no record found"
            }
        }
    } catch (error) {
        console.log("errror  : ", error);
        return {
            success: false,
            error: error.message
        }
    }

}

controller.createJob = async (payload) => {

    try {

        const schema = Joi.object().keys({
            name: Joi.string().required(),
            type: Joi.string().required(),
            pause: Joi.number().required(),
            complete: Joi.number().required(),
            jobData: Joi.array().required().allow(null),
            startTime: Joi.string().required(),
            endTime: Joi.string().required(),
            frequency: Joi.number().optional(),
            queue: Joi.string().optional(),
            active: Joi.number().optional(),
            concurrency: Joi.number().optional(),
            // type
        });

        const notValid = schema.validate(payload).error;

        if (notValid) {
            return {
                success: false,
                message: notValid.message,
            };
        }

        const response = await services.createJob(payload);
        return {
            success: true,
            data: response
        }


    } catch (error) {
        console.log("error :", error);
        return {
            success: false,
            error: error.message
        }
    }
}
controller.updateJob = async (payload) => {

    try {

        const schema = Joi.object().keys({
            name: Joi.string().optional(),
            id: Joi.number().required(),
            type: Joi.string().optional(),
            pause: Joi.number().optional(),
            complete: Joi.number().optional(),
            jobData: Joi.array().optional()
        }).unknown();

        const notValid = schema.validate(payload).error;

        if (notValid) {
            return {
                success: false,
                message: notValid.message,
            };
        }

        const response = await services.updateJob(payload);
        return {
            success: true,
            data: response
        }

    } catch (error) {
        console.log("error : ", error);
        return {
            success: false,
            error: error.message
        }
    }


}


controller.delete = async (payload) => {

    try {
        const schema = Joi.object().keys({
            id: Joi.number().required(),
        });

        const notValid = schema.validate(payload).error;

        if (notValid) {
            return {
                success: false,
                message: notValid.message,
            };
        }

        const response = await services.delete(payload);
        return {
            success: true,
            data: response
        }

    } catch (error) {

        console.log("error : ", error);
        return {
            success: false,
            error: error.message
        }
    }





}

controller.jobTypes = async () => {

    try {
        const response = await services.jobTypes()
        if (response.length > 0) {
            return {
                success: true,
                data: response
            }

        }

        return {
            success: false,
            message: "no record found "
        }
    } catch (error) {

        console.log("error :", error);
        return {
            success: false,
            error: error.message
        }
    }
}

module.exports = controller;