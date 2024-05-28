import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Breadcrumb from "../components/home/Breadcrumb";
import Ourservices from "../components/home/Ourservices";
import Container from "../components/home/Container";
import Services from "../components/home/Services";
export default function Home() {
  return (
 <>
<Header/>
<Breadcrumb/>
<Ourservices/>
<Container/>
<Services/>
<Footer/>

 </>
  );
}
