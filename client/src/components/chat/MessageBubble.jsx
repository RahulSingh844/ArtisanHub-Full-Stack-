function MessageBubble({message
}) {
  const isCreator = message.sender === "creator";

  return (
    <div
      className={`flex ${
        isCreator ? "justify-start" : "justify-end"
      } mb-4`}
    >
      <div
        className={`max-w-[70%] px-4 py-3 rounded-2xl shadow
        ${
          isCreator
            ? "bg-white text-gray-800 rounded-bl-sm"
            : "bg-blue-600 text-white rounded-br-sm"
            
        }`}
      >
        <p>{message.text}</p>

        <p
          className={`text-xs mt-2 text-right ${
            isCreator
              ? "text-gray-400"
              : "text-blue-100"
              
          }`}
        >
          {message.time}
        </p>
      </div>
    </div>
  );
}

export default MessageBubble;
