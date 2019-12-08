import express from "express";
import {authenticateUser} from "../middlewares/auth";
import bcrypt from 'bcryptjs';
import {userFilter} from "../filters/user";
import jwt from 'jsonwebtoken';

export const router = express.Router();
export const prefix = '/account';

const saltRounds = 10;

const {accountStore} = require('../data/DataStore');


/**
 * This route requires a valid JWT token.
 * This means that if you hit this route with a valid JWT then
 * you will be given the user data. If not, then you know you
 * know you are not logged in.
 */
router.get('/status', authenticateUser, function (req, res) {
  res.send(
    {
      user: {
        name: req.user.name,
        ...userFilter(accountStore.get(`users.${req.user.name}`))
      }
    }
  );
});

/**
 * Given a name and pass, validates a user
 * and returns a JWT.
 */
router.post('/login', async function (req, res) {
  if (!req.body.name || !req.body.pass) {
    res.status(401).send({msg: 'Expected a payload of name and pass.'});
    return;
  }

  const name = req.body.name.toLowerCase();
  const pass = req.body.pass;

  let user = accountStore.get(`users.${name}`);
  if (!user) {
    res.status(401).send({msg: `User '${req.body.name}' is not a registered user.`});
    return;
  }
  const result = await checkUser(name, pass);
  if (!result) {
    res.status(401).send({msg: 'Bad username or password.'});
    return;
  }
  let userData = accountStore.get(`users.${name}.data`);
  const token = jwt.sign({
    name,
    data: userData
  }, process.env.SECRET_KEY, {expiresIn: '30d'});

  res.send({jwt: token, data: userData, name});
});

/**
 * Given a name and pass, will create a user
 * if one with that name doesn't exist in the
 * database.
 */
router.post('/create', function (req, res) {
  if (!req.body.name || !req.body.pass || !req.body.bday ) {
    res.status(401).send({msg: 'Expected a payload of name and pass and DOB.'});
    return;
  }

  const name = req.body.name.toLowerCase();
  const pass = req.body.pass;
  const dob = req.body.bday;
  // const sex = req.body.gender;
  // const pref = req.body.preference;
  // const firstname = req.body.name.toLowerCase().split(" ", 1).join("");

  // let today = new Date();
  // let birthDate= new Date(dob);
  // let age = today.getFullYear() - birthDate.getFullYear();
  // let m = today.getMonth() - birthDate.getMonth();
  // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //     age--;
  // }
  // //console.log(birthDate.getDate());
  // let sign = zodiac(birthDate.getDate()+1,  birthDate.getMonth()+1);  
  let user = accountStore.get(`users.${name}`);

  if (user) {
    res.status(401).send({msg: `User '${req.body.name}' is already a registered user.`});
    return;
  }

  bcrypt.hash(pass, saltRounds, (err, hash) => {
    accountStore.set(`users.${name}`, { 
      passwordHash: hash,
      dob: dob,
      data: req.body.data, 
    });
    res.send({data: userFilter(accountStore.get(`users.${name}`)), status: 'Successfully made account'});
  });
  //accountStore.set(`users.${name}`, {birthday: dob, data:req.body.bday});
});


async function checkUser(username, password) {
  const user = accountStore.get(`users.${username}`);
  return await bcrypt.compare(password, user.passwordHash);
}

function zodiac(day, month){
  // returns the zodiac sign according to day and month ( https://coursesweb.net/ )
  let zodiac =['', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
  let last_day =['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
  return (day > last_day[month]) ? zodiac[month + 1] : zodiac[month];
 }