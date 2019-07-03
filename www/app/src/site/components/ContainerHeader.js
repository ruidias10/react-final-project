import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class ContainerHeader extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;
//https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4
    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <header>
            <div className="overlay"></div>        
            <video src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" 
                  playsinline="playsinline" 
                  autoplay="autoplay" 
                  muted="muted" 
                  loop="loop">
            </video>
            <Carousel.Caption>
                <div className="text-left text-white align-middle">
                  <h1 className="display-3">Atonement</h1>
                  <p className="lead mb-0">From the award-winning director of Pride and Prejudice comes a stunning, critically acclaimed epic story of love. When a young girl catches her sister in a passionate embrace with a childhood friend, her jealousy drives her to tell a lie that will irrevocably change the course of all their lives forever. Academy AwardÂ® nominee Keira Knightley and James McAvoy lead an all-star cast in the film critics are hailing the year's best picture (Thelma Adams, US Weekly).</p>
                  <button type="button" className="pr-4 pl-4 mt-3 btn btn-danger">
                    <i className="fas fa-play mr-1"></i> PLAY
                  </button>
                </div>
          </Carousel.Caption>
          </header>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ContainerHeader;