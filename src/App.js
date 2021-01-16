import React, { Component } from "react";
import Report from "./components/issues/Report";
import SignIn from "./components/admin/auth/SignIn";
import AddIssue from "./components/issues/AddIssue";
import About from "./components/layout/about/About";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/layout/navigation/Footer";
import Navbar from "./components/layout/navigation/Navbar";
import IssueDetails from "./components/issues/IssueDetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminIssues from "./components/admin/issues/AdminIssues";
import AdminCategory from "./components/admin/category/AdminCategory";
import AddCategory from "./components/admin/category/AddCategory";
import AdminAuthority from "./components/admin/authority/AdminAuthority";
import AddAuthority from "./components/admin/authority/AddAuthority";
import EditAuthority from "./components/admin/authority/EditAuthority";
import AuthoritySignIn from "./components/authority/auth/AuthoritySignIn";
import AuthorityIssues from "./components/authority/issues/AuthorityIssues";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Report} />
            <Route path="/about" component={About} />
            <Route path="/home" component={Dashboard} />
            <Route path="/report" component={AddIssue} />
            <Route path="/adminlogin" component={SignIn} />
            <Route path="/issues/:id" component={IssueDetails} />
            <Route path="/admin/issues" component={AdminIssues} />
            <Route path="/admin/category" component={AdminCategory} />
            <Route path="/admin/addcategory" component={AddCategory} />
            <Route path="/admin/authority" component={AdminAuthority} />
            <Route path="/admin/addauthority" component={AddAuthority} />
            <Route path="/admin/authority/edit" component={EditAuthority} />
            <Route path="/authoritylogin" component={AuthoritySignIn} />
            <Route path="/authorityhome" component={AuthorityIssues} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
