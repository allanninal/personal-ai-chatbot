import React, { useState, memo } from "react";
import axios from "axios";

// Define styles for the components to improve readability and maintainability
const styles = {
    container: { padding: "20px", maxWidth: "600px", margin: "0 auto" },
    chatBox: { border: "1px solid #ccc", padding: "10px", marginBottom: "20px", height: "400px", overflowY: "scroll" },
    inputContainer: { display: "flex", gap: "10px" },
    inputField: { flex: 1, padding: "10px" },
    sendButton: { padding: "10px" }
};

// MessageList component is memoized to prevent unnecessary re-renders
// It takes chatMessages as a prop and displays each message
const MessageList = memo(({ chatMessages }) => (
    <div style={styles.chatBox}>
        {chatMessages.map((message, index) => (
            <div key={index} style={{ textAlign: message.sender === "user" ? "right" : "left" }}>
                <strong>{message.sender === "user" ? "You" : "Bot"}: </strong>
                <span>{message.text}</span>
            </div>
        ))}
    </div>
));

/**
 * App component serves as the main component for the chat application.
 * It manages the state of chat messages and user input, and handles sending messages.
 */
function App() {
    // State to store chat messages
    const [chatMessages, setChatMessages] = useState([]);
    // State to store the current user input
    const [userInput, setUserInput] = useState("");

    /**
     * handleSendMessage is an asynchronous function that sends the user's message to the server
     * and updates the chat messages with the response from the server.
     */
    const handleSendMessage = async () => {
        // Prevent sending empty messages
        if (!userInput.trim()) return;

        // Create a user message object and update the chat messages state
        const userMessage = { sender: "user", text: userInput };
        setChatMessages((previousMessages) => [...previousMessages, userMessage]);
        // Clear the input field
        setUserInput("");

        try {
            // Send the user message to the server and await the response
            const response = await axios.post("http://127.0.0.1:5000/chat", { message: userInput });
            // Create a bot message object from the server response and update the chat messages state
            const botMessage = { sender: "bot", text: response.data.response };
            setChatMessages((previousMessages) => [...previousMessages, botMessage]);
        } catch (error) {
            // Log the error and update the chat messages with an error message
            console.error("Error sending message:", error);
            setChatMessages((previousMessages) => [...previousMessages, { sender: "bot", text: "Error: Unable to connect to the server." }]);
        }
    };

    return (
        <div style={styles.container}>
            <h1>Personal AI Chatbot</h1>
            {/* Render the MessageList component with the current chat messages */}
            <MessageList chatMessages={chatMessages} />
            <div style={styles.inputContainer}>
                {/* Input field for user to type their message */}
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type a message..."
                    style={styles.inputField}
                />
                {/* Button to send the message */}
                <button onClick={handleSendMessage} style={styles.sendButton}>
                    Send
                </button>
            </div>
        </div>
    );
}

export default App;
