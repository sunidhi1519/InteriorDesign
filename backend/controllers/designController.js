// File: controllers/designController.js

const db = require('../database/database.js'); // Make sure the path matches your project structure

exports.getSpacesAndKeywords = (req, res) => {
    // SQL query to fetch distinct spaces
    const spacesQuery = 'SELECT DISTINCT space FROM design;';
    // SQL query to fetch distinct keywords from both keyword1 and keyword2 columns
    const keywordsQuery = `
        SELECT DISTINCT keyword1 AS keyword FROM design
        WHERE keyword1 IS NOT NULL AND keyword1 != ''
        UNION
        SELECT DISTINCT keyword2 FROM design
        WHERE keyword2 IS NOT NULL AND keyword2 != '';
    `;

    // Execute spaces query
    db.query(spacesQuery, (err, spacesResults) => {
        if (err) {
            console.error("Error fetching spaces: ", err);
            return res.status(500).json({ message: "Error fetching spaces" });
        }

        // Execute keywords query
        db.query(keywordsQuery, (err, keywordsResults) => {
            if (err) {
                console.error("Error fetching keywords: ", err);
                return res.status(500).json({ message: "Error fetching keywords" });
            }

            // Extract only the space and keyword values
            const spaces = spacesResults.map(row => row.space);
            const keywords = keywordsResults.map(row => row.keyword);

            // Send both spaces and keywords as a response
            res.json({ spaces, keywords });
        });
    });
};


exports.getPriceRanges = (req, res) => {
    // SQL query to fetch the minimum and maximum price
    const priceRangeQuery = 'SELECT MIN(price) AS minPrice, MAX(price) AS maxPrice FROM design;';

    db.query(priceRangeQuery, (err, results) => {
        if (err) {
            console.error("Error fetching price range: ", err);
            return res.status(500).json({ message: "Error fetching price range" });
        }

        const { minPrice, maxPrice } = results[0];

        // Example: divide the entire range into 4 segments
        const segmentCount = 4;
        let priceRanges = [];
        const segmentSize = Math.ceil((maxPrice - minPrice) / segmentCount);

        for (let i = 0; i < segmentCount; i++) {
            let start = minPrice + (i * segmentSize);
            let end = start + segmentSize;
            // Ensure that the last segment ends with the maxPrice
            if (i === segmentCount - 1) {
                end = maxPrice;
            }
            priceRanges.push(`${start}-${end}`);
        }

        // Send the calculated price ranges as a response
        res.json({ priceRanges });
    });
};


exports.getFilteredDesigns = (req, res) => {
    const { space, keyword, priceRange } = req.query;
    let conditions = [];
    let queryParams = [];

    if (space) {
        conditions.push("space = ?");
        queryParams.push(space);
    }

    if (keyword) {
        conditions.push("(keyword1 LIKE ? OR keyword2 LIKE ?)");
        queryParams.push(`%${keyword}%`, `%${keyword}%`);
    }

    if (priceRange) {
        const [minPrice, maxPrice] = priceRange.split('-').map(Number);
        conditions.push("price BETWEEN ? AND ?");
        queryParams.push(minPrice, maxPrice);
    }

    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
    const sqlQuery = `SELECT DISTINCT designID FROM design ${whereClause};`;

    db.query(sqlQuery, queryParams, (err, results) => {
        if (err) {
            console.error("Error fetching filtered designs: ", err);
            return res.status(500).json({ message: "Error fetching filtered designs" });
        }

        // Extract only the design IDs
        const designIds = results.map(row => row.designID);
        console.log("Executing SQL query:", sqlQuery);
        console.log("With parameters:", queryParams);


        // Log the design IDs
        console.log("Design IDs:", designIds);

        // Send the design IDs as a response
        res.json({ designIds });
    });
};
