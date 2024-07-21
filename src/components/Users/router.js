const express = require("express");
const router = express.Router();
const { isAuthorized } = require("../../middlewares/auth");
const controller = require('./controller');


router.post("/signIn", async (req, res, next) => {
    /* 	#swagger.tags = ['User']
          #swagger.description = 'Endpoint to sign in a specific user' */

    /*	#swagger.parameters['obj'] = {
              in: 'body',
              description: 'User information.',
              required: true,
              schema: { $ref: "#/definitions/AddUser" }
      } */

    /* #swagger.security = [{
              "apiKeyAuth": []
      }] */
    console.log(req.body);

    const response = await controller.signinUser(req.body)

    res.status(201).json(response);
});

router.get("/users/:id", isAuthorized, async (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint to get a specific user.'
    const users = [];
    const data = users.find((e) => e.id === req.params.id);

    /* #swagger.responses[200] = { 
        schema: { "$ref": "#/definitions/Authorized" },
        description: "User registered successfully." } */
    res.status(200).json({
        data: [],
        message: "Successfully found",
    });
});

module.exports = router;
