import React from "react";

import './posts.css';
import fire from '../../fire';

class Posts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    

    render() {
        return (
            <div className="postWrapper">
                <a href="#">
                    <div className="post">
                        <div className="postHeading">
                            <h5>Are you really doing what you think you are doing?</h5>
                        </div>
                        <div className="postImage pi1"></div>
                        <div className="postContent">
                            <p className="postFirstLine">There’s a huge difference between things that you do and things that you think you are doing.</p>
                            <p className="postDate">30th July, 2018</p>
                        </div>
                    </div>
                </a>

                <a href="#">
                    <div className="post">
                        <div className="postHeading">
                            <h5>Distract your distractions.</h5>
                        </div>
                        <div className="postImage pi2"></div>
                        <div className="postContent">
                            <p className="postFirstLine">It just take couple of seconds to stop yourself from being distracted.</p>
                            <p className="postDate">15th July, 2018</p>
                        </div>
                    </div>
                </a>

                <a href="#">
                    <div className="post">
                        <div className="postHeading">
                            <h5>Change for good.</h5>
                        </div>
                        <div className="postImage pi3"></div>
                        <div className="postContent">
                            <p className="postFirstLine">The day you will remove your focus from the end result and make the process your cynosure, things will start changing.</p>
                            <p className="postDate">10th July, 2018</p>
                        </div>
                    </div>
                </a>
            </div>
        )
    }

}

export default Posts;