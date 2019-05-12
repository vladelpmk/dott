import React from 'react';
import './item.scss';

interface Props {
    book: Book,
    active: boolean,
    lazyLoad: boolean
}
 
export default class CarouselItem extends React.Component<Props> {

  getImage = () => {
    const {book} = this.props;
    const key = 'isbn'; 
    const value = book.isbn && book.isbn[0];

    return (
      <picture>
        <source media='(min-width: 650px)' srcSet={`https://covers.openlibrary.org/b/${key}/${value}-L.jpg`}/>
        <source media='(min-width: 465px)' srcSet={`https://covers.openlibrary.org/b/${key}/${value}-M.jpg`}/>
        <source media='(min-width: 265px)' srcSet={`https://covers.openlibrary.org/b/${key}/${value}-S.jpg`}/>
        <img src={`https://covers.openlibrary.org/b/${key}/${value}-S.jpg`} alt={book.title}/>
      </picture>
    )
  }

  public render () {
    const {book, active, lazyLoad} = this.props;
    
    if (!lazyLoad) {
      return <></>;
    }

   
    return (
      <div className={`carousel-item ${active && 'active'}`}> 
        <div className='container'>
          {this.getImage()}
          <div className='infos'>
            <h1>{book.title}</h1>
            <p>{book.authorName && `by ${book.authorName.join(', ')}`}</p>
          </div>
        </div>
      </div>
    );
  }
}