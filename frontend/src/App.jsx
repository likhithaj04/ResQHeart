import { useLocation,Navigate } from 'react-router-dom'
import './App.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from '../src/Navbar'
import HomePage from './landingpage/Home/Home'
import AboutPage from './landingpage/About/Home'
import AdoptPage from './landingpage/Adopt/Home'
import InfoPage from './/landingpage/Adopt/Info'
import AdoptForm from './landingpage/Adopt/AdoptForm'
import SubmitForm from './landingpage/Adopt/SubmitForm'
import ContactPage from './landingpage/Contact/Home'
import LoginPage from './landingpage/User/Home'
import RegisterPage from './landingpage/User/Register'
import AddBlog from './landingpage/Awareness/AddArticle'
import ManagePets from './Dashboard/ManagePets'
import BlogPosts from './Dashboard/BLogPosts'
import Message from './Dashboard/Message'
import AdoptFormData from './Dashboard/AdoptFormData'
import Footer from '../src/Footer'
import { Route, Routes } from 'react-router-dom'
import Awareness from './landingpage/Awareness/Awareness'
import Admin from './Dashboard/Admin'
import Donation from './landingpage/Donate/Home'
import ShelterForm from './Dashboard/ShelterForm'
import ShelterInfo from './landingpage/Donate/ShelterInfo'
import DonationPage from './landingpage/Donate/Donation'
import DonationList from './Dashboard/DonationList'
import UserList from './Dashboard/UserList';

function App() {

  const location = useLocation()
  const hideFooter = location.pathname === '/Login' || location.pathname === '/register';
  const hideNavbar = location.pathname === '/Login' || location.pathname === '/register';

  const isAdmin=localStorage.getItem('isAdmin')==='true';

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/awareness' element={<Awareness />} />
        <Route path='/adopt' element={<AdoptPage />} />
        <Route path='/info/:id' element={<InfoPage />} />
        <Route path='/form/:id' element={<AdoptForm />} />
        <Route path='/submission' element={<SubmitForm />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/Login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/addblog' element={<AddBlog/>}/>
        <Route path='/managepets' element={<ManagePets/>}/>
        <Route path="/adoptionformdata" element={<AdoptFormData/>} />
        <Route path="/blogposts" element={<BlogPosts/>} />
        <Route path="/message" element={<Message/>} />
        <Route path="/donate" element={<Donation/> }/>
        <Route path='/admin' element={ isAdmin?<Admin/> : <Navigate to="/"/>}/>
        <Route path='/shelterform' element={<ShelterForm/> }/>
        <Route path='/shelterInfo/:id' element={<ShelterInfo/> }/>
        <Route path='/donation/:id' element={<DonationPage/>}/>
        <Route path='/donationlist' element={<DonationList/>}/>
        <Route path='/userList' element={<UserList/>}/>
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} />

      {!hideFooter && <Footer />}

    </>
  )
}

export default App
