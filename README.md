
# Personal AI Chatbot

This project is a Personal AI Chatbot that allows users to interact with an AI in real time. Powered by Hugging Face’s **DialoGPT-medium** model, Flask backend, and a ReactJS frontend (built with Vite), this chatbot is responsive, scalable, and perfect for exploring conversational AI.

---

## Features

- **Real-Time Conversations**: Responds to user inputs instantly using DialoGPT.
- **Clean User Interface**: Built with ReactJS for a modern and responsive chat experience.
- **Scalable Backend**: Flask handles API requests and processes AI responses.

---

## Tech Stack

### **Frontend**
- ReactJS with Vite for fast development and HMR.
- Axios for API communication.

### **Backend**
- Flask for serving the API.
- Hugging Face’s Transformers library for AI model inference.

### **AI Model**
- DialoGPT-medium from Hugging Face for conversational AI.

---

## Installation and Setup

### Clone the Repository
Start by cloning the repository from GitHub:
```bash
git clone https://github.com/allanninal/personal-ai-chatbot.git
cd personal-ai-chatbot
```

### Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate     # Windows
   ```

3. Install the dependencies from `requirements.txt`:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the Flask server:
   ```bash
   python app.py
   ```

### Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the React development server:
   ```bash
   npm run dev
   ```

---

## Usage

1. **Start Chatting**: Open the app in your browser at `http://localhost:5173`.
2. **Real-Time Responses**: Type a message in the chat input, and the chatbot will respond instantly.
3. **Explore Conversations**: Continue chatting with the AI to explore its capabilities.

---

## How It Works

1. **Frontend (ReactJS)**: Provides a clean interface for user interaction.
2. **Backend (Flask)**: Processes user inputs and generates AI responses using Hugging Face’s DialoGPT-medium model.
3. **AI Model (DialoGPT-medium)**: Converts user inputs into context-aware, human-like responses.

---

## What’s Next?

1. **Conversation History**: Add persistent storage to maintain and display chat history.
2. **Fine-Tuning the Model**: Train the chatbot with custom datasets for specific use cases.
3. **Voice Interaction**: Incorporate speech-to-text and text-to-speech functionality for a voice-driven chatbot experience.
4. **Advanced UI Styling**: Enhance the frontend using CSS frameworks like Tailwind CSS or Material-UI.
5. **Deployment**: Host the chatbot on platforms like AWS, Heroku, or Vercel.
6. **Alternative Models**: Explore other conversational AI models:
   - **OpenAI’s GPT-3.5** for advanced and nuanced responses.
   - **BlenderBot** for long-form conversations.
   - **T5 (Text-to-Text Transfer Transformer)** for versatile NLP tasks.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Support

If you find this project helpful, consider supporting me on Ko-fi:  
[ko-fi.com/allanninal](https://ko-fi.com/allanninal)
