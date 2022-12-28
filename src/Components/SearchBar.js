import React from 'react'

class SearchBar extends React.Component {   
    state = {
        term: ''
    }

    onFormSubmit = (e) => {
        e.preventDefault()

        this.props.onSubmit(this.state.term)
    }

    render(){
        return (
        <div>
            <form 
            className='ui form' 
            onSubmit={this.onFormSubmit}
            >
                <div className='field ' style={{marginLeft: '50px'}}>
                        <div className="ui icon input">
                            <i 
                            className="search icon" 
                            style={{fontSize: '1.5rem'}}></i>
                            <input 
                            type="text" 
                            name="term" 
                            placeholder='Search Reddit' 
                            onChange={(e)=>this.setState({term: e.target.value})}/>
                        </div>
                </div>
            </form>
        </div>

        )
    }
}

export default SearchBar

