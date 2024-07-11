import axios from "axios";

const TELEGRAM_API_URL = "https://api.telegram.org";
const BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_BOT_CHAT_ID;

const sendMessageToTelegram = async (message) => {
  const url = `${TELEGRAM_API_URL}/bot${BOT_TOKEN}/sendMessage`;

  try {
    const response = await axios.post(url, {
      chat_id: CHAT_ID,
      text: message,
    });
    return response.data;
  } catch (error) {
    console.error("Error sending message to Telegram", error);
    throw error;
  }
};

export default sendMessageToTelegram;
