import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import '../styles/Hero.css';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import mapImage from '../assets/pic-hero-1.png';
import policeLogo from '../assets/pic-hero-2.jpg';
import cmImage from '../assets/pic-hero-3_mod.png';
import dgpImage from '../assets/pic-hero-4_mod.png';
import buildingImageDay from '../assets/tsiccc_building_day.png';
import buildingImageNight from '../assets/tsiccc_building_night.png';
import risingLogo from '../assets/pic-hero-rising.jpg';

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

  return (
    <section className="hero-container">
      <div className="hero-background">
        <div className="hero-gradient-orb hero-gradient-orb-1"></div>
        <div className="hero-gradient-orb hero-gradient-orb-2"></div>
        <div className="hero-grid-pattern"></div>
      </div>

      <div className="hero-content-wrapper">
        {/* LEFT SIDE */}
        <motion.div className="hero-left" initial="hidden" animate="visible" transition={{ staggerChildren: 0.2 }}>
          <motion.div className="hero-top-logos" variants={slideInLeft}>
            <motion.div
              className="hero-logo-wrapper"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={mapImage || "/placeholder.svg"} alt="Telangana Map" className="hero-map" />
            </motion.div>
            <motion.div
              className="hero-logo-wrapper"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={policeLogo || "/placeholder.svg"} alt="Telangana Police Logo" className="hero-police-logo" />
            </motion.div>
          </motion.div>

          <motion.div className="hero-text-content" variants={fadeUp}>
            <motion.h3
              className="hero-subtitle"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="subtitle-text">{t('hero.subtitle')}</span>
              <span className="subtitle-line"></span>
            </motion.h3>

            <motion.h1 className="hero-title" variants={fadeUp}>
              <Trans i18nKey="hero.title" />
            </motion.h1>

            <motion.h2 className="hero-section-title" variants={scaleIn}>
              <span className="section-title-decorator">━━</span>
              {t('hero.leadership')}
              <span className="section-title-decorator">━━</span>
            </motion.h2>
          </motion.div>

          <motion.div className="hero-leadership" variants={fadeUp}>
            {[
              {
                img: cmImage,
                name: t('hero.cmName'),
                title: t('hero.cmTitle'),
              },
              {
                img: dgpImage,
                name: t('hero.dgpName'),
                title: t('hero.dgpTitle'),
              },
            ].map((leader, index) => (
              <motion.div
                className="leader-profile"
                key={index}
                variants={scaleIn}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <div className="leader-card">
                  <div className="leader-img-wrapper">
                    <motion.img
                      src={leader.img}
                      alt={leader.name}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="leader-img-border"></div>
                  </div>
                  <h4 className="leader-name">{leader.name}</h4>
                  <p className="leader-title" dangerouslySetInnerHTML={{ __html: leader.title }} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="hero-right" variants={slideInRight} initial="hidden" animate="visible">
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
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
