import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Layout.module.css';
import Link from 'next/link';
import header from '../images/header.png'
export const siteTitle = 'Next.js Sample Website';
import Window from '../components/Window'
import Folder from '../components/Folder'
import Draggable from 'react-draggable';
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
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
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
    <Folder title="About" handleClick={handleAboutClick}/>
    <Folder title="Music" handleClick={handleMusicClick}/>
    <Folder title="Chat" handleClick={handleChatClick}/>
    </div>
      
      {isMusic && <Window handleWindowClose={handleMusicClose}>MUSIC INFO</Window>}
      
    </>
  );
}