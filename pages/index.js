import Head from 'next/head';
import { db } from "../components/firebase"
import { onValue, ref } from "firebase/database";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from 'react';
import ShortPost from '../components/ShortPost'
import { useState } from 'react';
import Layout from '../layouts/Layout';
import { useRouter } from "next/router";
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

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
    }, [])

  return (
    <Layout home>
        {posts}
    </Layout>
  );
  
}

// TO DO:
// favicon and twitter card
// скроллбар
// цвета
// Рефактор
// Поправить дизайн чата
// Добавить музыку
// Добавить адресную строку с названием ссылки
// сделать редукс
// footer: add footer, start button, 
// authorization: add 


// название DONE
// Форматировать текст DONE
// MODAL!!!! DONE
// Добавить имя автора и дату сверху DONE
// сделать общий стиль для окон DONE
// добавить отдельные файлы для содержания иконок DONE
// ширина окна DONE
// сделать нормальную кнопку DONE
// folders: add folder icon,  DONE
// add open by click, DONE
// add close button, DONE
// make some different folders,  DONE
// firebase: fix DONE
// styles: fix content showing DONE
// добавить фиксед для иконок DONE
