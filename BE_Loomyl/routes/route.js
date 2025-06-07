const express = require("express")
const router = express.Router()

const user = require("../app/api/user")
const comunity = require("../app/api/comunity")
const notepad = require("../app/api/notepad")
const comment = require("../app/api/comment")
const auth = require("../app/api/auth")

router.use("/auth", auth)
router.use("/users", user)
router.use("/communities", comunity)
router.use("/notepads", notepad)
router.use("/comments", comment)


module.exports = router