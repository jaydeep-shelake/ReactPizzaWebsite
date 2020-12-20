import styled from 'styled-components';
const featuredPic = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwohWnfJb041XVOY7og3avsaEn6ul2AG2kqQ&usqp=CAU`
export const FeatureContainer = styled.div`
 background:linear-gradient(to right,rgba(0,0,0,0.7),rgba(0,0,0,0.1)),url(${featuredPic});
 height:100vh;
 max-height:500px;
 background-position:center;
 background-size:cover;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 color:#fff;
 padding:0 1rem;
 h1{
     font-size:clamp(3rem,5vw,5rem)
 }
 p{
     font-size:clamp(1rem,3vw,2rem);
     margin-bottom:1rem;
 }
`;
export const FeatureBtn = styled.button`
font-size:1.4rem;
padding:0.6rem 3rem;
border:none;
background:#ffc500;
color: #000;
transition:0.2s ease-out;
&:hover{
    color:#fff;
    background:#e31837;
    transition:0.2s ease-out;
    cursor:pointer;
}
`