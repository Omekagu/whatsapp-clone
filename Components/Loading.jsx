import Image from 'next/image';
import ClipLoader from 'react-spinners/ClipLoader';

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__container">
        <Image src="/logo.png" alt="logo" width="100" height="100" />
        <ClipLoader className="loading__loader" color="3cbc28" size={60} />
      </div>
    </div>
  );
};

export default Loading;
