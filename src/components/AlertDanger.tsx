import React from 'react'
import styles from '../../src/styles.module.css'
import AlertDangerImg from 'fail.png'
import ImgEllipse from 'ellipse-fail.png'
import IconClose from 'close.png'

type Props = {
  titre?: string
  text?: string
  position?: string
}

const AlertDanger = ({ titre, text, position }: Props) => {
  titre = 'Echec !'
  text = 'Modifiez quelques éléments et essayez de soumettre à nouveau.'
  //   position = ''
  if (position === 'bottom-right') {
    return (
      <div className={styles.positionBottomRight}>
        <div className={styles.containerAlert}>
          <div className={styles.bgDanger}>
            <div>
              <img
                src={AlertDangerImg}
                alt='AlertDangerImg'
                className={styles.alertSuccessImg}
              />
            </div>
            <div className={styles.containerContenu}>
              <div className={styles.containerBtnIcon}>
                <button className={styles.btnClose}>
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
          <div className={styles.bgDanger}>
            <div>
              <img
                src={AlertDangerImg}
                alt='AlertDangerImg'
                className={styles.alertSuccessImg}
              />
            </div>
            <div className={styles.containerContenu}>
              <div className={styles.containerBtnIcon}>
                <button className={styles.btnClose}>
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
          <div className={styles.bgDanger}>
            <div>
              <img
                src={AlertDangerImg}
                alt='AlertDangerImg'
                className={styles.alertSuccessImg}
              />
            </div>
            <div className={styles.containerContenu}>
              <div className={styles.containerBtnIcon}>
                <button className={styles.btnClose}>
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
          <div className={styles.bgDanger}>
            <div>
              <img
                src={AlertDangerImg}
                alt='AlertDangerImg'
                className={styles.alertSuccessImg}
              />
            </div>
            <div className={styles.containerContenu}>
              <div className={styles.containerBtnIcon}>
                <button className={styles.btnClose}>
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
          <div className={styles.bgDanger}>
            <div>
              <img
                src={AlertDangerImg}
                alt='AlertDangerImg'
                className={styles.alertSuccessImg}
              />
            </div>
            <div className={styles.containerContenu}>
              <div className={styles.containerBtnIcon}>
                <button className={styles.btnClose}>
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
export default AlertDanger
