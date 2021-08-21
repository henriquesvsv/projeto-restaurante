import styled from 'styled-components';
import Slider from "react-slick";


export const Container = styled.aside`
  background-color: ${(props)=>props.theme.colors.primary};
  width:360px;
  height: 100vh;
  overflow-y: auto;
  `;
export const Wrapper = styled.div`
  display:flex;
  display-direction:flex-direction;

`;

export const Carrousel = styled(Slider)`
  .slick-slide {
    margin-right: 30px; 
   S
  }
`;

export const Map = styled.div`
  background-color: ${(props)=> props.theme.colors.mapcolor};
  width:100%;
`;
  export const Search = styled.section`
  display:flex;
  flex-direction:column;
  justify-content:center;
  background-color:#ffffff;
  padding:16px;
  `;

  export const Logo = styled.img`
    margin-bottom: 15px;
  `;

  export const CarrouselTitle = styled.h1`
    font-family: ${(props)=> props.theme.fonts.regular};
    color: ${(props)=> props.theme.colors.text};
    font-size:24px;
    font-weight:bold;
    line-height:29px;
    margin: 16px 0;
  
  `;

  export const ModalTitle = styled.p`
  margin-bottom:10px;
  letter-spacing:0.11px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props)=> props.theme.colors.text};
  text-transform:none;
  line-height:29px;
  font-size:24px;
  font-weight:bold;
  
  `;

  export const ModalContent = styled.p`
  
  margin-bottom:10px;
  color: ${(props)=> props.theme.colors.text};
  font-weight: normal;
  line-height: 19px;
  font-size: 16px;
  
  `;