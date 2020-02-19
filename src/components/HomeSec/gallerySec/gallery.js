import React from 'react'
import ModalVideo from 'react-modal-video'
 import vimg from '../../../images/videimage.jpg';
 import '../../../../node_modules/react-modal-video/css/modal-video.min.css';
 import { FaPlayCircle } from "react-icons/fa";
import styled from 'styled-components'
import Gal from './galleryAnim'
class VideoGallery extends React.Component {
 
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
 
  openModal () {

    this.setState({isOpen: true})
  }
 
  render () {
    return (
      <VgalleryWrap >
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='z1KPSqwImqE' onClose={() => this.setState({isOpen: false})} />

        {/* <div className="vimg">
<img src={vimg} width="100%" height="400px" onClick={this.openModal}/>
<FaPlayCircle onClick={this.openModal}/>

        </div> */}

        <Gal onclik={this.openModal}/>
        
      </VgalleryWrap>
    )
  }
}

const VgalleryWrap = styled.div`
padding-top:2rem;
.vimg{

position:relative;
width:100%;
height:100%;
overflow:hidden;
border-radius:0.4rem;
cursor: pointer;
border:1rem solid rgba(255,255,255,0.1);
transform:scale(0.8);
opacity:0;
transform-origin:bottom;

&:hover{

    svg{

        color:#66271C;
        transform-origin:center;
        position:absolute;
    top:50%;
    left:50%;
    }
}

svg{

    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    color:#f5f5f5;
    font-size:3rem;
    transition:0.5s;
    
}


}

`
export default VideoGallery;