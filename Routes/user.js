const express = require("express");
const { User } = require("../Model/user");
const router = express.Router();

// GET THE ALL DATA
router.get('/', async (req, res) => {
    const user = await User.find({})
    if (!user) {
        return res.json('No data exixt')
    }

    return res.json({ status: 200, data: user })
})

// GET USER SPECIFIC DATA
router.get('/:id', async (req, res) => {
    const data = await User.findById(req.params.id);

    if (!data) {
        return res.json({ status: 404 })
    }

    return res.json({ status: 201, data: data })
})

// UPDATE THE DATA USING ID
router.put("/:id", async (req, res) => {
    const data = await User.findById(req.params.id)

    if (!data) {
        return res.json({ status: 404, message: "no data fount" })
    }

    let updateData = await User.findByIdAndUpdate(req.params.id, {
        enclosure_id: req.body.enclosure_id,
        meaurement_name: req.body.meaurement_name,
        values: req.body.values,
    })

    if (!updateData) {
        return res.json({ status: 500, message: "Cant update the data" })
    }

    return res.json({ status: 200, message: "Update Successfully" })


})

// POST THE DATA
router.post('/', async (req, res) => {
    const user = new User({
        enclosure_id: req.body.enclosure_id,
        meaurement_name: req.body.meaurement_name,
        values: req.body.values,

    })

    user == await user.save()
    if (!user) {
        return res.send('Enable to create a User')
    }

    return res.status(200).send(user)
})





module.exports = router;