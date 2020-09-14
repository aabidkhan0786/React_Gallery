import React,{useState} from 'react'
import Gallery from './Gallery'
import Canvas from "./Canvas"
import RefreshIcon from '@material-ui/icons/Refresh';
import ReactTooltip from "react-tooltip";



const Structure = (props) => {
    const [img,setImg] = useState([]);

    const Image=(id,url)=>{
        console.log("clicked");
        console.log(id,url);
        setImg((pic)=>{
            return [...pic,url];
        })
       
    }

    // console.log(props.url);

    // refreshing page
  const Refresh=()=>{
    window.location.reload();
    
  }
    return (
        <>
            <div className="container">
                <h1 className="text-center my-4 "><u>Image Gallery!!</u></h1>
            <div class="row">
                <div class="col-sm-9 col-md-6 col-lg-7 mx-auto" style={{background:"#B33771"}} >
                    <div className="container canvas_head my-3">
                        <div className="row">
                            <div className="col"><h1 className="mt-2"><u>Canvas</u></h1></div>
                            <div className="col"><button className="btn btn-dark float-right py-2 my-2" data-tip="Refresh To Clear Canvas" onClick={Refresh}><RefreshIcon /><u className="mx-2">Refresh</u></button></div>
                            <ReactTooltip globalEventOff="click" />
                        </div>
                    </div>
                    {
                        img.map((val,index)=>{
                            return <Canvas
                            key = {index}
                            pic = {val}
                            />
                        })
                    }
                    
               
                </div>
                <div class="col-sm-3 col-md-6 col-lg-5 mx-auto"  style={{background:"#e66767"}}>
                    <Gallery ShowImg={Image}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Structure;
