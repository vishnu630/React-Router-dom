import React from 'react';
import {Link,Route,Routes} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Content from './Content';
import Users from './Users';
import UserShow from './UserShow';
const App=()=>{
  return(<div>
    <h1>page navigate</h1>
   <ul>
    <li><Link to="/">home</Link></li>
    <li><Link to="/about">about</Link></li>
    <li><Link to="/content">content</Link></li>
    <li><Link to="/users">users</Link></li>
   </ul>
  <Routes>
   <Route  path="/" element={<Home/>} exact/>
   <Route path='/about' element={<About/>} />
   <Route path='/content' element={<Content/>}/>
   <Route path='/users' element={<Users/>}/>
   <Route path='/users/:id' element={<UserShow/>}/>
   </Routes>
  </div>)
}
 
export default App;
