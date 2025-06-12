class ChatController {
    constructor(private messageModel: any) {}

    async sendMessage(req: any, res: any) {
        const { sender, content } = req.body;
        const timestamp = new Date();

        try {
            const message = await this.messageModel.create({ sender, content, timestamp });
            res.status(201).json(message);
        } catch (error) {
            res.status(500).json({ error: 'Failed to send message' });
        }
    }

    async getMessages(req: any, res: any) {
        try {
            const messages = await this.messageModel.find().sort({ timestamp: 1 });
            res.status(200).json(messages);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve messages' });
        }
    }
}

export default ChatController;