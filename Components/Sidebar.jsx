import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import * as EmailValidator from 'email-validator';
import { Avatar, IconButton } from '@mui/material';
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import Chat from './Chat';

const Sidebar = () => {
  const [user] = useAuthState(auth);
  const userChatRef = db
    .collection('chats')
    .where('users', 'array-contains', user.email);
  const [chatSnapshot] = useCollection(userChatRef);

  const createChat = () => {
    const input = prompt(
      'please enter an email address for the user you wish to chat with'
    );

    if (!input) return null;

    if (
      EmailValidator.validate(input) &&
      !chatAlreadyExists(input) &&
      input !== user.email
    ) {
      // add chat in to db collection "chats" collection if it doesn't already exist and is valid
      db.collection('chats').add({
        users: [user.email, input],
      });
    }
  };

  const chatAlreadyExists = (recientEmail) =>
    !!chatSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user) => user === recientEmail)?.length > 0
    );

  return (
    <div className="sidebar">
      <header className="sidebar__header">
        <Avatar
          src={user.photoURL}
          className="sidebar__avatar"
          onClick={() => auth.signOut()}
        />
        <div className="sidebar__iconsContainer">
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </header>

      <div className="sidebar__search">
        <SearchIcon />
        <input placeholder="search in chats" />
      </div>

      <button onClick={createChat} className="sidebar__button">
        start new chat
      </button>

      {/* list of chat */}
      {chatSnapshot?.docs.map((chat) => (
        <Chat key={chat.id} id={chat.id} users={chat.data().users} />
      ))}
    </div>
  );
};

export default Sidebar;
