'use client'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div className='w-full'>
        <CountUp className="total-balance-amount flex-center gap-2" 
            duration={2.75}
            decimals={2}
            decimal=","
            prefix='$'
            end={amount} />
    </div>
    
  )
}

export default AnimatedCounter