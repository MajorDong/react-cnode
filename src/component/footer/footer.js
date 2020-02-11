import React,{Component} from "react";
import {Layout} from "antd";

export default class Footer extends Component{
    render(){
        return (
            <Layout.Footer id="footer" style={
              {textAlign: "center",}
            }>
                <div>Copyright <span role="img">©️</span>2019-present Tom Shen</div>
            </Layout.Footer>
        );
    }
}