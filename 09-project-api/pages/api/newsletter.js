import { MongoClient } from 'mongodb';

function handler(req, res) {
    if (req.method === 'POST') {
        const email = req.body.email;

        if (!email || !email.includes('@')) {
            res.status(422).json({ message: 'Not a valid email.' });
            return;
        }

        

        res.status(201).json({ message: 'Signed up successfully.', email });
    }
}

export default handler;