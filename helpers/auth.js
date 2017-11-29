module.exports = {
  ensureAuthenticated: function( req, res, next){
    if(req.ensureAuthenticated()){
      return next();
    }
    req.flash('error_msg', 'Not Authorized');
    res.redirect('/users/login');
  }
}