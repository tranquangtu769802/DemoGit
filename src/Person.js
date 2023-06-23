import React from 'react';
import './person.css';
class Person extends React.Component{
    render(){
        // render để xuất dữ liệu chuyên dùng trong class
        return(
            <div className='person'>
                {/* dùng prop để truyền vào dữ liệu chứ không fix cứng, firstName và lastName là key để truyền dữ liệu vào bên đầu ra*/}
                <h1>Firstname: {this.props.firstName}</h1> 
                <h1>Lastname:  {this.props.lastName}</h1>
                <p>age:{this.props.age}</p>
                {/* tính toán năm sinh bằng logic */}
                <p>Year of birth:{new Date().getFullYear() - this.props.age}</p>
                <p>Sologant: {this.props.children}</p> {/**this.props.children để lấy tất cả những gì được viết giữa 2 thẻ <person> */}
            </div>
        );
    }
}
// function Person2(){
//     return(
//         <div className='person'>
//             <h1>fullname: tran quang tu1</h1>
//             <p>age:25</p>
//         </div>
//     );
// }
export {Person};// de dung duoc o cho khac phải export

// eslint-disable-next-line no-undef
// Person(firstName, lastName, age)