import { useState } from "react";

function ChatSidebar({
    chats,
    selectedChat,
    setSelectedChatId,
}) {

    const [search, setSearch] = useState("");

    const filteredChats = chats.filter((chat) =>
        chat.name.toLowerCase().includes(search.toLowerCase())
    
    );
    console.log("Search:", search);
    console.log("Filtered:", filteredChats);

    return (
        <div className="w-[350px] border-r bg-white">

            {/* Search */}

            <div className="p-4 border-b">

                <input
                    type="text"
                    placeholder="Search creators..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

            </div>

            {/* Chat List */}

            <div className="overflow-y-auto h-[calc(100vh-170px)]">

                {filteredChats.map((chat) => (

                    <div
                        key={chat.id}
                        onClick={() => setSelectedChatId(chat.id)}
                        className={`flex items-center gap-4 p-4 cursor-pointer transition
                        ${
                            selectedChat.id === chat.id
                                ? "bg-blue-100"
                                : "hover:bg-gray-100"
                        }`}
                    >

                        {/* Profile */}

                        <div className="relative">

                            <img
                                src={chat.image}
                                alt={chat.name}
                                className="w-14 h-14 rounded-full object-cover"
                            />

                            {chat.online && (
                                <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                            )}

                        </div>

                        {/* Name */}

                        <div className="flex-1">

                            <h3 className="font-semibold">
                                {chat.name}
                            </h3>

                            <p className="text-sm text-gray-500 truncate">
                                {chat.lastMessage}
                            </p>

                        </div>

                        {/* Time + Badge */}

                        <div className="flex flex-col items-end">

                            <span className="text-xs text-gray-400">
                                {chat.time}
                            </span>

                            {chat.unread > 0 && (
                                <span className="mt-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                    {chat.unread}
                                </span>
                            )}

                        </div>

                    </div>

                ))}

                {filteredChats.length === 0 && (
                    <p className="text-center text-gray-500 mt-6">
                        No creators found.
                    </p>
                )}

            </div>

        </div>
    );
}

export default ChatSidebar;