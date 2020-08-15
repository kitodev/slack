import React, {useEffect, useState} from 'react';
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Message from './Message';
import ChatInput from './ChatInput';

import db from './firebase';

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessage] = useState();

    useEffect(() => {
        if(roomId) {
            db.collection('rooms')
            .doc(roomId)
            .onSnapshot((snapshot) => setRoomDetails (snapshot))
        }

        db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) =>
            setRoomMessage(snapshot.docs.map((doc) => doc.data()))
            );
    }, [roomId]);

    console.log(roomDetails);
    console.log("MESSGE", roomMessages);
    return (
        <div className="chat">
            <div classsName="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># {roomDetails?.name}</strong>
                        <StarBorderIcon />
                    </h4>
                </div>

                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
                <div className="chat__message">
                    {roomMessages.map(({message, timestamp, user, userImage}) => (
                        <Message
                        message={message} 
                        timestamp={timestamp}
                        user={user} 
                        userImage={userImage} />
                    ))}
                </div>
                <ChatInput channelname={roomDetails?.name} />
            </div>
        </div>
    )
}

export default Chat
