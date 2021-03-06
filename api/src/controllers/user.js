const { userModel,userSignModel } = require('../../databases/mongo');
const { bcryptHelpers } = require('../../helpers');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config');

module.exports = {
  signUp: async (req, res) => {
    const { username, password } = req.body;

    const userFound = await userModel.findOne({ username });
    if (userFound) return res.status(403).json({ msg: 'User already exist' });

    const encryptPassword = bcryptHelpers.encryptPassword(password);
    const newUser = new userModel({ username, password: encryptPassword });
    await newUser.save();
    return res.json({ msg: `${username} saved` });
  },
  signIn: async (req, res) => {
    const { username, password } = req.body;
    const userFound = await userModel.findOne({ username });
    if (!userFound) return res.status(403).json({ msg: 'User not exist' });
    const { password: encryptedPassword } = userFound;
    const passwordIsCorrect = bcryptHelpers.comparePassword(
      password,
      encryptedPassword
    );
    const userToToken = { _id: userFound._id, username: userFound.username };
    if (!passwordIsCorrect)
      return res.status(403).json({ msg: 'Incorrect password' });
    const token = jwt.sign(JSON.stringify(userToToken), jwtSecret);
    const userSign = new userSignModel({ username, action:"SignIn"});
    await userSign.save();
    res.send({ info: token });
  },
  signOut: async (req, res) => {
    console.log(req.body)
    const { username } = req.body;
    const userSign = new userSignModel({ username, action:"SignOut"});
    await userSign.save();
    
    return res.json({ msg: `${username} SignOut` });
  },
  getDataPengunjung: async (req, res) => {
    
    const dataPengunjung = await userModel.findOne({ username });
    
    res.send({ data: dataPengunjung });
  },
};
