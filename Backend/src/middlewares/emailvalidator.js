async function emailValidator(req, res, next) {
  const regexEmail =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  const valid = regexEmail.test(req.body.email);
  if (valid) {
    next();
  } else {
    res.status(400).send("you're all messed up");
  }
}

export { emailValidator };
