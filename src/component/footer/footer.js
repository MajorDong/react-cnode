import React,{Component} from "react";
import {Layout} from "antd";

export default class Footer extends Component{
    render(){
        return (
            <Layout.Footer id="footer" style={
              {textAlign: "center",}
            }>
                Copyright ©️2019-present Tom Shen
            </Layout.Footer>
        );
    }
}