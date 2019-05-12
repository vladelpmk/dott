import React from 'react';

interface Props {
    onClick: Function,
    activeIndex: number,
    lastIndex: number,
}
 
export default class Next extends React.Component<Props> {
  public render () {
    const {onClick, activeIndex, lastIndex} = this.props;

    if (activeIndex + 1 > lastIndex) {
      return <></>
    }
    
    return (
      <a className="carousel-control-next" href="#next" onClick={onClick(activeIndex+1)} role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    );
  }
}