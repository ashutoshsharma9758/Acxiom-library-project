import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import BookList from './components/BookList.jsx';
import AddBook from './components/AddBook.jsx';
import IssueBook from './components/IssueBook.jsx';
import SignUp from "./components/SignUp.jsx"
import Home from "./Pages/Home.jsx";
import Navbar from './Pages/Navbar.jsx';
import Maintenance from './components/Maintenance.jsx';

function App() {
  return (
    <Router>
        <Routes>
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/" element={<Login/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/maintenance" element={<Maintenance/>} />
          <Route path="/register" element={<SignUp/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/books" element={<BookList/>} />
          <Route path="/add-book" element={<AddBook/>} />
          <Route path="/reports" element={<IssueBook/>} />
          {/* Add other routes as needed */}
        </Routes>
    </Router>
  );
}

export default App;

