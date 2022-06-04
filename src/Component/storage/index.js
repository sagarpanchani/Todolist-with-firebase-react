import React from "react";
export  default class  Storage extends React.Component{
    constructor(){
        super()
        this.state={
            pic:'',
        }
    }
    upload = (e) => {
        const file = e.target.files[0]
        console.log(file.name)
    }
    render(){
        return(
            <div>
                <input  type="file" onChange={(e)=>this.setState({pic:e.target.name})} />
                <button   onClick={()=>this.upload()}>upload</button>
            </div>
        )
    }
}