const isLoggedIn = (req, res, next) => {
  if(req.session.user === undefined) {
    res.redirect('/signin')
  } else {
    next()
  }
};

module.exports = {
  isLoggedIn
};
