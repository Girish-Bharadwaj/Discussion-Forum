import React from 'react'
import './Comments.css'
function Comments() {
    return (
        <div className="comments">
                <div className="comment">
                    <div className="authorComment">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png" alt="" srcset="" />
                    <div className="postedName">
                        <p>Andrew</p>
                        <div className="divider"></div> 
                        <p>6h</p>
                    </div>
                    </div>
                    <div className="body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus vitae accusamus sunt expedita iste. Eligendi voluptatum quam nobis necessitatibus. Quasi doloremque harum veritatis eligendi eaque laboriosam odio cumque unde est, culpa maxime molestias perferendis. Accusamus alias illo sed ut at repellat magni commodi cum maiores possimus minima ipsa minus incidunt, porro tempore.
                    </div>
                </div>
                <div className="comment">
                    <div className="authorComment">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png" alt="" srcset="" />
                    <div className="postedName">
                        <p>Andrew</p>
                        <div className="divider"></div> 
                        <p>6h</p>
                    </div>
                    </div>
                    <div className="body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus vitae accusamus sunt expedita iste. Eligendi voluptatum quam nobis necessitatibus. Quasi doloremque harum veritatis eligendi eaque laboriosam odio cumque unde est, culpa maxime molestias perferendis. Accusamus alias illo sed ut at repellat magni commodi cum maiores possimus minima ipsa minus incidunt, porro tempore.
                    </div>
                </div>
            </div>
    )
}

export default Comments
