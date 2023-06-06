import React, { useState } from 'react';
import Info from '../../components/Info';
import {  FaDownload} from './../../../node_modules/react-icons/fa/index.esm';
import cv from '../../assets/cv.pdf'
import './About.css'
import Skills from '../../components/Skills';
import { resume } from '../../assets/data';
import ResumeItem from '../../components/ResumeItem';
import Loading from '../home/loading'

const b = 0;
const About = () => {
  const {isPending} = Loading();
  const styles = {
    border : b,
  }
  return (
    <main className="section container">
      {isPending && <div className='loader'></div>}
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Infos</h3>

            <ul className="info__list grid">
              <Info/>
            </ul>

            <a href={cv} download='' className="button">
              Download Cv
              <span className="button__icon">
                <FaDownload/>
              </span>
            </a>
          </div>

          <div className="map grid">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.3739217637467!2d10.7374697175899!3d34.73962373075212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1301d33366b32ed7%3A0xaa13609437f5060a!2sRoute%20Manzel%20Chaker%2C%20Sfax!5e1!3m2!1sfr!2stn!4v1686080861616!5m2!1sfr!2stn"  width="600" height="400" style={styles} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>          
          </div>
        </div>
      </section>


      <div className="separator"></div>

      <section className='skills'>
        <h3 className="section__subtitle subtitle__center">My Skills</h3>

        <div className="skills__container grid">
          <Skills/>
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume">
        <h3 className="section__subtitle subtitle__center">
        Community Life & Education
        </h3>

        <div className="resume__container grid">
          <div className="resume_data">
            {
              resume.map((val)=>{
                if(val.category === 'experience'){
                  return <ResumeItem key={val.id} {...val}/>
                }
              })
            }
          </div>
          <div className="resume_data">
            {
              resume.map((val)=>{
                if(val.category === 'education'){
                  return <ResumeItem key={val.id} {...val}/>
                }
              })
            }
          </div>
        </div>

        

      </section>

    </main>
  )
}

export default About