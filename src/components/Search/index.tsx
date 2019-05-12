import React from 'react';
import { ApplicationState } from 'store';
import { connect } from 'react-redux';
import { getBooksByTitle, BooksState } from 'modules/books';
import { Dispatch } from 'redux';

import './search.scss';

interface PropsFromDispatch {
  getBooksByTitle: typeof getBooksByTitle
}

interface PropsFromState {
  books: BooksState
}

type Props = PropsFromDispatch & PropsFromState;
 
class Search extends React.Component<Props> {

  typingTimeOut:any;

  state = {
    query: ''
  }

  handleAPI = (e:any):any => {
    e && e.preventDefault();
    this.props.getBooksByTitle(this.state.query);
    clearTimeout(this.typingTimeOut);
  }

  handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(this.typingTimeOut);
    this.setState({
      ...this.state,
      query: e.target.value
    })
    this.typingTimeOut = setTimeout(
      this.handleAPI,
      1000
    ) 
  }

  getLastSearchTimeStamp = () => {  
    const {books} = this.props; 
    if (!books.timeAt) {
      return <></>;
    }

    return (
      <small className='ml-2'>
        <span role="img" aria-label="stopwatch">⏱️</span> last search @ <b>{books.timeAt.local().format('YYYY-MM-DD HH:mm:ss')}</b> page loaded: {books.page}
      </small>
    );
  }

  public render () {
    return (
      <>
        <form className="search mt-2 mt-md-0 ml-4" onSubmit={this.handleAPI}>
          <input 
              className="form-control mr-sm-2" 
              type="text" placeholder="Search for a book" 
              aria-label="Search" 
              value={this.state.query} 
              onChange={this.handleChange}/>
        
        </form>
        {this.getLastSearchTimeStamp()}
      </>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  books: state.books
});

const mapDispatchToProps = (dispatch:Dispatch) => ({
  getBooksByTitle:(title:string) => dispatch(getBooksByTitle(title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
