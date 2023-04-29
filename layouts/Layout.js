import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Layout.module.css';
import Link from 'next/link';
import Window from '../components/Window'
import Folder from '../components/Folder'
import AboutContent from '../components/AboutContent';
import Guestbook from '../components/Guestbook';
import { useState } from 'react';

export default function Layout({ children, home }) {
  const [isAbout, setIsAbout] = useState(false)
  const [isMusic, setIsMusic] = useState(false)
  const [isChat, setIsChat] = useState(false)

  const handleAboutClick = (setParameterTrue) => {
    setIsAbout(true)
  }
  const handleAboutClose= () => {
    setIsAbout(false)
  }
  const handleMusicClick = () => {
    setIsMusic(true)
  }
  const handleMusicClose= () => {
    setIsMusic(false)
  }
  const handleChatClick = () => {
    setIsChat(true)
  }
  const handleChatClose= () => {
    setIsChat(false)
  }


  return (
      <>
      <div style={{
        zIndex: -1,
        top: 0,
        left: 0,
        position: "fixed",
        width: "100vw",
        height: "100vh"
      }}>
          <Image
          src="/background_lines.png" 
          layout="fill"
          quality="100"
          objectFit='cover'/>
      
      </div>
      
    <div className={styles.container_layout}>
      
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal blog about fantasy, linear algebra, and everything"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            "fractum's crypt",
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content="fractum's crypt" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header_layout}>
        {home ? (
          <>
            <Image
              priority
              src="/header.png"
              alt=""
              width="588"
              height="140"
            />
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/header.png"
                alt=""
                width="588"
                height="140"
              />
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <form><button type="submit" formAction="/" className={styles.shortpostbutton}>Back to home</button></form>
          {/* <Link href="/">← Back to home</Link> */}
        </div>
      )}
    </div>
    <div className={styles.folder_box}>
    <Folder title="About" handleClick={handleAboutClick} icon_image={"/folder_dark.png"}/>
    <Folder title="Music" handleClick={handleMusicClick} icon_image={"/music.png"}/>
    <Folder title="Guestbook" handleClick={handleChatClick} icon_image={"/text_file.png"}/>
    </div>
      
      {isAbout && <Window handleWindowClose={handleAboutClose} header="About">
        <AboutContent />
        </Window>}

      {isMusic && <Window handleWindowClose={handleMusicClose} header="Music">
      Some Music here
        </Window>}

      {isChat && <Window handleWindowClose={handleChatClose} header="Guestbook">
      <Guestbook />
        </Window>}
      
    </>
  );
}