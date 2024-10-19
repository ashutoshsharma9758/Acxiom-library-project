import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import IssueBook from './components/IssueBook';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
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

