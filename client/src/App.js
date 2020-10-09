import React,{Component} from 'react';
import Test from "./Component/Test";
class App extends Component{
 state={
   title:""
  }
  componentDidMount(){ // 모든 컴포넌트가 마운트 됐을때 실행
    this.callApi()
    .then(res=> this.setState({title: res}))
    .catch(err => console.log(err));
  }
  callApi = async () => { //비동기적으로 실행
    const response = await fetch('api/userInfo');
    const body = await response.json();
    return body;
  }
  render() {
    return (
      <div className="App">
          <div>
            {this.state.title ?this.state.title.map(t=>{return(<Test key={t.userId} userId={t.userId} userName={t.userName}  userPassword={t.userPassword}  userBirthday={t.userBirthday}/>);}):<h1>loading...</h1>}
          </div>
      </div>
    );
  }
}
export default App;
