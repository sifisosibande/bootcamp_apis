import express from 'express';
import cors from 'cors';
import { longestWord, shortestWord, wordLength } from './bootcamp/wordGame.js';
import totalPhoneBill from './bootcamp/totalPhoneBill.js';
import enoughAirtime from './bootcamp/enoughAirtime.js';

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

// Word Game
app.get('/api/word_game', function (req, res) {
    const sentence = req.query.sentence;
    if (!sentence) {
        return res.status(404).json({ message: "Please provide a sentence." });
    }
    res.json({
        longestWord: longestWord(sentence),
        shortestWord: shortestWord(sentence),
        wordSum: wordLength(sentence)
    });
});

// Total Phone Bill
app.post('/api/phonebill/total', (req, res) => {
    const bill = req.body.bill;
    if (!bill) {
        return res.status(400).json({ message: "Please provide the phone bill details." });
    }
    res.json({
        totalAmount: totalPhoneBill(bill)
    });
});

// Get Prices for an SMS and a Call
app.get('/api/phonebill/prices', (req, res) => {
    res.json({
        callPrice: 2.75,
        smsPrice: 0.65
    });
});

// Change the Price of an SMS or Call
app.post('/api/phonebill/price', (req, res) => {
    const newPrice = parseFloat(req.body.newPrice).toFixed(2);
    const type = req.body.type.toLowerCase();

    if (type !== 'sms' && type !== 'call') {
        return res.status(400).json({ message: "'type' must be either 'sms' or 'call'" });
    }

    res.json({
        status: 'success',
        message: `The price of a ${type} has been updated to R${newPrice}`,
    });
});

// Check if There is Enough Airtime Available
app.post('/api/Enough', (req, res) => {
    const usage = req.body.usage;
    const available = req.body.available;
    const isEnough = enoughAirtime(usage, available);

    res.json({
        result: isEnough ? "There is enough airtime available." : "Insufficient airtime for the requested usage."
    });
});

const PORT = process.env.PORT || 3011;

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});
