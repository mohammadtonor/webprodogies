import { PropsWithChildren } from "react"
import LandingPageNavbar from "./_components/navbar/index"

const LandingPageLayout = ({children}: PropsWithChildren) => {
  return (
       <div className='flex flex-col container relative'>
        <LandingPageNavbar />
        {children}
    </div>
  )
}

export default LandingPageLayout