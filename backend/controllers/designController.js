const db = require('../database/database');

exports.getDesigns = (req, res) => {
    const sqlQuery = "SELECT * FROM design";
    db.query(sqlQuery, (err, results) => {
        if (err) {
            return res.status(500).send('Error fetching designs from the database');
        }
        res.json(results);
    });
};
