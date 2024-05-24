import List from './List';
import Footer from './Footer';
import Navbar from './Navbar';
 function Zomato(pros)
 {

 return(
         
    <div className='maincard'>
            return <Navbar title={pros.naam}/>
            <List/>
            <Footer/>
        </div>
     )
 }
export default Zomato;