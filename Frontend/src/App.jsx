import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import BookList from './components/BookList.jsx';
import AddBook from './components/AddBook.jsx';
import IssueBook from './components/IssueBook.jsx';
import SignUp from "./components/SignUp.jsx"

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<SignUp/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/books" element={<BookList/>} />
          <Route path="/add-book" element={<AddBook/>} />
          <Route path="/issue-book" element={<IssueBook/>} />
          {/* Add other routes as needed */}
        </Routes>
    </Router>
  );
}

export default App;

