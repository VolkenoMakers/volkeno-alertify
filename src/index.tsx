import * as React from 'react'
import AlertDanger from './components/AlertDanger'
import AlertInfo from './components/AlertInfo'
import AlertSuccess from './components/AlertSuccess'
import AlertWarning from './components/AlertWarning'
import styles from './styles.module.css'

interface Props {
  title?: string
  text?: string
  typeAlert?: string
  position?: string
  duration?: number
}

export const Alertify = ({
  title,
  text,
  typeAlert,
  position,
  duration
}: Props) => {
  if (typeAlert === 'success') {
    return (
      <div className={styles.containerPage}>
        <AlertSuccess text={text} title={title} position={position} />
      </div>
    )
  }
  if (typeAlert === 'warning') {
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
  if (typeAlert === 'info') {
    return (
      <div className={styles.containerPage}>
        <AlertInfo text={text} title={title} position={position} />
      </div>
    )
  }
  if (typeAlert === 'danger') {
    return (
      <div className={styles.containerPage}>
        <AlertDanger text={text} title={title} position={position} />
      </div>
    )
  }
  return (
    <div className={styles.containerPage}>
      <h1>Il faut définir un statut pour voir l'alert.</h1>
    </div>
  )
}
