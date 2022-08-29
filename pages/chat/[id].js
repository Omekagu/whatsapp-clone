/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head';
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatScreen from '../../Components/ChatScreen';
import Sidebar from '../../Components/Sidebar';
import { auth, db } from '../../firebase';
import getRecipientEmail from '../../utils/getRecipientEmail';

const chat = ({ chat, messages }) => {
  const [user] = useAuthState(auth);

  return (
    <div className="chatpage">
      <Head>
        <title>chat with {getRecipientEmail(chat.users, user)}</title>
        <meta name="description" content="chat " />
        <link
          rel="icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WrFiWO9cVU5PzovHJavfHqUSbhqY9a0sn6Jkupa_&s"
        />
      </Head>
      <Sidebar />

      <div className="chatpage__container">
        <ChatScreen chat={chat} messages={messages} />
      </div>
    </div>
  );
};

export default chat;

// SERVER SIDE
export async function getServerSideProps(context) {
  const ref = db.collection('chats').doc(context.query.id);

  // prep the message on the server
  const messagesRes = await ref
    .collection('messages')
    .orderBy('timestamp', 'asc')
    .get();

  const messages = messagesRes.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((messages) => ({
      ...messages,
      timestamp: messages.timestamp.toDate().getTime(),
    }));

  // prep the chats
  const chatRes = await ref.get();
  const chat = {
    id: chatRes.id,
    ...chatRes.data(),
  };

  return {
    props: {
      messages: JSON.stringify(messages),
      chat: chat,
    },
  };
}
