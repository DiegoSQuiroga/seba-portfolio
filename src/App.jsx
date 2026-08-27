import Hero from './sections/Hero'
import Manifesto from './sections/Manifesto'
import WhatIDo from './sections/WhatIDo'
import Connections from './sections/Connections'
import Work from './sections/Work'
import Contact from './sections/Contact'
import MobileGate from './componenets/MobileGate'

function App() {
  return <><MobileGate /><main className="page"><Hero /><Manifesto /><WhatIDo /><Connections /><Work /><Contact /></main></>
}

export default App
