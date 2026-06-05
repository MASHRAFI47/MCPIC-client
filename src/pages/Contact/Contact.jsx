import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

import Lottie from "lottie-react";
import contactAnimation from "../../assets/contact.json";
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import { GoHorizontalRule } from 'react-icons/go';
import Title from '../../components/Title/Title';



const Contact = () => {
  const { theme } = useAuth()

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(`${import.meta.env.VITE_Email_Service_Id}`, `${import.meta.env.VITE_Email_Template_Id}`, form.current, {
        publicKey: `${import.meta.env.VITE_Email_Public_Key}`,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Message Sent")
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <section className={`${theme === "" ? "" : ""} px-8 md:px-10 lg:px-0 py-20 hero-grid`}>
      <Helmet>
        <title>MCPIC | Contact</title>
      </Helmet>

      <div className='container mx-auto'>

        {/* <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form> */}



        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
          <div data-aos="fade-right">

            <div data-aos="fade-right" data-aos-delay="300">
              <div className="flex flex-col gap-3">
                <p className="tags text-[11px] pt-2 flex items-center font-semibold tracking-widest gap-2"><GoHorizontalRule className='scale-x-150' />GET IN TOUCH</p>
                <Title className="uppercase">QUESTIONS?
                  <br />
                  WE'RE HERE
                  <br />
                  FOR YOU.</Title>
                <p className="text-[0.95rem] mt-3">Have questions, reports, or feedback? Reach out to the MCPIC <br /> team and we'll get back to you as soon as possible.</p>
              </div>
            </div>

            <Lottie animationData={contactAnimation} loop={true} className='w-80' />
          </div>
          <div data-aos="slide-up" data-aos-delay="800">
            <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-[#0b1514] border border-[#102b28] mx-auto">
              <form className="card-body" ref={form} onSubmit={sendEmail}>
                <h3 className='text-[#e8f5f3] tracking-wider text-lg'>Send a Message</h3>
                <p>We typically respond within 24–48 hours.</p>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#4a6564]">Full Name</span>
                  </label>
                  <input type="text" placeholder="Your full name" className="input input-bordered bg-[#0d1c1a] text-[#e8f5f3] placeholder:text-[#4a6564]" name="user_name" required />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#4a6564]">Email</span>
                  </label>
                  <input type="email" placeholder="your@gmail.com" className="input input-bordered bg-[#0d1c1a] text-[#e8f5f3] placeholder:text-[#4a6564]" name="user_email" required />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text text-[#4a6564]">Message</span>
                  </label>
                  <textarea className="textarea textarea-bordered w-full bg-[#0d1c1a] text-[#e8f5f3] placeholder:text-[#4a6564]" rows={4} placeholder="Write your message here..." name="message" required></textarea>
                </div>
                <div className="form-control mt-6">
                  <input type="submit" className="text-sm font-semibold py-2 rounded-2xl md:mr-5 px-5 border-[#30c4b6] bg-[#30c4b6] text-[#080f0e] hover:bg-[#1c9e92] hover:border-[#30c4b6] transition-all ease-in-out duration-1000" value="Send Message" />
                </div>

              </form>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Contact