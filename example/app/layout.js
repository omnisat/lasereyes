import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './globals.css';
import { Space_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Toaster } from 'sonner';
const inter = Space_Mono({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: 'normal',
});
export default function RootLayout({ children }) {
    return (_jsxs("html", Object.assign({ lang: "en", suppressHydrationWarning: true }, { children: [_jsx("head", {}), _jsxs("body", Object.assign({ className: cn('min-h-screen bg-background flex flex-col items-center justify-center font-sans antialiased', inter.className) }, { children: [children, _jsx(Toaster, {})] }))] })));
}
