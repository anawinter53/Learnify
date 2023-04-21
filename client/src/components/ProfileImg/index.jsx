import React, { useState } from 'react';
import styles from './index.module.css';
import black from './imgs/black_profile_img.png';
import green from './imgs/green_profile_img.png';
import lightblue from './imgs/lightblue_profile_img.png';
import orange from './imgs/orange_profile_img.png';
import pink from './imgs/pink_profile_img.png';
import purple from './imgs/purple_profile_img.png';
import red from './imgs/red_profile_img.png'
import white from './imgs/white_profile_img.png';
import yellow from './imgs/yellow_profile_img.png';
import { FaUserCircle } from 'react-icons/fa';

export default function ProfileImg() {
  const [profileImages, setProfileImages] = useState(white)
  
  return (
    <FaUserCircle className={styles["image"]}/>
  )
}
