import Head from 'next/head';
import { db } from "../components/firebase"
import { onValue, ref } from "firebase/database";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from 'react';
import ShortPost from '../components/ShortPost'
import { useState } from 'react';
import Layout from '../layouts/Layout';
import { useRouter } from "next/router";


export default function Home() {

  const [posts, setPosts] = useState([])

  useEffect(()=>{
    async function fetchPosts() {
       
      const fetchedPosts = await getDocs(collection(db, "posts"));
      const newData = fetchedPosts.docs.map((doc) => 
                {return <ShortPost  key={doc.id} post_id = {doc.id} post ={doc.data()} /> }
                );   
      setPosts(newData); 
      }
    fetchPosts()
    }, [posts])

  return (
    <Layout home>
        {posts}
    </Layout>
  );
  
}
