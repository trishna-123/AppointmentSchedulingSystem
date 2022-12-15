// import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { AddPatientComponent } from './patient components/AddPatientComponent';
import { ListPatientComponent } from './patient components/ListPatientsComponent';
import { UpdatePatientComponent } from './patient components/UpdatePatientComponent';
import { Header } from './frontend components/Header';
// import { Signin } from './Signin';
import { Home } from './frontend components/Home';
import { ListDoctorComponent } from './doctor components/ListDoctorComponent';
import { AddDoctorComponent } from './doctor components/AddDoctorComponent';
import { AddAppointmentComponent } from './appointment component/AddAppointmentComponent';
import { UpdateAppointmentComponent } from './appointment component/UpdateAppointmentComponent';
import { ListAppointmentComponent } from './appointment component/ListAppointmentComponent';
import {SigninValidation} from './SigninValidation';
import { SigninAdmin } from './SigninAdmin';
import { HomeBasedOnLogin } from './frontend components/HomeAfterLogin';
import { AdminHomePage } from './AdminHomePage';
import { AboutUs } from './frontend components/AboutUs';
import { ContactUs } from './frontend components/ContactUs';
import TopServices from './frontend components/Service';
import { SearchDoctorBySpec } from './doctor components/SearchDoctor';
import { Profile } from './frontend components/Profile';
import AddAppointmentUser from './appointment component/AddAppointmentUser';
import InProcess from './Inprocess';
import AppointmentAdded from './frontend components/AppointmentAdded';



function App() {
  return (
    <div>
    <BrowserRouter>
    {/* < Header /> */}
     <div className="container-fluid">
      <Switch>
        <Route path="/" exact component={HomeBasedOnLogin}></Route>
        <Route path="/signin" exact component={SigninValidation}></Route>
        <Route path="/signinasadmin" exact component={SigninAdmin}></Route>
        <Route path="/adminhome" exact component={AdminHomePage}></Route>
        <Route path="/listpatient" component={ListPatientComponent}></Route>
        <Route path="/addpatient" component={AddPatientComponent}></Route>
        <Route path="/updatepatientbyid/:id" component={UpdatePatientComponent}></Route>
        <Route path="/listdoctor" component={ListDoctorComponent}></Route>
        <Route path="/appointment/:id" component={AddAppointmentUser}></Route>
        <Route path="/searchbyspec" component={SearchDoctorBySpec}></Route>
       <Route path="/adddoctor" component={AddDoctorComponent}></Route>
       <Route path="/aboutus" component={AboutUs}></Route>
       <Route path="/services" component={TopServices}></Route>
       <Route path="/profile" component={Profile}></Route>
       <Route path="/appointmentadded" component={AppointmentAdded}></Route>
       <Route path="/inprocess" component={InProcess}></Route>
       <Route path="/contactus" component={ContactUs}></Route>
       <Route path="/listappointments" component={ListAppointmentComponent}></Route>
        <Route path="/addappointment" component={AddAppointmentComponent}></Route>
        <Route path="/updateappointment/:id" component={UpdateAppointmentComponent}></Route>

      </Switch>
      
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
