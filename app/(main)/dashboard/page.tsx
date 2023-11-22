import DashboardNav from '@/components/DashboardNav';
import Forms from '@/components/Forms';
import Stats from '@/components/Stats';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const DashboardPage = async () => {
    const session = await getServerSession();

    if (!session || !session.user) {
        redirect('/login');
    }

    return (
        <main id="content" role="main">
            <DashboardNav />
            <Stats />
            <Forms />
        </main>
    );
};

export default DashboardPage;
