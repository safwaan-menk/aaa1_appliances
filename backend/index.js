const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/parts', async (req, res) => {
    try {
	const result = await pool.query('SELECT * FROM parts');
	res.json(result.rows);
    } catch(err) {
	console.error(err);
	res.status(500).send('error getting part');
    }
});

app.post('/api/parts', async (req, res) => {
    const { name, description, price, stock } = req.body;
    try {
	const result = await pool.query('INSERT INTO parts (name, description, price, stock) VALUES ($1, $2, $3, $4) RETURNING *',
					[name, description, price, stock]
				       );
	res.status(201).json(result.rows[0]);
    } catch(err) {
	console.error(err);
	res.status(500).send('error uploading part');
    }
});


const PORT = process.env.port || 4000;
app.listen(PORT, () => console.log(`Server running on https://localhost:${PORT}`));
