import Navbar from '@/components/Navbar';

export default async function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="w-full min-h-screen">
            <Navbar isMainLayout={true} />
            {children}
        </main>
    );
}
