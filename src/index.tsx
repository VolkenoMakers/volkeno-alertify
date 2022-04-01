import * as React from 'react'
import AlertDanger from './components/AlertDanger'
import AlertInfo from './components/AlertInfo'
import AlertSuccess from './components/AlertSuccess'
import AlertWarning from './components/AlertWarning'
import styles from './styles.module.css'

interface Props {
  title?: string
  text?: string
  alertState?: string
  position?: string
  duration?: number
}

export const VolkenoAlertify = ({
  title,
  text,
  alertState,
  position,
  duration
}: Props) => {
  if (alertState === 'success') {
    return (
      <div className={styles.containerPage}>
        <AlertSuccess
          text={text}
          title={title}
          position={position}
          duration={duration}
        />
      </div>
    )
  }
  if (alertState === 'warning') {
    return (
      <div className={styles.containerPage}>
        <AlertWarning
          text={text}
          title={title}
          position={position}
          duration={duration}
        />
      </div>
    )
  }
  if (alertState === 'info') {
    return (
      <div className={styles.containerPage}>
        <AlertInfo
          text={text}
          title={title}
          position={position}
          duration={duration}
        />
      </div>
    )
  }
  if (alertState === 'danger') {
    return (
      <div className={styles.containerPage}>
        <AlertDanger
          text={text}
          title={title}
          position={position}
          duration={duration}
        />
      </div>
    )
  }
  return (
    <div className={styles.containerPage}>
      <h1>You must define a status for the volkeno-alertify module to work.</h1>
    </div>
  )
}
