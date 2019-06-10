import React, {Component, Fragment} from "react";
import {Card, Button } from "antd";
import "./FormEx.css"

export default class FormEx extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formErrors:{},
            title:"",
            author:"",
            genre:"",
            enableBtn: false
        };
        this.validate = this.validate.bind(this);
        this.getAuthor = this.getAuthor.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.getGenre = this.getGenre.bind(this);
    }

    validate = (event) => {
        debugger
        if(Object.keys(this.state.formErrors).length > 0){
            event.preventDefault();
        }
    }

    getTitle = (event) => {
        this.setState({title: event.target.value});
        let formErrorCopy = this.state.formErrors;
        if(event.target.value.length < 4) {
            formErrorCopy.titleErr = "Title must contain atleast 4 characters";
            this.setState({enableBtn: true})

        } else {
            delete formErrorCopy["titleErr"];
            this.setState({enableBtn: false})

        }
        this.setState({formErrors: formErrorCopy})
    }

    getAuthor = (event) => {
        this.setState({author: event.target.value});
        let formErrorCopy = this.state.formErrors;
        if(event.target.value.length < 3) {
            formErrorCopy.authorErr = "Author must contain atleast 3 characters";
            this.setState({enableBtn: true});

        } else {
            delete formErrorCopy["authorErr"];
            this.setState({enableBtn: false})

        }
        this.setState({formErrors: formErrorCopy})
    }

    getGenre = (event) => {
        this.setState({genre: event.target.value});
        let formErrorCopy = this.state.formErrors;
        if(event.target.value == "") {
            formErrorCopy.genreErr = "Select an option";
            this.setState({enableBtn: true});

        } else {
            delete formErrorCopy["genreErr"];
            this.setState({enableBtn: false})

        }
        this.setState({formErrors: formErrorCopy});
    }

    render() {
        return(
            <Card title="Add a book" className="Cardstyle">
                <form onSubmit={this.validate}>
                    <label>Title: </label><br />
                    <input type="text" value={this.state.title} onChange={this.getTitle} /><br /><br />
                    <div id="titleErr" className="err">{this.state.formErrors.titleErr}</div>

                    <label>Author: </label><br />
                    <input type="text" value={this.state.author} onChange={this.getAuthor} /><br /><br />
                    <div id="authorErr" className="err">{this.state.formErrors.authorErr}</div>

                    <label>Genre: </label><br />
                    <select value={this.state.genre} onChange={this.getGenre} placeholder="Select an option">
                        <option value=''>Select...</option>
                        <option value="thriller">Mystery Thriller</option>
                        <option value="love">Love Story</option>
                        <option value="fiction">Fiction</option>
                    </select> 
                    <div id="genreErr" className="err">{this.state.formErrors.genreErr}</div>
                    <br /><br /><br /><br />
                    <button disabled={this.state.enableBtn}>Add Book</button>
                    {/* <Button type="primary" disabled={this.state.enableBtn} onClick={this.validate}> Add Book</Button> */}
                </form>

            </Card>
        )
    }
}