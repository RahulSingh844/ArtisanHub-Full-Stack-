import { useState, useRef } from "react";

function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  const handleSend = () => {
    if (message.trim() === "") return;

    console.log(message);
    onSendMessage(message);

    setMessage("");
    inputRef.current.focus();
  };
  const handleKeyDown = (e) => {

    if (e.key === "Enter") {
      handleSend();
    }

  };

  return (
    <div className="border-t bg-white p-4 flex items-center gap-3">

      <input
        ref={inputRef}
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 border rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleSend}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition"
      >
        Send
      </button>

    </div>
  );
}

export default ChatInput;