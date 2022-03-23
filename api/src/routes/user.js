const router = require('express').Router();
const { signIn, signUp, signOut,getDataPengunjung } = require('../controllers/user');
const validateSchema = require('../middlewares/validateSchema');
const schema = require('../schemas/user');

router.post('/signIn', validateSchema(schema), signIn);
router.post('/signUp', validateSchema(schema), signUp);
router.post('/signOut', signOut);
router.get('/getDataPengunjung', validateSchema(schema), getDataPengunjung);


module.exports = router;
