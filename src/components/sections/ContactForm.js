/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Divider from '../common/Divider'

function ContactForm() {
  return (
    <div
      id="contact"
      className="bg-sky-500 mt-3 py-5 w-screen flex flex-col justify-start items-center"
    >
      <label className="w-full md:w-2/3 flex flex-col justify-start items-center gap-3 float-left">
        <h3 className="text-xl tracking-widest text-white tracking-wider	">
          Contact me below!
        </h3>
        <Divider colour="white" height="1px" />
        <label className="w-full flex flex-col justify-start items-start text-white gap-3">
          <input
            type="email"
            className="outline-none border-white focus:border-amber-400 border-2 border-solid shadow-lg w-full rounded p-2"
            placeholder="What's your email?"
          />
        </label>
        <textarea
          className="resize-none outline-none border-white border-solid focus:border-amber-400 border-2 shadow-lg w-full rounded p-2"
          name="postContent"
          rows={12}
          cols={40}
          placeholder="What message you would like to send?"
        />
        <button
          type="button"
          className="w-max outline-none border-none rounded text-sky-500 bg-white font-medium tracking-widest hover:bg-amber-400  hover:text-white duration-300 px-6 py-3 shadow-lg"
        >
          Send
        </button>
      </label>
    </div>
  )
}

export default ContactForm
