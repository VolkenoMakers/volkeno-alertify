import React from 'react'

import { Alertify } from 'alertify'
import 'alertify/dist/index.css'

const App = () => {
    var text = ''
    var typeAlert = 'warning'
    var titre = ''
    var position = 'top-left'
  return <Alertify text={text} titre={titre} typeAlert={typeAlert} position={position} />
}

export default App
