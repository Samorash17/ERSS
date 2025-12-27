import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import '../styles/Hero.css';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import MarqueeBanner from './MarqueeBanner';

import cmImage from '../assets/CM.png';
import dgpImage from '../assets/DGP.jpg';
import buildingImageDay from '../assets/tsiccc_building_day1.jpg';
import buildingImageNight from '../assets/tsiccc_building_night.png';
import risingLogo from '../assets/pic-hero-rising.jpg';
import dial112Logo from '../assets/logo-dial-112.jpg';

// Service logo imports
import policeIcon from '../assets/Police.webp';
import ambulanceIcon from '../assets/Ambulance.jpg';
import fireIcon from '../assets/Fire.png';
import disasterIcon from '../assets/Disaster-Response.jpg';
import womenSafetyIcon from '../assets/Women-Safety.jpg';
import childProtectionIcon from '../assets/Child-Protection.png';

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

const Hero = () => {
  const getBuildingImage = () => {
    const hour = new Date().getHours()
    return hour >= 6 && hour < 18 ? buildingImageDay : buildingImageNight
  }

  const [buildingImage, setBuildingImage] = useState(getBuildingImage())
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setBuildingImage(getBuildingImage())
    }, 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  const serviceLogos = [
    { 
      name: t('hero.services.police'), 
      icon: policeIcon,
      alt: t('hero.services.police')
    },
    { 
      name: t('hero.services.ambulance'), 
      icon: ambulanceIcon,
      alt: t('hero.services.ambulance')
    },
    { 
      name: t('hero.services.fire'), 
      icon: fireIcon,
      alt: t('hero.services.fire')
    },
    { 
      name: t('hero.services.disaster'), 
      icon: disasterIcon,
      alt: t('hero.services.disaster')
    },
    { 
      name: t('hero.services.womenSafety'), 
      icon: womenSafetyIcon,
      alt: t('hero.services.womenSafety')
    },
    { 
      name: t('hero.services.childProtection'), 
      icon: childProtectionIcon,
      alt: t('hero.services.childProtection')
    },
  ]

  return (
    <>
      <MarqueeBanner />
      <section className="hero-container">
      <div className="hero-background">
        <div className="hero-gradient-orb hero-gradient-orb-1"></div>
        <div className="hero-gradient-orb hero-gradient-orb-2"></div>
        <div className="hero-grid-pattern"></div>
      </div>

      {/* LEFT SIDE */}
      <motion.div className="hero-left" initial="hidden" animate="visible" transition={{ staggerChildren: 0.2 }}>
        <motion.h3
            className="hero-subtitle"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="subtitle-line"></span>
            <span className="subtitle-text">{t('hero.subtitle')}</span>
            <span className="subtitle-line"></span>
          </motion.h3>
        {/* Dial 112 Logo at top */}
        <motion.div className="hero-dial-logo-section" variants={scaleIn}>
          <motion.div
            className="hero-dial-logo-wrapper"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={dial112Logo}
              alt="Emergency Response Support System - Dial 112"
              className="hero-dial-logo"
            />
          </motion.div>
        </motion.div>
              <motion.h1 className="hero-title" variants={fadeUp}>
            <span className="title-erss">{t('hero.title')}</span>
            <br />
            </motion.h1>
        <motion.div className="hero-services-section" variants={fadeUp}>
          <motion.div className="hero-services-grid">
            {serviceLogos.map((service, index) => (
              <motion.div
                key={index}
                className="service-logo-item"
                variants={scaleIn}
                custom={index}
                whileHover={{
                  scale: 1.2,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <div className="service-icon-wrapper">
                  <img
                    src={service.icon}
                    alt={service.alt}
                    className="service-icon"
                  />
                </div>
                <p className="service-name">{service.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Leadership Section below logo */}
        <motion.div className="hero-leadership-section" variants={fadeUp}>
          <motion.h2 className="hero-section-title" variants={scaleIn}>
            <span className="subtitle-line"></span>
            <span className="subtitle-text">{t('hero.leadership')}</span>
            <span className="subtitle-line"></span>
          </motion.h2>

          <motion.div className="hero-leadership" variants={fadeUp}>
            {/* Chief Minister Container */}
            <motion.div
              className="leader-profile"
              variants={scaleIn}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <div className="leader-card">
                <div className="leader-img-wrapper">
                  <motion.img
                    src={cmImage}
                    alt={t('hero.cmName')}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="leader-img-border"></div>
                </div>
                <h4 className="leader-name">{t('hero.cmName')}</h4>
                <p className="leader-title" dangerouslySetInnerHTML={{ __html: t('hero.cmTitle') }} />
              </div>
            </motion.div>

            {/* Director General of Police Container */}
            <motion.div
              className="leader-profile"
              variants={scaleIn}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <div className="leader-card">
                <div className="leader-img-wrapper-dgp">
                  <motion.img
                    src={dgpImage}
                    alt={t('hero.dgpName')}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="leader-img-border"></div>
                </div>
                <h4 className="leader-name">{t('hero.dgpName')}</h4>
                <p className="leader-title" dangerouslySetInnerHTML={{ __html: t('hero.dgpTitle') }} />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div className="hero-right" variants={slideInRight} initial="hidden" animate="visible">
        {/* Building Image at top */}
        <div className="hero-image-container">
          <motion.div className="hero-image-frame" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
            <motion.img
              key={buildingImage}
              src={buildingImage}
              alt="Command Control Centre"
              className="hero-main-image"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            <div className="image-corner image-corner-tl"></div>
            <div className="image-corner image-corner-tr"></div>
            <div className="image-corner image-corner-bl"></div>
            <div className="image-corner image-corner-br"></div>
          </motion.div>

          <motion.img
            src={risingLogo}
            alt="Telangana Rising 2047"
            className="hero-overlay-logo"
            initial={{ opacity: 0, y: -20, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: 1, duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          />
        </div>

        {/* ERSS Welcome Text below image */}
        <motion.div className="hero-text-content" variants={fadeUp}>
         

          <motion.h1 className="hero-title" variants={fadeUp}>

            <span className="title-highlight">{t('hero.welcomeTitle')}</span>
            <br />
            <span className="title-welcome">{t('hero.welcomeSubtitle')}</span>
          </motion.h1>
        </motion.div>
                <motion.div className="hero-text-content" variants={fadeUp}>
         

          <motion.h1 className="Mission-title" variants={fadeUp}>

            <span className="title-mission">{t('hero.missionTitle')}</span>
            <br />
            <span className="subtitle-mission">{t('hero.missionSubtitle')}</span>
          </motion.h1>
        </motion.div>
    
      </motion.div>
      
    </section>
    </>
  )
}

export default Hero
