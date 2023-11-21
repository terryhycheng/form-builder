import DashboardNav from '@/components/DashboardNav'
import Forms from '@/components/Forms'
import Stats from '@/components/Stats'

const DashboardPage = () => {
  return (
    <main id="content" role="main">
        <DashboardNav />
        <Stats />
        <Forms />
    </main>
  )
}

export default DashboardPage
