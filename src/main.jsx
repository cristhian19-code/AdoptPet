import ReactDOM from 'react-dom'
import { AdoptPet } from './AdoptPet'

import "swiper/css"
import "swiper/css/navigation"
import './index.css'

import SwiperCore,{
  Navigation
} from 'swiper'

SwiperCore.use([ Navigation ]);

ReactDOM.render(
  <AdoptPet />,
  document.getElementById('root')
)
