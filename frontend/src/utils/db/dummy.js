export const POSTS = [
  {
    _id: "1",
    text: "Utha le re baba utha le, muj amir ko nahi in do garib ko utha le",
    img: "/posts/post1.png",
    user: {
      username: "baburao",
      profileImg: "/avatars/boy1.png",
      fullName: "Baburao Ganpatrao Apte",
    },
    comments: [
      {
        _id: "1",
        text: "😂",
        user: {
          username: "Anuradha",
          profileImg: "/avatars/girl1.png",
          fullName: "Anuradha Singh",
        },
      },
    ],
    likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
  },
  {
    _id: "2",
    text: "How you guys doing? 😊",
    user: {
      username: "johndoe",
      profileImg: "/avatars/boy2.png",
      fullName: "John Doe",
    },
    comments: [
      {
        _id: "1",
        text: "Nice Tutorial",
        user: {
          username: "janedoe",
          profileImg: "/avatars/girl2.png",
          fullName: "Jane Doe",
        },
      },
    ],
    likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
  },
  {
    _id: "3",
    text: "Desire is truth",
    img: "/posts/post2.png",
    user: {
      username: "Lucifer",
      profileImg: "/avatars/boy3.png",
      fullName: "Lucifer Morningstar",
    },
    comments: [],
    likes: [
      "6658s891",
      "6658s892",
      "6658s893",
      "6658s894",
      "6658s895",
      "6658s896",
    ],
  },
  {
    _id: "4",
    text: "I'm learning GO this week. Any tips? 🤔",
    img: "/posts/post3.png",
    user: {
      username: "johndoe",
      profileImg: "/avatars/boy3.png",
      fullName: "John Doe",
    },
    comments: [
      {
        _id: "1",
        text: "Nice Tutorial",
        user: {
          username: "janedoe",
          profileImg: "/avatars/girl3.png",
          fullName: "Jane Doe",
        },
      },
    ],
    likes: [
      "6658s891",
      "6658s892",
      "6658s893",
      "6658s894",
      "6658s895",
      "6658s896",
      "6658s897",
      "6658s898",
      "6658s899",
    ],
  },
];

export const USERS_FOR_RIGHT_PANEL = [
  {
    _id: "1",
    fullName: "Baburao Ganpatrao Apte",
    username: "babu_bhaiya",
    profileImg: "/avatars/boy2.png",
  },
  {
    _id: "2",
    fullName: "Anuradha Singh",
    username: "anuradha",
    profileImg: "/avatars/girl1.png",
  },
  {
    _id: "3",
    fullName: "Raju Don",
    username: "raju",
    profileImg: "/avatars/boy3.png",
  },
  {
    _id: "4",
    fullName: "Anjali Singh",
    username: "anjali",
    profileImg: "/avatars/girl2.png",
  },
];
