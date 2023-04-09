import React from 'react'
import About from '../sections/About'
import Hero from '../sections/Hero'
import Carousel from '../sections/Carousel'
import Tech from '../sections/Tech'
import theLocNar from '../../assets/images/the-loc-nar.jpg'
import ContactForm from '../sections/ContactForm'

function Home() {
  const data = [
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
      id="home"
      data-src={Home}
      className="w-full h-full flex flex-col justify-start items-center"
    >
      <Hero />
      <About />
      <section className="w-full lg:w-2/3" aria-label="projects-carousel">
        <Carousel dataArray={data} />
      </section>
      <Tech />
      <ContactForm />
    </main>
  )
}

export default Home
