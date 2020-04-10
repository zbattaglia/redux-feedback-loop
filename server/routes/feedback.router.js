const express = require( 'express' );
const router = express.Router();
const pool = require( '../modules/pool' );

router.post( '/', (req, res) => {
    console.log( 'got a POST on server', req.body );
    const queryText = `INSERT INTO "feedback" ( "feeling", "understanding", "support", "comments" )
                    VALUES ( $1, $2, $3, $4 );`;
    pool.query( queryText, [ req.body[0].response,  req.body[1].response, req.body[2].response, req.body[3].response ] )
        .then( (response) => {
            res.sendStatus( 201 );
        })
        .catch( (error) => {
            console.log( 'Error adding feedback to database', error );
            res.sendStatus( 500 );
        })
})

module.exports = router;