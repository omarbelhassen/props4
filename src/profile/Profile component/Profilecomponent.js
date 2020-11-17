import React , {Component} from "react";
import PropType from "prop-types";

export default class Profilecomponent ;

constructor (props) {

    super(props);
    this.handleName = this.handleName.bind(this);
}
handleName(event){
    event.preventDefault();
    alert (this.props.name);

}
render () {
    return (
        <div>
            <img 
            className="image"
            src={this.props.myimg}
            alt="myimage"
            onClick={this.handleName}
        />
            </div>
    );
};

Profilecomponent.defaultProps = {
    name : "OMAR";

};
Profilecomponent.PropType = {
    name : PropType.string,
}
};