import Logo from '../../assets/logo/logo.png'
import React from 'react'
import styles from './ErrorConnectWallet.module.css'
import Lottie from 'lottie-react'
import animationData from '../../assets/error/caution.json'
import { Link } from 'react-router-dom'

const ErrorConnectWallet = () => {
  return (
    <section className={styles.errorContainer}>
      <div className={styles.animationContainer}>
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className={styles.animation}
        />
      </div>
      <h1 className={styles.errorHeading}>Wallet Connection Error!!!</h1>
      <p className={styles.errorMessage}>Ensure you submit an active wallet.</p>
      <Link className={styles.errorReturnButton} to={'/select-wallet'} >Retry</Link>
    </section>
  )
}

export default ErrorConnectWallet
