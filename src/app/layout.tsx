/* eslint-disable import/order */
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import BubbleBackground from '@/components/BubbleBackground';
import Navbar from '@/components/navbar';
import ThemeProviderWrapper from '@/components/ThemeProviderWrapper';
import './styles/globals.css';
import 'react-notion-x/src/styles.css';
import { Toaster } from 'sonner';

const pretendard = localFont({
    src: [
        { path: '../fonts/Pretendard-Regular.woff2', weight: '400' },
        { path: '../fonts/Pretendard-Medium.woff2', weight: '500' },
        { path: '../fonts/Pretendard-SemiBold.woff2', weight: '600' },
        { path: '../fonts/Pretendard-Bold.woff2', weight: '700' },
        { path: '../fonts/Pretendard-ExtraBold.woff2', weight: '800' },
    ],
    variable: '--font-pretendard',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Hyun | Frontend Developer',
    description: 'Hyun\'s personal portfolio',
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: 'Hyun | Frontend Developer',
        description: 'Hyun\'s personal portfolio site. About me, Skills, Projects, and contact.',
        url: 'https://portfolio-xi-three-59.vercel.app/',
        siteName: 'Hyun Portfolio',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Hyun Portfolio',
            },
        ],
        locale: 'ko_KR',
        type: 'website',
    },
    metadataBase: new URL('https://portfolio-xi-three-59.vercel.app/'),
};

export default function RootLayout({
    children,
    modal
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <html lang='ko' suppressHydrationWarning>
            <body className={`${pretendard.variable} antialiased min-h-screen`}>
                <ThemeProviderWrapper>
                    <Toaster richColors position='top-center'/>
                    <BubbleBackground />
                    <Navbar />
                    <main>
                        {children}
                        {modal}
                    </main>
                </ThemeProviderWrapper>
            </body>
        </html>
    );
}
