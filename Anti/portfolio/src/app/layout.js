import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
    title: 'Full-Stack Developer Portfolio',
    description: 'Professional portfolio showcasing full-stack development skills.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
