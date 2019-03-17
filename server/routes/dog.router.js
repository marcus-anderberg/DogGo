const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const moment = require('moment');
const momentDuration = require("moment-duration-format")
momentDuration(moment);
/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText = 'SELECT "walk_date", "time_elapsed", "ones", "twos", "username" FROM "dogs" JOIN "user" ON "dogs"."user_ref_id" = "user"."id"'
    pool.query(queryText) 
    .then((result) => {
     for (let i = 0; i < result.rows.length; i++) {
         let time_elapsed = moment.duration(parseInt(result.rows[i].time_elapsed), 'seconds').format('hh:mm:ss')

         result.rows[i] = { ...result.rows[i], walk_date: moment(result.rows[i].walk_date).format("MM-DD-YYYY"), time_elapsed: time_elapsed}
       
     }
     res.send(result.rows) 
     console.log(result.rows)

    })
    .catch((error) => {
        console.log('Error completing GET query', error);
        res.sendStatus(500);
    }); 
});





router.post('/', (req, res) => {
    console.log(req.user);
    
    const newWalk = req.body;
    const queryText = `INSERT INTO "dogs" ("time_elapsed", "ones", "twos", "user_ref_id")
                    VALUES ($1, $2, $3, $4)`;
    const queryValues = [
        newWalk.secondsElapsed,
        newWalk.countOne,
        newWalk.countTwo,
        req.user.id,

    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((error) => {
            console.log('Error completing POST query', error);
            res.sendStatus(500);
        });
});

module.exports = router;