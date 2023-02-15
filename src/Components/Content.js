import React from "react";
import { ContentData } from "./ContentData";
import Button from "react-bootstrap/Button";
function Content() {
  return (
    <>
    <div style={{marginLeft:'140px'}}>
      <div className='d-flex justify-content-evenly flex-row align-items-center flex-wrap '>
        {ContentData.map((data) => {
          return (
            <>
              
                <div className="content">
                  <div>
                  <img
                    src={data.url}
                    alt="image"
                    style={{ width: "200px", height: "100px" }}
                  />
                  <h5>{data.name}</h5>
                  <div>Last Updated :{data.date}</div>
                  <span>Lessons :{data.lesson}</span>
                  <span>Minutes :{data.Minutes}</span>
                  </div>
                  <Button variant="primary" style={{marginTop:'30px',marginLeft:'45px'}}>Marketing</Button>
                </div>
                

            </>
          );
        })}
        </div>
        </div>
    </>
  );
}

export default Content;
