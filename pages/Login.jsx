import { Button } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import { auth, provider } from '../firebase';

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <div className="login">
      <Head>
        <title>Login</title>
        <meta name="description" content="Login " />
        <link
          rel="icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WrFiWO9cVU5PzovHJavfHqUSbhqY9a0sn6Jkupa_&s"
        />
      </Head>
      <div className="login__container">
        <Image src="/logo.png" alt="logo" width="100" height="100" />

        <Button variant="outline" className="login__btn" onClick={signIn}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
