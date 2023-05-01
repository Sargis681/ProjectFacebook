import React from 'react'
import "./ListGrid.css"
function ListGrid() {
    return (
        <div className='listGrid'>
            <div className="list-1">
                <h4>Posts</h4>
                <div>
                    <span>Filters</span>
                    <span>Manage posts</span>
                </div>
            </div>
            <hr />
            <div className="list-2">
                <div>
                    <span>List view</span>
                    <hr />
                </div>
                <span>Grid view</span>
            </div>
        </div>
    )
}

export default ListGrid