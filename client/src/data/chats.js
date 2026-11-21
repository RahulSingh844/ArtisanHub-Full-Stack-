import me from "../assets/images/me.jpg";

const chats = [
    {
        id: 1,
        name: "Rahul Singh",
        profession: "Interior Designer",
        image: me,
        lastMessage: "Sure! I can do that.",
        messages: [
            {
                id: 1,
                sender: "customer",
                text: "Hi Rahul! I saw your interior design work.",
                time: "10:20 AM",
            },
            {
                id: 2,
                sender: "creator",
                text: "Thank you! How can I help you?",
                time: "10:21 AM",
            },
            {
                id: 3,
                sender: "customer",
                text: "I want to redesign my living room.",
                time: "10:22 AM",
            },
            {
                id: 4,
                sender: "creator",
                text: "Sure! Can you share some photos of the room?",
                time: "10:23 AM",
            },
            {
                id: 5,
                sender: "customer",
                text: "Yes, I'll send them in a minute.",
                time: "10:24 AM",
            },
            {
                id: 6,
                sender: "creator",
                text: "Perfect. I'll suggest the best design based on your space and budget.",
                time: "10:25 AM",
            }
        ],
        time: "10:25 AM",
        online: true,
        unread: 2,
    },
    {
        id: 2,
        name: "Amit Verma",
        profession: "Carpenter",
        image: "https://i.pravatar.cc/150?img=2",
        lastMessage: "I'll reach by 11 AM tomorrow.",
        messages: [
            { id: 1, sender: "customer", text: "Hi Amit, I need a custom wardrobe.", time: "9:10 AM" },
            { id: 2, sender: "creator", text: "Sure! What size do you need?", time: "9:11 AM" },
            { id: 3, sender: "customer", text: "Around 8 feet wide.", time: "9:12 AM" },
            { id: 4, sender: "creator", text: "No problem. I'll visit for measurements.", time: "9:13 AM" },
            { id: 5, sender: "customer", text: "Great, tomorrow morning?", time: "9:14 AM" },
            { id: 6, sender: "creator", text: "I'll reach by 11 AM tomorrow.", time: "9:15 AM" },
            { id: 7, sender: "customer", text: "Can you paint my bedroom?", time: "8:00 AM" },
            { id: 8, sender: "creator", text: "Of course!", time: "8:02 AM" },
            { id: 9, sender: "customer", text: "I also want a texture wall.", time: "8:03 AM" },
            { id: 10, sender: "creator", text: "Texture design will look amazing.", time: "8:05 AM" }
        ],
        time: "9:15 AM",
        online: true,
        unread: 1,
    },
    {
        id: 3,
        name: "Priya Sharma",
        profession: "Wall Painter",
        image: "https://i.pravatar.cc/150?img=3",
        lastMessage: "Texture design will look amazing.",
        messages: [
            { id: 1, sender: "customer", text: "Can you paint my bedroom?", time: "8:00 AM" },
            { id: 2, sender: "creator", text: "Of course!", time: "8:02 AM" },
            { id: 3, sender: "customer", text: "I also want a texture wall.", time: "8:03 AM" },
            { id: 4, sender: "creator", text: "Texture design will look amazing.", time: "8:05 AM" }
        ],
        time: "8:05 AM",
        online: false,
        unread: 0,
    },
    {
        id: 4,
        name: "Sandeep Kumar",
        profession: "Electrician",
        image: "https://i.pravatar.cc/150?img=4",
        lastMessage: "The wiring will be completed today.",
        messages: [
            { id: 1, sender: "customer", text: "My switchboard isn't working.", time: "11:10 AM" },
            { id: 2, sender: "creator", text: "I'll inspect it today.", time: "11:12 AM" },
            { id: 3, sender: "customer", text: "Please come after 4 PM.", time: "11:13 AM" },
            { id: 4, sender: "creator", text: "The wiring will be completed today.", time: "11:14 AM" }
        ],
        time: "11:14 AM",
        online: true,
        unread: 3,
    },
    {
        id: 5,
        name: "Neha Gupta",
        profession: "Tailor",
        image: "https://i.pravatar.cc/150?img=5",
        lastMessage: "Your dress is almost ready.",
        messages: [
            { id: 1, sender: "customer", text: "Can you stitch a party gown?", time: "1:00 PM" },
            { id: 2, sender: "creator", text: "Yes, please share the design.", time: "1:02 PM" },
            { id: 3, sender: "customer", text: "Sending now.", time: "1:03 PM" },
            { id: 4, sender: "creator", text: "Your dress is almost ready.", time: "1:04 PM" }
        ],
        time: "1:04 PM",
        online: false,
        unread: 0,
    },
    {
        id: 6,
        name: "Arjun Mehta",
        profession: "Plumber",
        image: "https://i.pravatar.cc/150?img=6",
        lastMessage: "I'll fix the leakage today.",
        messages: [
            { id: 1, sender: "customer", text: "There's a leak in my kitchen.", time: "7:20 AM" },
            { id: 2, sender: "creator", text: "I'll be there in an hour.", time: "7:22 AM" },
            { id: 3, sender: "customer", text: "Thank you.", time: "7:23 AM" },
            { id: 4, sender: "creator", text: "I'll fix the leakage today.", time: "7:24 AM" }
        ],
        time: "7:24 AM",
        online: true,
        unread: 2,
    },
    {
        id: 7,
        name: "Anjali Kapoor",
        profession: "House Cleaner",
        image: "https://i.pravatar.cc/150?img=7",
        lastMessage: "Cleaning is completed.",
        messages: [
            { id: 1, sender: "customer", text: "Can you clean my apartment?", time: "3:10 PM" },
            { id: 2, sender: "creator", text: "Sure, what time?", time: "3:11 PM" },
            { id: 3, sender: "customer", text: "Tomorrow at 9 AM.", time: "3:12 PM" },
            { id: 4, sender: "creator", text: "Cleaning is completed.", time: "3:13 PM" }
        ],
        time: "3:13 PM",
        online: false,
        unread: 0,
    },
    {
        id: 8,
        name: "Vikram Joshi",
        profession: "Furniture Designer",
        image: "https://i.pravatar.cc/150?img=8",
        lastMessage: "I'll share the 3D model soon.",
        messages: [
            { id: 1, sender: "customer", text: "I need a modern TV unit.", time: "5:30 PM" },
            { id: 2, sender: "creator", text: "Any preferred colour?", time: "5:31 PM" },
            { id: 3, sender: "customer", text: "Walnut finish.", time: "5:32 PM" },
            { id: 4, sender: "creator", text: "I'll share the 3D model soon.", time: "5:33 PM" }
        ],
        time: "5:33 PM",
        online: true,
        unread: 1,
    },
    {
        id: 9,
        name: "Karan Malhotra",
        profession: "POP Designer",
        image: "https://i.pravatar.cc/150?img=9",
        lastMessage: "The ceiling design is ready.",
        messages: [
            { id: 1, sender: "customer", text: "Can you make a false ceiling?", time: "2:10 PM" },
            { id: 2, sender: "creator", text: "Yes, absolutely.", time: "2:11 PM" },
            { id: 3, sender: "customer", text: "I want LED lighting too.", time: "2:12 PM" },
            { id: 4, sender: "creator", text: "The ceiling design is ready.", time: "2:13 PM" }
        ],
        time: "2:13 PM",
        online: false,
        unread: 0,
    },
    {
        id: 10,
        name: "Rohit Yadav",
        profession: "Mason",
        image: "https://i.pravatar.cc/150?img=10",
        lastMessage: "Work will start on Monday.",
        messages: [
            { id: 1, sender: "customer", text: "I need a boundary wall.", time: "12:30 PM" },
            { id: 2, sender: "creator", text: "What's the total length?", time: "12:31 PM" },
            { id: 3, sender: "customer", text: "About 40 feet.", time: "12:32 PM" },
            { id: 4, sender: "creator", text: "Work will start on Monday.", time: "12:33 PM" }
        ],
        time: "12:33 PM",
        online: true,
        unread: 4,
    },
    {
        id: 11,
        name: "Sneha Arora",
        profession: "Landscape Designer",
        image: "https://i.pravatar.cc/150?img=11",
        lastMessage: "I'll prepare the garden layout.",
        messages: [
            { id: 1, sender: "customer", text: "I want to redesign my garden.", time: "6:40 PM" },
            { id: 2, sender: "creator", text: "Sure! What's the area size?", time: "6:41 PM" },
            { id: 3, sender: "customer", text: "Around 1000 sq ft.", time: "6:42 PM" },
            { id: 4, sender: "creator", text: "I'll prepare the garden layout.", time: "6:43 PM" }
        ],
        time: "6:43 PM",
        online: true,
        unread: 0,
    },
];

export default chats;