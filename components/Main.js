import Image from 'next/image';

const Main = () => {
  return (
    <div className="main-content" id="main">
      <div className="introduction">
        <h1 className="position">Web Software Developer</h1>
        <h1 className="name">Kazunobu Someya</h1>
        <p className="contactIcon">
          <a href="https://github.com/wangkalbi-gernessen" target="_blank">
            <Image src="/github.png" width={60} height={60} />
          </a>
          <a href="mailto: guizhou08chishui@gmail.com" target="_blank">
            <Image src="/email.png" width={60} height={60} />
          </a>
          <a href="tel: 778-689-7760" target="_blank">
            <Image src="/call.png" width={60} height={60} />
          </a>
          <a href="https://www.facebook.com/kazunobu.someya" target="_blank">
            <Image src="/facebook.png" width={60} height={60} />
          </a>
          <a href="https://www.instagram.com/kazukeks/" target="_blank">
            <Image src="/instagram.png" width={60} height={60} />
          </a>
        </p>
      </div>
    </div>   
  );
}

export default Main;