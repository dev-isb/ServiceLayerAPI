const express = require("express");
const router = express.Router();
const controller = require("./controller");
const { isAuthorized } = require("../../middlewares/auth");


router.post("/", async (req, res) => {
    // #swagger.tags = ['Job']
    // #swagger.description = 'create new out dial jobs.'


    /*	#swagger.parameters['obj'] = {
               in: 'body',
               description: 'User information.',
               required: true,
               schema: { $ref: "#/definitions/CreateJob" }
       } */

    /* #swagger.security = [{
              "apiKeyAuth": []
      }] */

    const payload = req.body;
    const response = await controller.createJob(payload)
    res.status(200).json({
        response
    })

});


router.put("/:id", async (req, res) => {
    // #swagger.tags = ['Job']
    // #swagger.description = 'update outbound job by id.'


    /*	#swagger.parameters['obj'] = {
               in: 'body',
               description: 'User information.',
               required: true,
               schema: { $ref: "#/definitions/UpdateJob" }
       } */

    /* #swagger.security = [{
              "apiKeyAuth": []
      }] */


    const payload = { ...req.body, id: req.params.id };

    const response = await controller.updateJob(payload)
    // console.log(response);
    res.status(201).json(response);


});



router.delete("/:id", async (req, res) => {
    // #swagger.tags = ['Job']
    // #swagger.description = 'all sip peers.'


    /* #swagger.responses[200] = { 
        schema: { "$ref": "#/definitions/SipPeers" },
        description: "all sip peers." } */

    /* #swagger.security = [{
              "apiKeyAuth": []
      }] */


    const payload = { id: req.params.id };
    const response = await controller.delete(payload)
    res.status(200).json({
        response
    })

});


router.get("/", async (req, res) => {
    // #swagger.tags = ['Job']
    // #swagger.description = 'all sip peers.'


    /* #swagger.responses[200] = { 
        schema: { "$ref": "#/definitions/SipPeers" },
        description: "all sip peers." } */

    /* #swagger.security = [{
              "apiKeyAuth": []
      }] */


    // const payload = { id: req.params.id };
    const response = await controller.getJobs()
    res.status(200).json({
        response
    })

});



router.get("/types", async (req, res) => {
    // #swagger.tags = ['Job']
    // #swagger.description = 'all sip peers.'


    /* #swagger.responses[200] = { 
        schema: { "$ref": "#/definitions/SipPeers" },
        description: "all sip peers." } */

    /* #swagger.security = [{
              "apiKeyAuth": []
      }] */


    // const payload = { id: req.params.id };

    const response = await controller.jobTypes()
    res.status(200).json({
        response
    })

});

router.get("/:id", async (req, res) => {
    // #swagger.tags = ['Job']
    // #swagger.description = 'all sip peers.'


    /* #swagger.responses[200] = { 
        schema: { "$ref": "#/definitions/SipPeers" },
        description: "all sip peers." } */

    /* #swagger.security = [{
              "apiKeyAuth": []
      }] */


    // const payload = { id: req.params.id };

    const response = await controller.getJobById(req.params)
    res.status(200).json({
        response
    })

});



module.exports = router;
