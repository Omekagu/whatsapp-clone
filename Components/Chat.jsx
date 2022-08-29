import { Avatar } from '@mui/material';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebase';
import getRecipientEmail from '../utils/getRecipientEmail';

const Chat = ({ id, users }) => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [recipientSnapshot] = useCollection(
    db.collection('users').where('email', '==', getRecipientEmail(users, user))
  );

  const recipient = recipientSnapshot?.docs?.[0]?.data();

  const recipientEmail = getRecipientEmail(users, user);

  const enterChat = () => {
    router.push(`/chat/${id}`);
  };

  return (
    <div className="chat" onClick={enterChat}>
      {recipient ? (
        <Avatar className="chat__avatar" src={recipient?.photoURL} />
      ) : (
        <Avatar className="chat__avatar">{recipientEmail[0]}</Avatar>
      )}

      <p>{recipientEmail}</p>
    </div>
  );
};

export default Chat;
