import Head from 'next/head';
import Sidebar from '../Components/Sidebar';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>whatsapp 2.0</title>
        <meta name="description" content="whatsapp 2.0" />
        <link
          rel="icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WrFiWO9cVU5PzovHJavfHqUSbhqY9a0sn6Jkupa_&s"
        />
      </Head>
      <Sidebar />
    </div>
  );
}
