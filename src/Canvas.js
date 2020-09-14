import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import ReactTooltip from "react-tooltip";


// moving image from gallery to canvas

const Canvas = (props) => {
    
 
    return (
        <>
       
            <div className="row justify-content-center" data-tip="Tap To Zoom Image">
              <div className="col-4">
                  <Zoom>
                      <img
                        alt="pic"
                        src={props.pic}
                        width="200"
                        data-tip="Tap To Zoom Image"
                        className="shadow-lg rounded float-left img-thumbnail py-2 px-2 my-1"
                      />
                  </Zoom>
              </div>
          </div>
          <ReactTooltip globalEventOff="click" />

        </>
    )
}

export default Canvas;
