import React from 'react'

const Header = (props) => {
    return (
        <div className="header">
            <form>
                <input type="file" multiple onChange={(e) => props.upload(e)}/>
                    <p>Drag your files here or click in this area.</p>
            </form>
        </div>
    )
}

export default Header
