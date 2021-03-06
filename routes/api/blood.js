const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load Input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load User model
const Blood = require('../../models/Blood');
const Details = require('../../models/Details');



// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
// router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

router.get('/test', (req, res) => res.json({ msg: 'blood Works' }));


router.get('/', (req, res) =>{
    Blood.find({}).then(
        blood=>{
          res.status(200).json(blood);
        }
    )
    
    });

    router.get('/details', (req, res) =>{
        Details.find({}).then(
            blood=>{
              res.status(200).json(blood);
            }
        )
        });

        router.post('/details', (req, res) =>{
            const newBlood = new Details({
                email:req.body.email
             }).save()
               .then(blood => res.json(blood))
               .catch(err => console.log(err));
        });
    
   
// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
//   const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   User.findOne({ email: req.body.email }).then(user => {
//     if (user) {
//       errors.email = 'Email already exists';
//       return res.status(400).json(errors);
//     } else {
//       const avatar = gravatar.url(req.body.email, {
//         s: '200', // Size
//         r: 'pg', // Rating
//         d: 'mm' // Default
//       });

      const newBlood = new Blood({
         bloodgroup: req.body.bloodgroup,
         humidity: req.body.humidity,
         temperature: req.body.temperature,
         user: req.body.user,
         isfaulty: req.body.isfaulty
      }).save()
        .then(blood => res.json(blood))
        .catch(err => console.log(err));
      // bcrypt.genSalt(10, (err, salt) => {
      //   bcrypt.hash(newUser.password, salt, (err, hash) => {
      //     if (err) throw err;
      //     newUser.password = hash;
      //     newUser
      //       .save()
      //       .then(user => res.json(user))
      //       .catch(err => console.log(err));
      //   });
      // });
    // }
//   });
});





router.get("/:blood_id",function(req,res){
    Blood.findById(req.params.blood_id,function(err,blood){
        if(err){
            console.log(err);
           return res.status(404).json(err);
        } else {
           res.json(blood);
       }
    });
});

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name, avatar: user.avatar }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        errors.password = 'Password incorrect';
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
