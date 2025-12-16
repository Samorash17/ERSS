import { useRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { motion, useInView } from "framer-motion"
import '../styles/HelplineSection.css';
import agentImage from '../assets/helpline-homepage.png';
import icon247 from '../assets/helpline-icon.png';
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const HelplineSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const { t } = useTranslation();

  return (
    <section className="helpline-container" ref={ref}>
      <div className="helpline-background">
        <div className="helpline-gradient-orb helpline-gradient-orb-1"></div>
        <div className="helpline-gradient-orb helpline-gradient-orb-2"></div>
        <div className="helpline-gradient-orb helpline-gradient-orb-3"></div>
        <div className="helpline-grid-pattern"></div>
      </div>

      <motion.div
        className="helpline-banner"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUp}
      >
        <motion.div className="banner-glow"></motion.div>
        <motion.h4 className="helpline-banner-subtitle" variants={scaleIn}>
          <span className="pulse-dot"></span>
          {t('helpline.bannerSubtitle')}
          <span className="pulse-dot"></span>
        </motion.h4>
        <motion.h2 className="helpline-banner-title" variants={fadeUp}>
          <Trans i18nKey="helpline.bannerTitle" />
        </motion.h2>
        <motion.p className="helpline-banner-text" variants={fadeUp}>
          {t('helpline.bannerText')}
        </motion.p>
      </motion.div>

      <motion.div
        className="helpline-content"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.div className="helpline-image-wrapper" variants={slideInLeft}>
          <motion.div
            className="agent-image-frame"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={agentImage || "/placeholder.svg"} alt="Helpline Agent" className="agent-image" />
            <div className="agent-glow"></div>
          </motion.div>

          <motion.div
            className="icon-wrapper"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            whileHover={{ rotate: 360, scale: 1.1 }}
          >
            <img src={icon247 || "/placeholder.svg"} alt="24/7 Support" className="icon-247" />
            <div className="icon-glow-ring"></div>
          </motion.div>
        </motion.div>

        <motion.div className="helpline-text-wrapper" variants={slideInRight}>
          <motion.div className="text-card" variants={scaleIn}>
            <motion.h3 className="helpline-heading" variants={fadeUp}>
              <span className="heading-line"></span>
              {t('helpline.heading')}
              <span className="heading-line"></span>
            </motion.h3>
            <motion.h4 className="helpline-subheading" variants={fadeUp}>
              {t('helpline.subheading')}
            </motion.h4>

            <motion.p className="helpline-paragraph" variants={fadeUp}>
              <Trans i18nKey="helpline.paragraph1" components={{ strong: <strong /> }} />
            </motion.p>

            <motion.p className="helpline-paragraph" variants={fadeUp}>
              {t('helpline.paragraph2')}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HelplineSection
