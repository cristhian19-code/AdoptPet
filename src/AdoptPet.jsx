import { Navbar } from "./components/Navbar";
import { motion } from 'framer-motion';
import {Swiper,SwiperSlide} from 'swiper/react'
import { useState } from "react";

import patas from './assets/patas.png'
import about from './assets/about.png'
import { Footer } from "./components/Footer";

export const AdoptPet = () => {
  const [ pets, setPets] = useState([
    {name: 'Perros',img: 'https://images.pexels.com/photos/936317/pexels-photo-936317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {name: 'Gatos', img: 'https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {name: 'Conejos', img: 'https://images.pexels.com/photos/7408291/pexels-photo-7408291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {name: 'Cuyes', img: 'https://img.lalr.co/cms/2014/02/13212008/cuyes0129-1000.jpg?size=sm&ratio=sq&f=jpg'},
  ])
  const [services, setServices] = useState([
    {name: 'Vacunacion', img: 'https://images.pexels.com/photos/7469223/pexels-photo-7469223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {name: 'Peluqueria y baño', img: 'https://images.pexels.com/photos/1436139/pexels-photo-1436139.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {name: 'Revision General', img: 'https://images.pexels.com/photos/6235648/pexels-photo-6235648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {name: 'Guarderia', img: 'https://images.pexels.com/photos/3448793/pexels-photo-3448793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {name: 'Seguros', img: 'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/requisitos-seguro-perros.jpg'},
    {name: 'Funeraria', img: 'https://www.hogarmania.com/archivos/201610/mascotas-muerte-entierro-XxXx80.jpg'},
  ]);

  return (
    <>
      <Navbar />
      <div
        style={
          {
            backgroundImage: 'url(https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '90vh',
          }}
        className="flex items-center justify-start p-10 relative mt-10">
        <div className="absolute top-20">
          <motion.h1
            initial={{translateX: -200,opacity: 0}}
            animate={{translateX: 0, opacity: 1}}
            transition={{duration: 1.5,delay: .8}}
            className="text-7xl text-orange-400 font-semibold font-kite"
          >
            HogarPatitas
          </motion.h1>
          <motion.p
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5,delay: 2.5}}
            className="text-md mt-5 font-semibold text-orange-400"
          >Adopta a un amiguito y ten una vida lleva de felicidad</motion.p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-20 px-6">
        <h1 className="text-5xl text-orange-400 mb-8 flex items-center gap-4">Mascotas <img className="h-7" src={patas} alt=""/></h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          className="mySwiper mt-10 flex items-center"
          loop={true}
          navigation={true}
          breakpoints={
            {
              320: {
                slidesPerView: 1,
                spaceBetween: 40
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }
          }
        >
          {
            pets.map((pet,index)=>(
              <SwiperSlide className="h-96" key={pet.name}>
                  <div className="cursor-pointer absolute text-transparent rounded-sm w-full h-full hover:bg-orange-300/70 hover:text-white flex items-center justify-center transition-all">
                    <h1 className="text-3xl font-semibold">{pet.name}</h1>
                  </div>
                  <img className="rounded-sm" src={pet.img} alt=""/>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <div className="mt-20 flex flex-col items-center md:h-screen">
        <h1 className="text-5xl text-orange-400 mb-8 flex items-center gap-4">Servicios <img className="h-7" src={patas} alt=""/></h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
          {
            services.map((service,index)=>(
              <div key={service.name} className="col-span-1 py-4 flex flex-col items-center">
                <img className="h-52 w-full rounded-2xl" src={service.img} alt="" />
                <h1 className="text-lg text-center text-gray-500 font-bold mt-3">{service.name}</h1>
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center h-screen mb-10 md:mb-0">
          <img src={about} alt="" />
          <div className="px-10">
            <h1 className="text-3xl font-bold text-orange-400">Nosotros</h1>
            <p className="text-gray-500/80 font-medium">Somos una organizacion con mas de 5 años de dar en adopcion mascotas a familian que quieran tener a un compañero de vida y darles toda la felicidad que se merecen.</p>
          </div>
      </div>
      <Footer/>
    </>
  )
};
