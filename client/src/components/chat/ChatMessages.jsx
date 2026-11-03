// import messages from "../../data/messages";
// import ChatInput from "./ChatInput";
import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";


function ChatMessages({ messages }) {
    const messagesEndRef = useRef(null);
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);
    return (
        <div className="flex-1 overflow-y-auto p-6 bg-gray-100">

            {messages?.map((message) => (
                <MessageBubble
                    key={message.id}
                    message={message}
                />
            ))}
            <div ref={messagesEndRef}></div>

        </div>
    );
}

export default ChatMessages;