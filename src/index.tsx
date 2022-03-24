import * as React from 'react'
import AlertDanger from './components/AlertDanger'
import AlertInfo from './components/AlertInfo'
import AlertSuccess from './components/AlertSuccess'
import AlertWarning from './components/AlertWarning'
import styles from './styles.module.css'

interface Props {
  titre?: string
  text?: string
  typeAlert?: string
  position?: string
}

export const Alertify = ({ titre, text, typeAlert, position }: Props) => {
  if (typeAlert === 'success') {
    return (
      <div className={styles.containerPage}>
        <AlertSuccess text={text} titre={titre} position={position} />
      </div>
    )
  }
  if (typeAlert === 'warning') {
    return (
      <div className={styles.containerPage}>
        <AlertWarning text={text} titre={titre} position={position} />
      </div>
    )
  }
  if (typeAlert === 'info') {
    return (
      <div className={styles.containerPage}>
        <AlertInfo text={text} titre={titre} position={position} />
      </div>
    )
  }
  if (typeAlert === 'danger') {
    return (
      <div className={styles.containerPage}>
        <AlertDanger text={text} titre={titre} position={position} />
      </div>
    )
  }
  return (
    <div className={styles.containerPage}>
      <h1>Il faut définir un statut pour voir l'alert.</h1>
    </div>
  )
}
