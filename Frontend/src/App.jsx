import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import BookList from './components/BookList.jsx';
import AddBook from './components/AddBook.jsx';
import IssueBook from './components/IssueBook.jsx';
import SignUp from "./components/SignUp.jsx"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Login} />
          <Route path="/register" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/books" component={BookList} />
          <Route path="/add-book" component={AddBook} />
          <Route path="/issue-book" component={IssueBook} />
          {/* Add other routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

