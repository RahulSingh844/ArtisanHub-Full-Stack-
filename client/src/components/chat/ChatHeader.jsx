import chats from "../../data/chats";

function ChatHeader({selectedChat}) {

//   const chat = chats[0];

  return (
    <div className="h-20 border-b bg-white flex items-center justify-between px-6">

      {/* Left Side */}

      <div className="flex items-center gap-4">

        <div className="relative">

          <img
            src={selectedChat.image}
            alt={selectedChat.name}
            className="w-14 h-14 rounded-full object-cover"
          />

          {selectedChat.online && (
            <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
          )}

        </div>

        <div>

          <h2 className="font-bold text-lg">
            {selectedChat.name}
          </h2>

          <p className="text-sm text-gray-500">
            {selectedChat.profession}
          </p>

        </div>

      </div>

      {/* Right Side */}

      <button
        className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        View Profile
      </button>

    </div>
  );
}

export default ChatHeader;