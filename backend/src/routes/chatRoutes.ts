import { Router } from 'express';
import { ChatController } from '../controllers/chatController';

const router = Router();
const chatController = new ChatController();

export const setChatRoutes = (app) => {
    app.use('/api/chat', router);

    router.post('/send', chatController.sendMessage.bind(chatController));
    router.get('/messages', chatController.getMessages.bind(chatController));
};