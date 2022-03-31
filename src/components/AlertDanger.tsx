import React, { useEffect, useState } from 'react'
import styles from '../../src/styles.module.css'
import AlertDangerImg from 'fail.png'
import ImgEllipse from 'ellipse-fail.png'
import IconClose from 'close.png'

type Props = {
  title?: string
  text?: string
  position?: string
  duration?: number
}

const AlertDanger = ({ title, text, position, duration }: Props) => {
  const [show, setShow] = useState(true)
  const closeToast = () => {
    setShow(false)
  }
  title = title || 'Failure !'
  text = text || 'Change a few things and try submitting again.'
  duration = duration || 5000
  useEffect(() => {
    console.log(duration)
    setTimeout(closeToast, duration)
  }, [])
  if (show === false) {
    return null
  }
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
                <button
                  className={styles.btnClose}
                  onClick={() => closeToast()}
                >
                  <img
                    src={IconClose}
                    alt='Icon close'
                    className={styles.iconClose}
                  />
                </button>
              </div>
              <h2 className={styles.titreAlert}>{title}</h2>
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
                <button
                  className={styles.btnClose}
                  onClick={() => closeToast()}
                >
                  <img
                    src={IconClose}
                    alt='Icon close'
                    className={styles.iconClose}
                  />
                </button>
              </div>
              <h2 className={styles.titreAlert}>{title}</h2>
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
                <button
                  className={styles.btnClose}
                  onClick={() => closeToast()}
                >
                  <img
                    src={IconClose}
                    alt='Icon close'
                    className={styles.iconClose}
                  />
                </button>
              </div>
              <h2 className={styles.titreAlert}>{title}</h2>
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
                <button
                  className={styles.btnClose}
                  onClick={() => closeToast()}
                >
                  <img
                    src={IconClose}
                    alt='Icon close'
                    className={styles.iconClose}
                  />
                </button>
              </div>
              <h2 className={styles.titreAlert}>{title}</h2>
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
                <button
                  className={styles.btnClose}
                  onClick={() => closeToast()}
                >
                  <img
                    src={IconClose}
                    alt='Icon close'
                    className={styles.iconClose}
                  />
                </button>
              </div>
              <h2 className={styles.titreAlert}>{title}</h2>
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
              <button className={styles.btnClose} onClick={() => closeToast()}>
                <img
                  src={IconClose}
                  alt='Icon close'
                  className={styles.iconClose}
                />
              </button>
            </div>
            <h2 className={styles.titreAlert}>{title}</h2>
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
export default AlertDanger
