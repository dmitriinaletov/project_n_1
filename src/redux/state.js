let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 23 },
    ]
  },
  dialogsPage: {
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'I am fine' }
    ],
    dialogs: [
      { id: 1, name: 'Dima' },
      { id: 2, name: 'Khrystyna' },
      { id: 3, name: 'Andrei' },
      { id: 4, name: 'Martin' },
      { id: 5, name: 'Valera' },
      { id: 6, name: 'Honza' }
    ]
  }
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);

}

export default state;