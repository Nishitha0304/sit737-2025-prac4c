// ✅ Step 1: Import required modules
const express = require('express'); // Import Express framework
const winston = require('winston'); // Import Winston for logging

// ✅ Step 2: Initialize the app and set the port
const app = express();
const port = 3000; // You can change the port if needed

// ✅ Step 3: Setup Winston logger for logging API requests and errors
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculator-microservice' },
    transports: [
        new winston.transports.Console({ format: winston.format.simple() }),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
});

// ✅ Step 4: Define API Endpoints with proper validation and logging

// Addition Route
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    logger.info(`Addition requested: ${num1} + ${num2}`);
    if (isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid numbers for addition');
        return res.status(400).send('Invalid numbers');
    }
    res.send(`Result: ${Number(num1) + Number(num2)}`);
});

// Subtraction Route
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    logger.info(`Subtraction requested: ${num1} - ${num2}`);
    if (isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid numbers for subtraction');
        return res.status(400).send('Invalid numbers');
    }
    res.send(`Result: ${Number(num1) - Number(num2)}`);
});

// Multiplication Route
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    logger.info(`Multiplication requested: ${num1} * ${num2}`);
    if (isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid numbers for multiplication');
        return res.status(400).send('Invalid numbers');
    }
    res.send(`Result: ${Number(num1) * Number(num2)}`);
});

// Division Route with division by zero check
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    logger.info(`Division requested: ${num1} / ${num2}`);
    if (isNaN(num1) || isNaN(num2) || Number(num2) === 0) {
        logger.error('Invalid numbers or division by zero');
        return res.status(400).send('Invalid input or division by zero');
    }
    res.send(`Result: ${Number(num1) / Number(num2)}`);
});

// ✅ Step 5: Start the server and listen on the specified port
app.listen(port, () => {
    logger.info(`Calculator microservice running at http://localhost:${port}`);
    console.log(`Calculator microservice running at http://localhost:${port}`);
});

// Power Route
app.get('/power', (req, res) => {
    const { base, exponent } = req.query;
    logger.info(`Power requested: ${base} ^ ${exponent}`);
    if (isNaN(base) || isNaN(exponent)) {
        logger.error('Invalid numbers for power');
        return res.status(400).send('Invalid numbers');
    }
    res.send(`Result: ${Math.pow(Number(base), Number(exponent))}`);
});

// Square Root Route
app.get('/sqrt', (req, res) => {
    const { num } = req.query;
    logger.info(`Square root requested: √${num}`);
    if (isNaN(num) || Number(num) < 0) {
        logger.error('Invalid number for square root');
        return res.status(400).send('Invalid number for square root');
    }
    res.send(`Result: ${Math.sqrt(Number(num))}`);
});

// Modulo Route
app.get('/modulo', (req, res) => {
    const { num1, num2 } = req.query;
    logger.info(`Modulo requested: ${num1} % ${num2}`);
    if (isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid numbers for modulo');
        return res.status(400).send('Invalid numbers');
    }
    res.send(`Result: ${Number(num1) % Number(num2)}`);
});
