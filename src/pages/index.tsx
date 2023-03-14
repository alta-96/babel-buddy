import Head from 'next/head'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

import ChatRequest from "@/components/ChatRequest/ChatRequest";
import ChatInstance from "@/components/ChatInstance/ChatInstance";
import HeaderBar from "@/components/HeaderBar/HeaderBar";
import {useState} from "react";
import {ChatRequestResponse} from "@/models/chat-request/ChatRequestResponse";
import {ModalWindow} from "@/models/ModalWindow";

const dummyWindows = [
    {
        id: '1',
        chatObj: "Bob S.",
    },
    {
        id: '2',
        chatObj: "Sally M.",
    },
    {
        id: '3',
        chatObj: "Chris T.",
    },
    {
        id: '4',
        requestObj: "Martin G."
    }
] as ModalWindow[]

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const [modalWindows, setModalWindows] = useState(dummyWindows as ModalWindow[]);

    const handleRequestResponse = (chatRequestResponse: ChatRequestResponse) => {
        if (chatRequestResponse.response === 0) {
            closeWindowByWindowId(chatRequestResponse.windowId);
        } else {
            closeWindowByWindowId(chatRequestResponse.windowId);
            setModalWindows(prevState => {
                return [
                    ...prevState,
                    {
                        id: Date.now(),
                        chatObj: chatRequestResponse.fromUser
                    }
                ]
            })
        }
    }

    const closeWindowByWindowId = (windowId: string) => {
        setModalWindows(prevState => prevState.filter(x => x.id !== windowId));
    }

    return (
        <>
            <Head>
                <title>BabelBuddy</title>
                <meta name="description" content="A final Year Computer Science Project by Alexander T Ashley"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                    crossOrigin="anonymous"
                />
            </Head>
            <main>
                <header className="w-100" style={{background: '#0275D8'}}>
                    <HeaderBar isLoggedIn={false}></HeaderBar>
                </header>
                
                
                
                
                {/*{modalWindows.map(window => window.chatObj ? */}
                {/*    <ChatInstance */}
                {/*        windowId={window.id}*/}
                {/*        withUser={window.chatObj}*/}
                {/*        key={window.chatObj}*/}
                {/*        handleCloseWindow={closeWindowByWindowId}*/}
                {/*    /> */}
                {/*    : <ChatRequest*/}
                {/*        windowId={window.id}*/}
                {/*        requestResponse={handleRequestResponse} */}
                {/*        key={window.requestObj}*/}
                {/*        fromUser={window.requestObj}/>)}*/}
                
            </main>
        </>
    )
}
