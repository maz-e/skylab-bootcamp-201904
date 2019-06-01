function checkLogin(path, loggedIn = true) {
    return function (req, res, next) {
        const { logic } = req

        if (logic.isUserLoggedIn === loggedIn) return res.redirect(path)

        next()
    }
}

module.exports = checkLogin