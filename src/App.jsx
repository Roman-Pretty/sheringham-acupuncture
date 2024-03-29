import { Phone, Mail } from 'lucide-react';
import Image from './assets/BAcC-Member-Logo-1.png'
import ImageB from './assets/PSA_AR_mark.png'
import Flower from './assets/logo.png'
import React, { useRef, useState } from 'react';

const App = () => {
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    setDone(true);
    e.preventDefault();

    emailjs
      .sendForm('service_o4gvwyg', 'template_w2txwu5', form.current, {
        publicKey: 'xtrQeFeoBWG_peVu5',
      })
      .then(
        () => {
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
  return (
    <main>

      <div className="navbar bg-primary py-8 px-32 hidden lg:flex">
        <img src={Flower} alt="Sheringham Acupuncture" className='max-w-36'/>
        <h1 className="text-6xl font-semibold text-primary-content text-center items-center justify-center flex-1">Sheringham Acupuncture</h1>
        <img src={Flower} alt="Sheringham Acupuncture" className='max-w-36'/>
      </div>
      
      <div className="hero min-h-[80vh] bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-semibold">Welcome to Sheringham Acupuncture</h1>
            <h2 className="text-3xl font-light pt-4">Acupuncture and Chinese Medicine</h2>
            <p className="mt-5 text-lg">Sheringham Acupuncture is a friendly and professional acupuncture clinic in the heart of Sheringham,
              Norfolk. We offer acupuncture with cupping, moxibustion and shiatsu.
              <br />Sheringham Acupuncture is led by <span className='font-semibold'>Saffron Pretty BSc. (Hons) Lic.Ac. MBAaC.</span></p>
            <div className="flex flex-col justify-center pl-10 lg:pl-0 lg:justify-between mt-10 md:flex-row">
              <div className="flex items-center gap-2">
                <Phone />
                <a href='tel:+44-7958-289-016' className="text-lg">+44 7958 289 016</a>
              </div>
              <div className="flex items-center gap-2  hidden sm:flex">
                <Mail />
                <a href='mailto:saffron@sheringhamacupuncture.co.uk' className="text-lg">saffron@sheringhamacupuncture.co.uk</a>
              </div>
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
            <form className="card-body" ref={form} onSubmit={sendEmail}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered" name="name" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email" className="input input-bordered" name="email" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea placeholder="Message" className="textarea h-24 textarea-bordered resize-none" name="message" required></textarea>
              </div>
              {(!done) ? <div className="form-control mt-6"><button className="btn btn-primary">Contact</button></div> : <div className="form-control mt-6"><button className="btn btn-primary btn-disabled">Message Sent Successfully</button></div>}
            </form>
          </div>
        </div>
      </div>
      <hr />
      <footer className="footer items-center py-4 lg:px-32 text-black">
        <aside className="items-center grid-flow-col gap-10">
          <a href="https://acupuncture.org.uk/" target="_blank" rel="noreferrer">
            <img src={Image} alt="Sheringham Acupuncture" className='max-w-32' />
          </a>
          <a href="https://www.professionalstandards.org.uk/home" target="_blank" rel="noreferrer">
            <img src={ImageB} alt="Sheringham Acupuncture" className='max-w-32' />
          </a>

        </aside>
        <nav className="grid-flow-col gap-10 md:place-self-center md:justify-self-end">
          <a href="mailto:saffron@sheringhamacupunture.co.uk" className='flex gap-2 font-bold items-center'><Mail /> Email</a>
          <a href="tel:+44-7958-289-016" className='flex gap-2 font-bold items-center'><Phone /> Call</a>
        </nav>
      </footer>
    </main>
  )
}

export default App