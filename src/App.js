import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';



import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import AuthProvider from './Components/Context/AuthProvider';
import Error from './Pages/Error/Error';

import Booking from './Components/Booking/Booking';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MyOrders from './Components/MyOrders/MyOrders';
import ManageOrder from './Components/ManageOrders/ManageOrder';
import AddProducts from './Components/AddProducts/AddProducts';
import AddReviews from './Components/AddReviews/AddReviews';
import Dashboard from './Pages/Dashboard/Dashboard';
import Products from './Pages/Products/Products';





function App() {
  return (
    <div className="App">


        {/* <Header></Header>
        <Banner></Banner>
        <About></About>
        <Social></Social>
        <Footer></Footer> */}
        <AuthProvider>
      <Router>
        
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/addServices">
            <AddProducts></AddProducts>
          </Route>
          <Route path="/allServices">
            <Products></Products>
          </Route>

          <PrivateRoute path="/booking/:serviceId">
           <Booking></Booking>
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
           <Dashboard></Dashboard>
          </PrivateRoute>

          <Route exact path="/myOrder">
            <MyOrders></MyOrders>
          </Route>
          <Route exact path="/manageOrder">
            <ManageOrder></ManageOrder>
          </Route>
          <Route path="/review">
          <AddReviews></AddReviews>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          {/* <PrivateRoute path="/ServiceDetails/:id">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
 */}



          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
