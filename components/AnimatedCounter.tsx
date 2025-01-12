'use client'
import CountUp from "react-countup"
const AnimatedCounter = ( { amount }: { amount: number }) => {
  return (
    <div className=" w-full">
  
      <CountUp  decimal="," end={amount} decimals={2} duration={1} prefix='$' />
    </div>
  )
}

export default AnimatedCounter
