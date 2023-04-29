import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, doc } from "firebase/firestore";
import { db } from "../components/firebase"

function Guestbook() {
    const [messages, setMessages] = useState([])
    const [new_messages, setNewMessages] = useState([])
    const [name, setName] = useState();
    const [message, setMessage] = useState();

    async function Push () {
        await addDoc(collection(db, "guestbook_messages"), {
            author: name,
            message: message,
            dateStamp: "2023-04-29"
        })
        setNewMessages(name+message);
    }

    useEffect(()=>{
      async function fetchMessages() {
         
        const fetchedMessages = await getDocs(collection(db, "guestbook_messages"));
        const newData = fetchedMessages.docs.map((doc) => 
                  { const message_data = doc.data()
                    return <div>{message_data.author}: {message_data.message}</div>
                }
                  );   
        setMessages(newData); 
        }
        fetchMessages()
      }, [new_messages])

    return (<div>
        <div style={{overflowY : "scroll"}}>{messages}</div>
        <div>
            <input placeholder='Nickname' value={name} onChange={(e) => setName(e.target.value)}/>
            <input placeholder='Your message' value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button onClick={Push}>Send</button>
        </div>
        </div>
    )

}

export default Guestbook;