import React,{Component} from "react";
import { render } from "react-dom";
class BreadCrumb extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                {2222+this.props.breadCrumb[0].name}
            </div>
        );
    }
}
export default BreadCrumb;