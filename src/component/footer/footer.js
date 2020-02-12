import React,{Component} from "react";
import {Layout} from "antd";

export default class Footer extends Component{
    render(){
        return (
            <Layout.Footer id="footer" style={
              {textAlign: "center",}
            }>
                <div>Copyright <span>&copy;</span>2019 Tom Shen</div>
            </Layout.Footer>
        );
    }
}