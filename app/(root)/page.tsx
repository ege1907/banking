import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { log } from 'console'
import React from 'react'

const Home = () => {
    const loggedIn = {
        firstName: "Ege", 
        lastName:"Bozdeniz", 
        email:"ebbozdeniz@gmail.com"
    }
  return (
    <section className='home'>
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                    type='greeting'
                    title="welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext='Access and manage your account and transactions efficiently'
                />
                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                />
            </header>
        </div>
        <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50},{currentBalance: 500}]}

        />
    </section>
  )
}

export default Home