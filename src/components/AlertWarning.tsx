import React from 'react'
import styles from '../../src/styles.module.css'
import AlertWarningImg from 'warning.png'
import ImgEllipse from 'ellipse-warning.png'
import IconClose from 'close.png'

type Props = {
  titre?: string
  text?: string
  position?: string
}

const AlertWarning = ({ titre, text, position }: Props) => {
  const closeToast = (className: any) => {
    const elm = document.getElementsByClassName(className)
    console.log(elm)
    elm[0].remove()
  }
  titre = 'Avertissement!'
  text = 'Désolé ! Il y a eu un problème avec votre demande.'
  if (position === 'bottom-right') {
    return (
      <div className={styles.positionBottomRight}>
        <div className={styles.containerAlert}>
          <div className={styles.bgWarning}>
            <div>
              <img
                src={AlertWarningImg}
                alt='AlertWarningImg'
                className={styles.alertSuccessImg}
              />
            </div>
            <div className={styles.containerContenu}>
              <div className={styles.containerBtnIcon}>
                <button
                  className={styles.btnClose}
                  onClick={() => closeToast(styles.positionBottomRight)}
                >
                  <img
                    src={IconClose}
                    alt='Icon close'
                    className={styles.iconClose}
                  />
                </button>
              </div>
              <h2 className={styles.titreAlert}>{titre}</h2>
              <p className={styles.textAlert}>{text}</p>
            </div>
            <div>
              <img
                src={ImgEllipse}
                alt='AlertEllipse'
                className={styles.imgEllipse}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (position === 'bottom-left') {
    return (
      <div className={styles.positionBottomLeft}>
        <div className={styles.containerAlert}>
          <div className={styles.bgWarning}>
            <div>
              <img
                src={AlertWarningImg}
                alt='AlertWarningImg'
                className={styles.alertSuccessImg}
              />
            </div>
            <div className={styles.containerContenu}>
              <div className={styles.containerBtnIcon}>
                <button
                  className={styles.btnClose}
                  onClick={() => closeToast(styles.positionBottomLeft)}
                >
                  <img
                    src={IconClose}
                    alt='Icon close'
                    className={styles.iconClose}
                  />
                </button>
              </div>
              <h2 className={styles.titreAlert}>{titre}</h2>
              <p className={styles.textAlert}>{text}</p>
            </div>
            <div>
              <img
                src={ImgEllipse}
                alt='AlertEllipse'
                className={styles.imgEllipse}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (position === 'top-right') {
    return (
      <div className={styles.positionTopRight}>
        <div className={styles.containerAlert}>
          <div className={styles.bgWarning}>
            <div>
              <img
                src={AlertWarningImg}
                alt='AlertWarningImg'
                className={styles.alertSuccessImg}
              />
            </div>
            <div className={styles.containerContenu}>
              <div className={styles.containerBtnIcon}>
                <button
                  className={styles.btnClose}
                  onClick={() => closeToast(styles.positionTopRight)}
                >
                  <img
                    src={IconClose}
                    alt='Icon close'
                    className={styles.iconClose}
                  />
                </button>
              </div>
              <h2 className={styles.titreAlert}>{titre}</h2>
              <p className={styles.textAlert}>{text}</p>
            </div>
            <div>
              <img
                src={ImgEllipse}
                alt='AlertEllipse'
                className={styles.imgEllipse}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (position === 'top-left') {
    return (
      <div className={styles.positionTopLeft}>
        <div className={styles.containerAlert}>
          <div className={styles.bgWarning}>
            <div>
              <img
                src={AlertWarningImg}
                alt='AlertWarningImg'
                className={styles.alertSuccessImg}
              />
            </div>
            <div className={styles.containerContenu}>
              <div className={styles.containerBtnIcon}>
                <button
                  className={styles.btnClose}
                  onClick={() => closeToast(styles.positionTopLeft)}
                >
                  <img
                    src={IconClose}
                    alt='Icon close'
                    className={styles.iconClose}
                  />
                </button>
              </div>
              <h2 className={styles.titreAlert}>{titre}</h2>
              <p className={styles.textAlert}>{text}</p>
            </div>
            <div>
              <img
                src={ImgEllipse}
                alt='AlertEllipse'
                className={styles.imgEllipse}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (position === 'center') {
    return (
      <div className={styles.positionCenter}>
        <div className={styles.containerAlert}>
          <div className={styles.bgWarning}>
            <div>
              <img
                src={AlertWarningImg}
                alt='AlertWarningImg'
                className={styles.alertSuccessImg}
              />
            </div>
            <div className={styles.containerContenu}>
              <div className={styles.containerBtnIcon}>
                <button
                  className={styles.btnClose}
                  onClick={() => closeToast(styles.positionCenter)}
                >
                  <img
                    src={IconClose}
                    alt='Icon close'
                    className={styles.iconClose}
                  />
                </button>
              </div>
              <h2 className={styles.titreAlert}>{titre}</h2>
              <p className={styles.textAlert}>{text}</p>
            </div>
            <div>
              <img
                src={ImgEllipse}
                alt='AlertEllipse'
                className={styles.imgEllipse}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      <p>Veuillez choisir une position</p>
    </div>
  )
}
export default AlertWarning
