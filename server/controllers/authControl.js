const User = require("../../database/models/user.model");
const jwt = require("jsonwebtoken");
const validator = require("email-validator");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username) return res.status(400).send("username is required");

    if (!email) return res.status(400).send("email is required");

    if (!validator.validate(email))
      return res.status(400).send("Invalid email");

    if (!password || password.length < 6)
      return res.status(400).send("Enter valid password");

    const userExist = await User.findOne({ email });

    if (userExist) return res.status(400).send("User already exists");

    const user = await new User({
      email,
      username,
      password,
    });

    await user.save();
    return res.status(200).send("User successfully created");
  } catch (error) {
    return res.status(400).send("Error creating user");
  }
};

const signin = async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (!user) return res.status(400).send("Invalid email");

    user.checkPassword(password, (err, isMatch) => {
      if (!isMatch || err) return res.status(400).send("Invalid password");
      let token = jwt.sign(
        {
          _id: user._id,
        },
        "sdgsdggsgdsgetqwtbs",
        {
          expiresIn: "24h",
        }
      );
      res.status(200).send({
        token,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        updateAt: user.updateAt,
      });
    });

  } catch (error) {
    return res.status(400).send("Error logging user");
  }
};
