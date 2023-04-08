import React from 'react'
import About from '../sections/About'
import Hero from '../sections/Hero'
import Carousel from '../sections/Carousel'
import Tech from '../sections/Tech'
import theLocNar from '../../assets/images/the-loc-nar.jpg'
import twitterSS from '../../assets/images/twitter.png'
import websiteSS from '../../assets/images/website.png'

function Home() {
  const data = [
    {
      title: 'Personal Website',
      img: websiteSS,
      black: true,
      tech: ['JavaScript', 'React'],
      description:
        'A client-side website I developed to experiment with my design skills, and showcase my skills.',
      link: 'personal-website',
    },
    {
      title: 'Twitter Clone',
      img: twitterSS,
      black: true,
      tech: ['JavaScript', 'React', 'Firebase'],
      description:
        'A clone of twitter including CRUD operations and Google Authentication using Firebase.',
      link: 'twitter-clone',
    },
    {
      // eslint-disable-next-line quotes
      title: "Where's Waldo",
      img: theLocNar,
      tech: [
        'JavaScript',
        'React',
        'Firebase',
        'Google Auth',
        'JavaScript',
        'React',
        'Firebase',
        'Google Auth',
      ],
      description:
        // eslint-disable-next-line quotes
        "A Where's Waldo game using Firebase and React",
      link: 'wheres-waldo',
    },
  ]

  return (
    <main
      data-src={Home}
      className="w-full h-full flex flex-col justify-start items-center mb-10"
    >
      <Hero />
      <About />
      <section className="w-full lg:w-2/3" aria-label="projects-carousel">
        <Carousel dataArray={data} />
      </section>
      <Tech />
    </main>
  )
}

export default Home
