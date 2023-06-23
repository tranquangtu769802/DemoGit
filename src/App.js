
import React from 'react';
import './App.css';
import Table from './Table';
//* import { Clock } from './clock';
//* import {Person} from './Person';

///*Demo helloworld
// function App() {
//   // const devStyle = {
//   //   color: 'red'
//   // }
//   // const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png";
  
//   return (
//     <div >
//       {/* <h1>Hello!</h1>
//       <img src={url} alt = "ảnh đẹp"></img> */}
//       <Person firstName = "tran quang" lastName = "tu" age = "20">
//         Có làm thì mới có ăn
//       </Person>
      

//     </div>
//   );
// }
// export default App;
// // new Person("Trần", "Tú", "20")

//TODO Ex2 - Question1f
class App extends React.Component{
  constructor(props){
    super(props);
    this.data = [
      {
        languge:"PHP",
        framework:"Laravel"
      },
      {
        languge:"Java",
        framework:"Mateor"
      },
      {
        languge:"Android",
        framework:"Webkit",
      }
    ]
  }
  render(){
    return(
      <Table list ={this.data} />
    );
  }
}
export default App;

//TODO Demo state
//*state là nơi lưu trữ giá trị, khi bất kỳ biến nào trong state bị thay đổi => tự động render lại(là trạng thái của component được cập nhật khi thay đổi trạng thái)
//*lưu trữ tất cả các giá trị có thể thay đổi được (!= với props khi giá trị không thay đổi được)
//* khởi tạo state phải để trong constractor nên nếu không khởi tạo state thì k cần phải dùng constructer
//*không được setState trực tiếp (vd: this.state.time ) mà phải thông qua hàm setState thì mới gọi lại được hàm render
//*giữ cho state đơn giản để khi 1 giá trị thay đổi thì đỡ phải render lại nhiều lần =>tách các giá trị ra thành các component nhỏ riêng biệt
// class App extends React.Component{
//   render(){
//     return(
//       <Clock />
//     );
//   }
// }
// export default App;