import Head from 'next/head'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

import ChatRequest from "@/components/ChatRequest/ChatRequest";

export default function Home() {
    return (
        <>
            <Head>
                <title>BabelBuddy</title>
                <meta name="description" content="A final Year Computer Science Project by Alexander T Ashley"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                    crossOrigin="anonymous"
                />
            </Head>
            <main>
                
                
                <ChatRequest invitationFrom="Bob" />
            </main>
        </>
    )
}
