import express from 'express';
import Message from '../models/message';

const router = express.Router();

// Get all messages
router.get('/messages', async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

// Post a new message
router.post('/messages', async (req, res) => {
  const { sender, content } = req.body;
  const message = new Message({ sender, content });
  await message.save();
  res.status(201).json(message);
});

export default router;