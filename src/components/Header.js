import React from 'react'

const Header = (props) => {
    return (
        <div className = 'header'>
            <input type = 'file' id = 'file' className = 'input-file' multiple onChange={(e) => props.upload(e)}/>
            <label htmlFor = 'file' className = 'upload'>Drag your files here or click in this area</label>
        </div>
    )
}

export default Header
