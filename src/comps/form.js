import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm=()=>{
    const [file,setFile]= useState(null);
    const [error,setError]= useState(null);
    const types=['image/png','image/jpeg'];
    const handleChange=(e)=>{
        let selected=e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }
        else{
            setFile(null);
            setError("Please select image of type 'jpeg' or 'png");
        }
    }
    return(
        <center>
        <form>
            <label>
                    <input className="inputs" type="file" onChange={handleChange}/>
            
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file &&<div className="file">{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
        </center>
    )
}
export default UploadForm;