import React, { createContext, useState } from "react"

const YtContext = createContext();

function YtProvider({ children }) {
  const [extendedNavBar, setExtendedNavBar] = useState(true) 

  const toggleExtendedNavBar = () => {
    setExtendedNavBar(prev => !prev)
  }

  return (
    <YtContext.Provider value={{
      extendedNavBar,
      toggleExtendedNavBar,
      setExtendedNavBar
    }}>
      {children}
    </YtContext.Provider>
  )
}

export { YtContext, YtProvider }