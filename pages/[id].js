import Layout from '../layouts/Layout'
import { db } from "../components/firebase"
import { onValue, ref } from "firebase/database";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import FullPost from "../components/FullPost"

export default function Post({ postData }) {
  return (
    <Layout>
      <FullPost title={postData.title} text={postData.text}/>

    </Layout>
  );
}


// {postData.title}
// <br />
// {postData.id}
// <br />
// {postData.author} 

export async function getStaticProps({ params }) {
  
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const data_docs = await getDocs(collection(db, "posts"))
  const paths = data_docs.docs.map((doc) => ({params: {id: doc.id}}))
  return {
    paths,
    fallback: false,
  };
}


export async function getPostData(id) {
  const docRef = doc(db, "posts", id);
  const data = await getDoc(docRef);
  const post_data = data.data();
  // Combine the data with the id
  console.log(post_data)
  return {
      ...post_data

  };
}