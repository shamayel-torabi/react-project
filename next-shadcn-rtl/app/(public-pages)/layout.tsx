import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export const metadata = {
    title: 'Material - PrebuiltUI',
    description: 'Material is a powerful AI-powered platform that allows you to create and edit websites, blogs, and more. With Material, you can easily create a professional-looking website without any coding knowledge.',
    appleWebApp: {
        title: 'Material - PrebuiltUI',
    },
};

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <div className="overflow-y-auto">
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    );
}
