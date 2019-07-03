import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'


class ContainerMoviesList extends React.Component {

  render() {
    return (
      <div>
        <div class="h-100 mw-100">
          <div class="d-flex h-100 text-left align-items-end">
            <div class="text-white pb-3 pt-5">
              <h2 class="display-6">{this.props.category}</h2>
            </div>
          </div>
        </div>
        
        <CardGroup>
          {this.renderCard(this.props.cardImgs)}
        </CardGroup>
      </div>
    );
  }

  renderCard (cardImgs) {
    const result = [];

    cardImgs.forEach(cardImg => {
      result.push (
        <Card border="dark" bg="dark">
          <Card.Img variant="top" src={cardImg} />
        </Card> 
      );
    });

    return result;
  }


}

export default ContainerMoviesList;