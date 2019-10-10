import React, {Component} from 'react';
import {connect} from 'react-redux';
import *as actionTypes from '../store/actions';

class Counter extends Component {

   render() {
       return (
           <div className='num'>
               <div><h3>Current number: {this.props.count}</h3></div>
               <div>
                   <button onClick={this.props.onIncCounter }>Increment</button>
                   <button onClick={this.props.onDecCounter}>Remove 1</button>
                   <button onClick={this.props.addCounter }>Add 5</button>
                   <button onClick={this.props.removeCounter }>Remove 5</button>
                   <button onClick={()=>this.props.onStoreResult(this.props.count)}>Store value</button>
                   <ul>
                     {this.props.storedResult.map(item=>(
                        <li key={item.id} onClick={()=> this.props.onDeleteResult(item.id)}>{item.value}</li>
                     ))}

                   </ul>
               </div>
           </div>
       );
   }
}

const mapStateToProps = state => {
  return {
    count: state.ctr.counter,
    storedResult: state.res.results
  }
}

const mapDispatchToProps = dispatch => {
    return{
      onIncCounter: () => dispatch({type: actionTypes.INCRECE}),
      onDecCounter:() => dispatch({type:actionTypes.DECREACE}),
      addCounter: () => dispatch({type: actionTypes.ADD,value:5}),
      removeCounter: () => dispatch({type: actionTypes.REMOVE,value:5}),
      onStoreResult: (result) => dispatch({type:actionTypes.STORE_RESULT, result:result}),
      onDeleteResult: (id) => dispatch({type:actionTypes.DELETE_RESULT, resultElementId: id})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
