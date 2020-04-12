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
}); // end POST route

router.get( '/', (req, res) => {
    const queryText = `Select * from "feedback" ORDER BY "date";`;
    pool.query( queryText )
        .then( (result) => {
            res.send( result.rows );
        })
        .catch( (error) => {
            console.log( 'Error GETTING from database', error );
            res.sendStatus( 500 );
        })
}); // end GET route

router.delete( '/:id', (req, res) => {
    const id = req.params.id;
    const queryText = `DELETE FROM "feedback" WHERE "id" = $1;`;
    pool.query( queryText, [ id ] )
        .then( (response) => {
            res.sendStatus( 200 );
        })
        .catch( (error) => {
            console.log( 'Error', error );
            res.sendStatus( 500 );
        })
}); // end DELETE route

router.put( '/flag/:id', (req, res) => {
    const id = req.params.id;
    console.log( `toggling ${ id }`);
    const queryText = `UPDATE "feedback" SET "flagged" = NOT "flagged" WHERE "id" = $1;`;

    pool.query( queryText, [ id ] )
        .then( (result) => {
            console.log( 'Successful PUT to database' );
            res.sendStatus( 201 );
        })
        .catch( (error) => {
            console.log( 'Error with PUT to database', error );
            res.sendStatus( 501 );
        })
}); // end PUT route

module.exports = router;