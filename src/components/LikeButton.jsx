import React, { useState } from "react";
/* 
const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <>
      {!isLiked && <button onClick={() => setIsLiked(true)}>Like</button>}
      {isLiked && <p>Liked</p>}
    </>
  );
};
 */

class LikeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLiked: false
        }
    }
    
    render() {
        return (
            <>
              {!this.state.isLiked && <button onClick={() => this.setState({isLiked: true})}>Like</button>}
              {this.state.isLiked && <button onClick={() => this.setState({isLiked: false})}>Liked</button>}
            </>
          );
    }
}

export default LikeButton;
