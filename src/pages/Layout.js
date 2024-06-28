import React from 'react'
import Algolia from '../components/ThirdParty/algoliasearch'
import Flourish from '../components/ThirdParty/flourish'
import HubSpot from '../components/ThirdParty/hubspot'


const Layout = () => {
  return (
    <div>
    <div className='py-[90px] text-[90px] text-red-500 ml-[90px]'>
        <h1>Hello</h1>
        <p>This is Logith</p>

<div className='bg-[rgb(158,39,39)] text-[50px] font-mono hover:translate-y-[-20px]'>
<h1>
     Hello
</h1>
</div>
        
    </div>
    <Algolia />
        <Flourish />
        <HubSpot />
    </div>
  )
}

export default Layout
