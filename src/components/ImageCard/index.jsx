import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ImageSkeleton  from '../ImageSkeleton'

const Card = styled.div`
display:flex;
height:90px;
width:90px;
border-radius:6px;
background-image: url(${(props)=>props.photo});
justify-content:center;

background-size:cover;

`;

const Title = styled.span`
font-family: ${(props=>props.theme.fonts.regular)};
color: #ffffff;
font-size:16px;
margin-top: 10px;
margin-left:10px;

`;

const ImageCard = ({photo, title}) => {

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {

    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => setImageLoaded(true);

  }, [photo]);

  return (

<>
{imageLoaded? (

 <Card photo ={photo} >

   <Title>{title}</Title>
 </Card>
) : (

  <ImageSkeleton  width="90px" height="90px" />
)}
 </>
);
};
export default ImageCard;