import React from 'react'
import { VolkenoAlertify } from 'volkeno-alertify'
import 'volkeno-alertify/dist/index.css'

const App = () => {
    var text = ''
    var alertState = 'warning'
    var title = ''
    var position = 'center'
    var duration = 5000
  return <VolkenoAlertify text={text} title={title} alertState={alertState} position={position} duration={duration} />
}

export default App
