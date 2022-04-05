import FacebookBoxLineIcon from 'remixicon-react/FacebookBoxLineIcon'
import WhatsappLineIcon from 'remixicon-react/WhatsappLineIcon'
import MapPinLineIcon from 'remixicon-react/MapPinLineIcon'

export const Footer = () => {
  return(
      <footer className="bg-orange-400 grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-3 md:grid-rows-1 py-10 px-5 text-white">
        <div className='flex items-center'>
            <h1 className="text-3xl font-bold">HogarPatitas</h1>
        </div>
        <div>
            <h1 className="text-3xl font-semibold">Servicios</h1>
            <ul>
                <li className="font-medium text-sm mt-2"><a href="#">Peluqueria y baño</a></li>
                <li className="font-medium text-sm mt-2"><a href="#">Vacunas</a></li>
                <li className="font-medium text-sm mt-2"><a href="#">Guarderia</a></li>
                <li className="font-medium text-sm mt-2"><a href="#">Seguros</a></li>
            </ul>
        </div>
        <div>
            <h1 className="text-3xl font-semibold">Contactenos</h1>
            <ul>
                <li className='flex text-sm font-medium gap-2 items-center mt-2'>
                    <FacebookBoxLineIcon/> HogarPatitasPage
                </li>
                <li className='flex text-sm font-medium gap-2 items-center mt-2'>
                    <WhatsappLineIcon/> +51 975-973-342
                </li>
                <li className='flex text-sm font-medium gap-2 items-center mt-2'>
                    <MapPinLineIcon/> Av Tomas Marzano, Santiago de Surco
                </li>
            </ul>
        </div>
    </footer>
  );
};
