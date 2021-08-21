import React, {useState} from 'react';
import {Container, Search, Logo, Wrapper,  CarrouselTitle, Carrousel, ModalTitle, ModalContent} from './styles'
import logo from '../../assets/logo.svg'
import TextField, { Input} from '@material/react-text-field'
import MaterialIcon from '@material/react-material-icon';
import restaurante from '../../assets/restaurante-fake.png'
import Slider from "react-slick";
import Card from '../../components/ImageCard';
import {RestaurantCard, Modal,  Map, Loader, Skeleton} from '../../components'
import {useSelector} from 'react-redux';





const Home = () => {
const [query, setQuery] = useState('');
const [value, setInputValue] = useState('');
const [open, setOpen] = useState(false);
const [placeId, setPlaceId] = useState(null);
const [modalOpened, setModalOpened] = useState(false);
const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  adaptiveHeight: true,
};




function handleKeyPress(e){
if(e.key=='Enter'){

  setQuery(value);
}

  
};

function handleOpenModal(placeId){
  setPlaceId(placeId);
  setModalOpened(true);
}

return(
  <Wrapper>
<Container>
  
  <Search><Logo src={logo} alt='imagem de logo' / >
  <TextField
          label='Pesquisa'
         //onTrailingIconSelect={() => this.setState({value: ''})}
          trailingIcon={<MaterialIcon role="button" icon="search"/>}
        ><Input
           value={value}
           outline
           onKeyPress={handleKeyPress}
           onChange={(e) => setInputValue(e.target.value)} />
        </TextField>
        
        {restaurants.length >0 ? (
          <>
  <CarrouselTitle>Na sua Área</CarrouselTitle>
  {/* trem pontos indica leitura de item a item */}

    
  <Carrousel {...settings}> 
    {restaurants.map((restaurant) => (
    < Card 
    key={restaurant.place_id}
    photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
    title={restaurant.name} />
    ))}

  </Carrousel>
  </>
  ) : (
   <Loader />
  )
}
  </Search>
  
  {restaurants.map((restaurant) => 
 
    
  <RestaurantCard 
  onClick = {() => handleOpenModal(restaurant.place_id)} 
  restaurant={restaurant}/>)



  
}
  

  </Container>
  <Map query={query} placeId={placeId}/> 
  <Modal open= {modalOpened} onclose={() => setModalOpened(!modalOpened) } >
    
    {restaurantSelected? (
    <>
    <ModalTitle>{restaurantSelected?.name}</ModalTitle>
  <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
  <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
  <ModalContent>{restaurantSelected?.opening_hours?.open_now ? 'Aberto Agora' : 'Fechado :/' }</ModalContent>
    
    </>) : (

      <>
      
      <Skeleton width='10px' height='10px' />
      <Skeleton width='10px' height='10px' />
      <Skeleton width='10px' height='10px' />
      <Skeleton width='10px' height='10px' />
      </>
    

    )
    
  
  }
  
  </Modal>
  
  
  </Wrapper>
  )
}
export default Home;

