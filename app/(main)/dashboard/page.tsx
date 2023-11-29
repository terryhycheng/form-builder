import Forms from '@/components/Forms';
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const DashboardPage = async () => {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        redirect('/login');
    }

    return (
        <main id="content" role="main">
            <Forms />
        </main>
    );
};

export default DashboardPage;
