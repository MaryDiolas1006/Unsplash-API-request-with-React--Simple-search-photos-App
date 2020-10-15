import React from 'react';


class SearchBar extends React.Component {
    state = { text: '' };

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.text);
    }

    onInputChange = e => {
        console.log(e.target.value);

        this.setState({ text: e.target.value });
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.onFormSubmit}>
                    <div className="col-12 col-md-8 mx-auto">
                        <label style={{marginTop: "50px", fontSize: "20px"}}>Search Images</label>
                        <input
                            onChange={this.onInputChange}
                            type="text" name="search"
                            className="form-control form-control-sm"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;