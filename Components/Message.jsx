import moment from 'moment';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const Message = ({ user, message }) => {
  const [userLoggedIn] = useAuthState(auth);

  const TypeOfMessage = user === userLoggedIn.email ? 'sender' : 'reciever';

  return (
    <div className="message">
      <p className={TypeOfMessage}>
        {message.message}
        <span>
          {message.timestamp ? moment(message.timestamp).format('LT') : '...'}
        </span>
      </p>
    </div>
  );
};

export default Message;
