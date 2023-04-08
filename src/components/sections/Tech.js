import React from 'react'

import Divider from '../common/Divider'

import html from '../../assets/icons/html5.png'
import css from '../../assets/icons/css3.png'
import js from '../../assets/icons/JavaScript.png'
import react from '../../assets/icons/react.png'
import nodejs from '../../assets/icons/nodejs.png'
import expressjs from '../../assets/icons/express.png'
import git from '../../assets/icons/git.png'
import github from '../../assets/icons/github.png'
import jest from '../../assets/icons/jest.png'
import webpack from '../../assets/icons/webpack.png'
import cSharp from '../../assets/icons/c#.png'
import tailwind from '../../assets/icons/tailwind.png'
import npm from '../../assets/icons/npm.png'
import mongodb from '../../assets/icons/mongodb.png'
import firebase from '../../assets/icons/firebase.png'
import unity from '../../assets/icons/unity.png'
import figma from '../../assets/icons/figma.png'
import linux from '../../assets/icons/linux.png'
import bootstrap from '../../assets/icons/bootstrap.png'
import vb from '../../assets/icons/vb.png'

function Tech() {
  const arr = [
    {
      img: js,
      alt: 'JavaScript',
    },
    {
      img: react,
      alt: 'React',
    },
    {
      img: nodejs,
      alt: 'NodeJS',
    },
    {
      img: expressjs,
      alt: 'ExpressJS',
    },
    {
      img: mongodb,
      alt: 'MongoDB',
    },
    {
      img: jest,
      alt: 'Jest',
    },
    {
      img: git,
      alt: 'Git',
    },
    {
      img: html,
      alt: 'HTML5',
    },
    {
      img: css,
      alt: 'CSS3',
    },

    {
      img: firebase,
      alt: 'Firebase',
    },

    {
      img: github,
      alt: 'GitHub',
    },
    {
      img: npm,
      alt: 'npm',
    },
    {
      img: webpack,
      alt: 'Webpack',
    },
    {
      img: tailwind,
      alt: 'TailwindCSS',
    },
    {
      img: bootstrap,
      alt: 'Bootstrap',
    },

    {
      img: linux,
      alt: 'Linux',
    },
    {
      img: figma,
      alt: 'Figma',
    },
    {
      img: cSharp,
      alt: 'C#',
    },
    {
      img: vb,
      alt: 'Visual Basic',
    },
    {
      img: unity,
      alt: 'Unity',
    },
  ]

  return (
    <section className="w-full md:w-96 flex flex-col gap-3 justify-start items-center">
      <h3 className="text-xl tracking-widest text-gray-500 tracking-wider	">
        Tech
      </h3>
      <Divider colour="gray" height="1px" />
      <div className="grid w-full max-w-xl h-full grid-cols-4">
        {arr.map((t) => (
          <div className="w-full h-full flex justify-center items-center">
            <img alt={t.alt} src={t.img} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tech
