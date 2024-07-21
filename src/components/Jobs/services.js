const services = {}
const moment = require('moment');

// const db = require('../../database/index')
const job = require("../../models/jobs");
const jobTypes = require("../../models/job_types");

const jobData = require("../../models/job_data");

// const models 

services.createJob = async (payload) => {


    const response = await job.query().insertGraphAndFetch(payload);
    return response;

}


services.getJobs = async () => {

    const response = await job.query().withGraphFetched('jobData');
    return response;
}

services.getJobById = async (payload) => {
    const { id } = payload;
    const response = await job.query().withGraphFetched('jobData').where({ id });
    return response
}

services.updateJob = async (payload) => {


    const { startTime, endTime } = payload;
    if (startTime) payload.startTime = moment(startTime).format('yyyy-MM-DD HH:mm:ss');
    if (endTime) payload.endTime = moment(endTime).format('yyyy-MM-DD HH:mm:ss');


    const response = await job.query().upsertGraphAndFetch(payload);
    return response;
}

services.delete = async (payload) => {
    console.log("id is :", payload.id);
    const response = await job.query().deleteById(payload.id)
    return response;
}

services.jobTypes = async () => {

    const response = await jobTypes.query().select();
    return response;
}

module.exports = services;