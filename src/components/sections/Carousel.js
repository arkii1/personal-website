import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import propTypes from 'prop-types'
import './styles.css'
import { Link } from 'react-router-dom'

// eslint-disable-next-line no-unused-vars
function Carousel({ dataArray = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <div className="relative w-full h-96 rounded-lg shadow-md overflow-hidden">
        <div ref={sliderRef} className="keen-slider w-full h-full">
          {dataArray.map((data) => (
            <Link
              to={data.link}
              className={`keen-slider__slide relative bg-green-600 text-center text-${
                data.black ? 'black' : 'white'
              }`}
            >
              <div
                className={`shadow-lg rounded-lg absolute left-1/2 top-1/2 z-50 flex flex-col items-center justify-center p-5 ${
                  data.black ? 'border-black' : 'border-white'
                } border-solid border-2`}
                style={{
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <h4 className="text-3xl font-medium p-3 drop-shadow-lg">
                  {' '}
                  {data.title}
                </h4>
                <p
                  className={`px-2 ${data.black ? 'text-black' : 'text-white'}`}
                >
                  {data.description}
                </p>
                <div className="w-96 flex flex-wrap gap-3 justify-center items-start mt-3">
                  {data.tech.map((tech) => (
                    <div
                      className={`rounded-full  p-2  shadow-lg ${
                        data.black ? 'border-black' : 'border-white'
                      } border-solid`}
                      style={{ borderWidth: '1px' }}
                    >
                      {' '}
                      {tech}
                    </div>
                  ))}
                </div>{' '}
              </div>
              {data.img && (
                <>
                  {/* <div className="bg-black/10 fixed inset-0 w-full h-full z-30" /> */}
                  <img
                    className="w-full h-full object-cover"
                    alt=""
                    src={data.img}
                  />
                </>
              )}
            </Link>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="flex justify-center mt-4">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => (
            <button
              type="button"
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx)
              }}
              className={`mx-2 ${
                currentSlide === idx ? 'bg-white' : 'bg-gray-200'
              } rounded-full h-2 w-2`}
            />
          ))}
        </div>
      )}
    </>
  )
}

Carousel.propTypes = {
  dataArray: propTypes.arrayOf(propTypes.shape).isRequired,
}

export default Carousel

function Arrow({ disabled, onClick, left }) {
  const disabeld = disabled ? ' arrow--disabled' : ''
  return (
    <svg
      onClick={onClick}
      className={`z-50 arrow ${
        left ? 'arrow--left' : 'arrow--right'
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  )
}

Arrow.propTypes = {
  disabled: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
  left: propTypes.bool.isRequired,
}
