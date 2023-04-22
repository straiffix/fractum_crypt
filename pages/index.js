import Head from 'next/head';
import { db } from "../components/firebase"
import { onValue, ref } from "firebase/database";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from 'react';
import ShortPost from '../components/ShortPost'
import { useState } from 'react';
import Layout from '../components/layout';



export default function Home() {

  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
       
    await getDocs(collection(db, "posts"))
        .then((querySnapshot)=> {               
            const newData = querySnapshot.docs.map((doc) => 
              {return <ShortPost  key={doc.id} post_id = {doc.id} post ={doc.data()} /> }
              );           
            console.log(newData);
            setPosts(newData)
        })
   
  }

  useEffect(()=>{
      fetchPosts();
  }, [])


  return (
    <Layout home>
        {posts}
    </Layout>
  );
  // (
  //   <div className={styles.container}>
  //     <Head>
  //     </Head>

  //     <main>
  //       <div>
  //       {posts}
  //       </div>
  //     </main>

  //     <footer>
  //     </footer>

      // <style jsx>{`
      //   main {
      //     padding: 5rem 0;
      //     flex: 1;
      //     display: flex;
      //     flex-direction: column;
      //     justify-content: center;
      //     align-items: center;
      //   }
      //   footer {
      //     width: 100%;
      //     height: 100px;
      //     border-top: 1px solid #eaeaea;
      //     display: flex;
      //     justify-content: center;
      //     align-items: center;
      //   }
      //   footer img {
      //     margin-left: 0.5rem;
      //   }
      //   footer a {
      //     display: flex;
      //     justify-content: center;
      //     align-items: center;
      //     text-decoration: none;
      //     color: inherit;
      //   }
      //   code {
      //     background: #fafafa;
      //     border-radius: 5px;
      //     padding: 0.75rem;
      //     font-size: 1.1rem;
      //     font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
      //       DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      //   }
      // `}</style>

  //     <style jsx global>{`
  //       html,
  //       body {
  //         padding: 0;
  //         margin: 0;
  //         font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
  //           Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
  //           sans-serif;
  //       }
  //       * {
  //         box-sizing: border-box;
  //       }
  //     `}</style>
  //   </div>
  // )
}
