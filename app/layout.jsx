import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollFX from '../components/ScrollFX';
export const metadata = {title:{default:'BAE | Business Automations Expert',template:'%s | BAE'},description:'CRM automation, business process automation and software integrations designed around the way your team actually works.',robots:{index:true,follow:true}};
export const viewport={width:'device-width',initialScale:1,themeColor:'#1B39CA'};
export default function RootLayout({children}){const kit=process.env.NEXT_PUBLIC_ADOBE_FONTS_KIT_ID;return <html lang="en"><head>{kit?<link rel="stylesheet" href={`https://use.typekit.net/${kit}.css`}/>:null}</head><body><ScrollFX/><Header/>{children}<Footer/></body></html>}
