import React from 'react'

import { Alertify } from 'alertify'
import 'alertify/dist/index.css'

const App = () => {
    var text = ''
    var typeAlert = 'success'
    var title = ''
    var position = 'center'
    var duration = 5000
  return <Alertify text={text} title={title} typeAlert={typeAlert} position={position} duration={duration} />
}

export default App
