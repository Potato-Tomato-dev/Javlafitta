import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';

function Layout(props){
    return(
    <div>
         <Contact/>
        <Header/>
        <main className={"main"}>
            <div className="content">
                {props.children}
            </div>
        </main>
        <Footer/>
    </div>
    )
}
export default Layout