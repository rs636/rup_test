import React,{Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{
  state={
   data:""
  }

  getPost = async () => {
    try {
      const response = await axios.get('/api/userInfo');
      this.setState({
        data: response.data
      });
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount(){
    this.getPost();
  }
 
  render(){
    const{classes} = this.props;
    if (!this.state.data) {
      return <div>로딩중...</div>;
    }
    const s = this.state.data;
    return(
    <div className="App">
      <h1>{s.userName}</h1>
    </div>
    );
  }
}

export default App;
