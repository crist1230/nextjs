import fs from 'fs';
import path from 'path';

function buildFilePath() {
    return path.join(process.cwd(), 'data', 'feedback.json');
}

function getFileData(filePath) {
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    return data;
}

function handler(req, res) {
    if (req.method === 'POST') {
        const email = req.body.email;
        const feedbackText = req.body.text;

        const newFeedback = {
            id: new Date().toISOString(),
            email,
            text: feedbackText,
        };

        const filePath = buildFilePath();
        const data = getFileData(filePath);
        data.push(newFeedback);
        fs.writeFileSync(filePath, JSON.stringify(data));

        res.status(201).json({ message: 'It works!', feedback: newFeedback });
    } else if (req.method === 'GET') {
        const filePath = buildFilePath();
        const data = getFileData(filePath);
        res.status(200).json({ message: 'success', feedback: data });
    }
}

export default handler;