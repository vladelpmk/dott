import React from 'react';

interface Props {
    onClick: Function,
    activeIndex: number
}
 
export default class Next extends React.Component<Props> {
  public render () {
    const {onClick, activeIndex} = this.props;

    if(activeIndex === 0) {
      return (<></>);
    }
    
    return (
      <a className="carousel-control-prev" href="#prev" onClick={onClick(activeIndex-1)} role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    );
  }
}