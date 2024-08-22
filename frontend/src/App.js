import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import SumaryApi from './common';
import Context from './context';

function App() {

  const fetchUserDetails = async() => {
    const dataResponse = await fetch(SumaryApi.current_user.url,{
      method: SumaryApi.current_user.method,
      credentials: "include"
    })

    const dataApi = await dataResponse.json()

    console.log("data-user", dataResponse)
  }

useEffect(() => {
  // user details
    fetchUserDetails()

},[])
  return (
 <>
 <Context.Provider value={{
    fetchUserDetails  // user detail fetch
 }}>
 <ToastContainer />
   <Header />
   <main className='min-h-[calc(100vh-100px)]'>
   <Outlet />
   </main>
   <Footer />
   </Context.Provider>
 </>
  );
}

export default App;
