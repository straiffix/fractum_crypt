import { db } from "../pages/firebase"
import { onValue, ref } from "firebase/database";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";


export function getAllPostIds() {
    const fetchPosts = async() => {await getDocs(collection(db, "posts"))
        .then((querySnapshot)=> {               
            return querySnapshot.docs.map((doc) => 
                    {
                        return {
                            params: {
                                id: doc.id
                                },
                            };
                    }
              );          
        })
    }
    const post_ids = fetchPosts()
    console.log(post_ids)
    return post_ids
   
  }
    

export function getPostData(id) {
    const docRef = doc(db, "posts", id);
    const docSnap = async() => { await getDoc(docRef).then((queryDoc) => {
        return queryDoc.data()
    })}

    // Combine the data with the id
    return {
        id,
        ...docSnap(),
    };
}