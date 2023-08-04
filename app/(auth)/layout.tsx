import { ClerkProvider } from "@/node_modules/@clerk/nextjs/dist/types/components.server"
import {Inter} from "next/font/google"

import '../globall.css';

export const metadata ={
    title: 'Threads',
    description: 'A next.js 13 meta threads application'
}

const inter= Inter({ subsets: ["latin"]})

export default function RootLayout({
    children
}:{ children: React.ReactNode}){
    return(
         <ClerkProvider>
            <html lang="en">
                <body className={'${inter.className} bg-dark-1'}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}