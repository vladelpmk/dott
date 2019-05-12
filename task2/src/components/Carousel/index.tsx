import React from 'react';
import { ApplicationState } from 'store';
import { connect } from 'react-redux';
import { BooksState, getBooksByTitlePage } from 'modules/books';
import { Dispatch } from 'redux';
import './carousel.scss';

import CarouselItem from './components/Item';
import Next from './components/Next';
import Previous from './components/Previous';
import Error from './components/Error'
import Loading from './components/Loading'
import Empty from './components/Empty'
import Initial from './components/Initial'

const LOAD_BACK = 3;
const LOAD_AHEAD = 3;

interface PropsFromState {
  books: BooksState
}

interface PropsFromDispatch {
  getBooksByTitlePage: typeof getBooksByTitlePage
}


type Props = PropsFromState & PropsFromDispatch;
 
class Carousel extends React.Component<Props> {

  interval:any;

  state = {
    activeIndex: 0
  }

  constructor (props:Props) {
    super(props);
    this.interval = setInterval(this.nextSlide,10000);
  } 

  nextSlide = () => {
    const { books } = this.props;
    const { activeIndex } = this.state;
    let nextSlide = activeIndex + 1;

    if (nextSlide > books.docs.length - 1) {
      nextSlide = 0;
    }

    if(nextSlide === activeIndex) {
      return;
    }

    this.handleSlide(nextSlide)();
  }

  handleSlide = (slide:number) => () => {
    const {books, getBooksByTitlePage} = this.props;

    if(slide >  books.docs.length - LOAD_AHEAD) {
      getBooksByTitlePage(books.query, books.page + 1)
    }
    
    this.setState({
      ...this.state,
      activeIndex: slide
    })
  }

  componentDidUpdate(prevProps:Props) {
    const { books } = this.props;
    if (books.loading && !prevProps.books.loading) {
      this.setState({
        ...this.state, 
        activeIndex: 0
      });
    }
  }

  isLazyLoad = (index:number):boolean => {
    const {activeIndex} = this.state;

    return (index + LOAD_AHEAD >= activeIndex) && (index - LOAD_BACK <= activeIndex)
  }
  

  public render () {
    const { books } = this.props;
    const { activeIndex } = this.state;

    if (books.initial) {
      return <Initial/>;
    }

    if (books.loading) {
      return <Loading/>;
    }

    if (books.error) {
      return <Error message={books.error}/>;
    }

    if (books.docs.length === 0) {
      return <Empty/>;
    }

    return (
      <div className="carousel slide mt-4 mb-4" data-ride="carousel">
        <div className="carousel-inner"> 
          {books.docs.map(
            (item:Book, index:number) => 
              <CarouselItem 
                book={item} 
                key={index.toString()} 
                active={activeIndex === index}
                lazyLoad={this.isLazyLoad(index)}
              />
          )}
        </div>
        <Previous onClick={this.handleSlide} activeIndex={activeIndex}/>
        <Next onClick={this.handleSlide} activeIndex={activeIndex} lastIndex={books.numFound-1}/>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  books: state.books
});

const mapDispatchToProps = (dispatch:Dispatch) => ({
  getBooksByTitlePage:(title:string, page:number) => dispatch(getBooksByTitlePage(title, page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carousel);
