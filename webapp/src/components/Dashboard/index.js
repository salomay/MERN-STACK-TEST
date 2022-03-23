import React, { Component } from 'react';



export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      angka1: 0,
      angka2:0,
      hasil:0
    };
  }
  
  penjumlahan=()=>{

    this.setState({
      hasil:parseInt(this.state.angka1)+parseInt(this.state.angka2)
    })

  }

  perkalian=()=>{
    this.setState({
      hasil:parseInt(this.state.angka1)*parseInt(this.state.angka2)
    })
  }

  pembagian=()=>{
    this.setState({
      hasil:parseInt(this.state.angka1)/parseInt(this.state.angka2)
    })

  }

  pengurangan=()=>{
    this.setState({
      hasil:parseInt(this.state.angka1)-parseInt(this.state.angka2)
    })
  }

  render() {
    return (<div >
      <h1 style={{textAlign:"center" }}>Calculator</h1>
      
      <div style={{display: "flex",
          justifyContent: "center",
          alignItems: "center"}}>
        <p>
          <h3>angka1</h3>
        <input type="text" name="angka1" onChange={(e)=> this.setState({angka1:e.target.value})} value={this.state.angka1}/>
        </p>
        &nbsp;
        <p>
          <h3>angka2</h3>
          <input type="text" name="angka2" onChange={(e)=> this.setState({angka2:e.target.value})} value={this.state.angka2}/>
        </p>
      </div>

      <div style={{display: "flex",
          justifyContent: "center",
          alignItems: "center"}}>
            <p>
            <h3>hasil</h3>
            <input type="text" name="angka3" value={this.state.hasil}/>
            </p>
      </div>

      <div style={{display: "flex",
          justifyContent: "center",
          alignItems: "center"}}>
            
        
            <button style={{paddingLeft:10,paddingRight:10}} onClick={this.penjumlahan}><h1>+</h1></button>
            <button style={{paddingLeft:10,paddingRight:10}} onClick={this.pengurangan}><h1>-</h1></button>
            <button style={{paddingLeft:10,paddingRight:10}} onClick={this.pembagian}><h1>/</h1></button>
            <button style={{paddingLeft:10,paddingRight:10}} onClick={this.perkalian}><h1>x</h1></button>
      </div>
    
      
      
      
      </div>);
  }
}
