import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import RefreshIcon from '@material-ui/icons/Refresh';
import "../src/index.css"
import ReactTooltip from "react-tooltip";

const Gallery = (props) => {

  // API call using unsplash
  const [images,setImages] = useState([]);
  useEffect(() => {
      const apiLink = "https://api.unsplash.com";
      const id = "QoEvgU3mzCYi7gzUQ2FwTVIvLtmuy_8rthApGgutBrg";
      
      Axios
      .get(`${apiLink}/photos/random?client_id=${id}&count=10`)
      .then(res => setImages([...images,...res.data]))
  
  },[])

  // passing particular  image from gallery to canvas
  const ShowImage = (id,url)=>{
    console.log(id,url);
    props.ShowImg(id,url);
   
  }
 
  // refreshing page
  const Refresh=()=>{
    window.location.reload();
    
  }

    return (
        <>
      
          <div className="container gallery my-3">
              <div className="row">
                <div className="col"><h1 className="mt-2"><u>Gallery</u></h1></div>
                <div className="col"><button className="btn btn-dark float-right py-2 my-2" data-tip="Refresh To Get New Images" onClick={Refresh}><RefreshIcon /><u className="mx-2">Refresh</u></button></div>
                </div>
          </div>
 
              {
                  images.map(image => (
                          <img src={image.urls.thumb}
                            id={image.id} alt="img" 
                            className="rounded float-left img-thumbnail py-2 px-2 my-1 mx-auto" 
                            data-tip="Tap To Move To Canvas "
                            onClick={()=>{
                              ShowImage(image.id,image.urls.thumb);
                            }}
                            />
                        ))
                }    
            <ReactTooltip globalEventOff="click" />
        </>
    )
}

export default Gallery;
