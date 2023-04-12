function handler(req, res) {
    const eventId = req.query.eventId;

    if (req.method === 'POST') {
        const { email, name, text } = req.body;

        const newComment = {
            id: new Date().toISOString(),
            eventId,
            email,
            name,
            text,
        };

        res.status(201).json({ message: 'success', comment: newComment });
    } else if (req.method === 'GET') {
        const DUMMY_DATA = [
            {
                id: 'c1',
                name: 'Max',
                email: 'test@test.com',
                comment: 'First comment.',
            },
            {
                id: 'c2',
                name: 'Crist',
                email: 'test2@test.com',
                comment: 'Second comment.',
            },
        ];

        res.status(200).json({ message: 'Fetched comments', comments: DUMMY_DATA });
    }
}

export default handler;