import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import PostList from "./PostList";


class App extends React.Component {
  state = { posts: []}

  componentDidMount(){
    this.onSearchSubmit('funny')
  }

  onSearchSubmit = async (term) => {
    const response = await axios.get(`https://www.reddit.com/search.json?q=${term}`, {

    })
    this.setState({posts: response.data.data.children})
  }
  
  
  render(){
    return (
      <div>
        <div className="ui red segment">
          <i className="fa-brands fa-reddit"  style={{fontSize: '2rem', color: 'red', margin: '1rem'}}></i>
          <h1 style={{display: 'inline-block'}}>reddit</h1>
          <div className="ui container" style={{display: 'inline-block'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
          </div>
        </div>
        <PostList posts={this.state.posts}/>
      </div>
    ) 
  }
}

export default App;

