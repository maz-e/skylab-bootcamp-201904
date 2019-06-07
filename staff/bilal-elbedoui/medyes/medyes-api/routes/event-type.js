const logic = require('../logic');
const express = require('express');
const handleErrors = require('../middleware/handle-errors')
const router = express.Router();
const auth= require('../middleware/auth')


router.get('/', auth,async (req, res) => {
    handleErrors(async () => {
        const eventType = await logic.getAllEventType();
        res.json(eventType);
    }, res)
})

router.get('/:id', auth, async (req, res) => {
    handleErrors(async () => {

        const { params: { id } } = req

        const eventType = await logic.getOneEventType(id)
        res.json(eventType);
    }, res)
})

router.post('/',auth, async (req, res) => {
    debugger
    handleErrors(async () => {

        const { body: { name } } = req

        const result = await logic.createEventType(name)
        res.json(result);
    }, res)

})

module.exports = router;
