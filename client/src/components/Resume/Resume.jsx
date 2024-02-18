import React from 'react'
// import "./../Resume.css"

const Resume = () => {
  return (
   <>
    <div  className = "resume">
      <div  className = "rheading ">
        <h1>Resume</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, optio.lorem5 Lorem ipsum dolor sit.</p>
        <div  className="up_date">
          <div>
          <h1>Resume.2024</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div  className="rbutton ">
            <button  className="button">g</button>
            <button  className="button">g</button>
          </div>
        </div>
      </div>
    {/* <label for="formFile"  className="form-label">Default file input example</label> */}
    <div  className = "inputfield ">
    <div  className="mb-3 d-flex ">
  <label for="formFile"  className="form-label">Default file input example</label>
  <input  className="form-control" type="file" id="formFile"/>
</div>
    </div>
    
      

      
       
    </div>
    </>
  )
}

export default Resume