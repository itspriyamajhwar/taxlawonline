import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Slider from "./components/Slider/Slider";
import Banner from "./components/Banner/banner";
import Customers from "./components/Customers/Customers";
import WhyCustomersLoveUs from "./components/WhyCustomersLoveUs/WhyCustomersLoveUs";
import Footer from "./components/footer/footer";
import PopupForm from "./components/PopupForm/PopupForm";
import AboutSection from "./components/About/about";
import  Chatbot from './components/chatbot/chatbot';



// Pages
import PrivateLimitedCompany from "./Pages/Privatelimited/Privatelimitedcompany";
import LimitedLiabilityPartnership from "./Pages/limitedliabilitypartnership/limitedliabilitypartnership";
import OnePersonCompany from "./Pages/onepersoncompany/onepersoncompany";
import SoleProprietorship from "./Pages/soleproprietorship/soleproprietorship";
import Section8Company from "./Pages/section8companypartnership/section8companypartnership";
import TrustRegistration from "./Pages/trustregistration/trustregistration";
import PublicLimitedCompany from "./Pages/publiclimitedcompany/publiclimitedcompany";
import  MicroFinanceCompany from "./Pages/microfinancecompany/microfinancecompany";
import ProducerCompany from './Pages/producercompany/producercompany';
import IndianSubsidiary from './Pages/indiansubsidiary/indiansubsidiary';
import IncomeTax from "./Pages/Incometax/incometax";
import GST from "./Pages/Gst/gst";
import BookKeeping from "./Pages/Bookingkeeping/booking";
import PrivateLimitedToPublicLimited from "./Pages/PrivateLimitedToPublicLimited/PrivateLimitedToPublicLimited";
import  OPCToPrivateLimited from "./Pages/OPC to Private Limited Company/OPC to Private Limited Company";
import ProprietorshipToPrivateLimited from "./Pages/Proprietorship to Private Limited Company/Proprietorship to Private Limited Company";
import PartnershipFirmToLLP from "./Pages/Partnership Firm to LLP/Partnership Firm to LLP";
import TrademarkRegistration from "./Pages/Trademark Registration/Trademark Registration";
import TrademarkSearch from "./Pages/Trademark Search/Trademark Search";
import TrademarkCertificate from "./Pages/Trademark Certificate/Trademark Certificate";
import  TrademarkHearing from "./Pages/Trademark Hearing/Trademark Hearing";
import TrademarkRenewalPage from "./Pages/Trademark Renewal/Trademark Renewal";
import ExpeditedTMRegistration from "./Pages/Expedited TM Registration/Expedited TM Registration";
import LogoDesigning from "./Pages/Logo Designing/Logo Designing";
import  StartupIndia from "./Pages/Startup India/Startup India";
import DarpanRegistration from "./Pages/Darpan Registration/Darpan Registration";
import DigitalSignature from "./Pages/Digital Signature/Digital Signature";
import FSSAIRegistration from "./Pages/FSSAI Registration/FSSAI Registration";
import UdyamRegistration from "./Pages/Udyam Registration/Udyam Registration";
import FCRARegistration from "./Pages/FCRA Registration/FCRA Registration";
import TwelveAandEightyGRegistration from "./Pages/12A and 80G Registration/12A and 80G Registration";
import PFRegistration from "./Pages/PF Registration/PF Registration";
import  ESIRegistration from "./Pages/ESI Registration/ESI Registration";
import  ProfessionalTaxRegistration from "./Pages/Professional Tax Registration/Professional Tax Registration";
import  McaServices from "./Pages/MCA Services/MCA Services";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import Contact from "./Pages/contact/contact";
import About from "./Pages/Aboutus/aboutus";
import  BlogPage from "./Pages/blog/blog"
import GSTRegistration from './Pages/GSTRegistration/GSTRegistration';
import GSTReturnPage from "./Pages/GSTReturnPage/GSTReturnPage";
import GSTAnnualReturnPage from "./Pages/GSTAnnualReturnPage/GSTAnnualReturnPage";
import  FAQPage from "./Pages/FQA/fqa";
import PrivacyPolicy from "./Pages/Privacy Policy/Privacy Policy"; 
import TermsAndService from "./Pages/privacytermservice/termandservices";
import Disclaime from "./Pages/Disclaimer/Disclaimer";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Main Components */}
        <Route
          path="/"
          element={
            <React.Fragment>
              <Slider />
              <AboutSection />
              <Banner />
              <Customers />
              <WhyCustomersLoveUs />
            
           
              <PopupForm />
            
            </React.Fragment>
          }
        />

        {/* Other Pages */}
        <Route path="/privatelimitedcompany" element={<PrivateLimitedCompany/>} />
        <Route path="/limitedliabilitypartnership" element={<LimitedLiabilityPartnership/>}/>
        <Route path="/onepersoncompany" element={<OnePersonCompany />} />
        <Route path="/soleproprietorship" element={<SoleProprietorship />} />
        <Route path="/section8companypartnership" element={<Section8Company />} />
        <Route path="/trustregistration" element={<TrustRegistration />} />
        <Route path="/publiclimitedcompany" element={<PublicLimitedCompany />} />
        <Route path="/microfinancecompany" element={<MicroFinanceCompany />} />
        <Route path="/producercompany" element={<ProducerCompany />} />
        <Route path="/indiansubsidiary" element={<IndianSubsidiary />} />
        {/* Company Conversion*/}
        <Route path="/private-limited-to-public-limited-company" element={<PrivateLimitedToPublicLimited />} />
        <Route path="/opc-to-private-limited-company" element={ <OPCToPrivateLimited />} />
      <Route path="/proprietorship-to-private-limited-company" element={<ProprietorshipToPrivateLimited/>}/>
      <Route path="/partnership-firm-to-llp" element={<PartnershipFirmToLLP/>} />
      {/* tradmark*/}
      <Route path="/trademark-registration" element={<TrademarkRegistration/>} />
      <Route path="/trademark-search" element={<TrademarkSearch/>}/>
      <Route path="/trademark-certificate" element={<TrademarkCertificate/>} />
      <Route path="/trademark-hearing" element={< TrademarkHearing/>} />
      <Route path="/trademark-renewal" element={<TrademarkRenewalPage/>}/>
      <Route path="/expedited-tm-registration" element={<ExpeditedTMRegistration />} />
      <Route path="/logo-designing" element={<LogoDesigning />} />
    {/*Resgistration*/}
    <Route path="/startup-india" element={< StartupIndia/>} />
    <Route path="/darpan-registration" element={<DarpanRegistration/>}/>
    <Route path="/digital-signature" element={<DigitalSignature/>}/>
    <Route path="/fssai-registration" element={<FSSAIRegistration/>} />
    <Route path="/udyam-registration" element={<UdyamRegistration/>}/>
    <Route path="/fcra-registration" element={<FCRARegistration/>} />
    <Route path="/12a-and-80g-registration" element={<TwelveAandEightyGRegistration/>}/>
    <Route path="/pf-registration" element={<PFRegistration/>}/>
    <Route path="/esi-registration" element={< ESIRegistration/>}/>
    <Route path="/professional-tax-registration" element={< ProfessionalTaxRegistration/>}/>
    <Route path="/mcaservices" element={< McaServices/>}/>
    <Route path="/service/:id" element={<ServiceDetail />} />
 

    
        {/*Income tax */}
        <Route path="/incometax" element={<IncomeTax />} />

        {/*gst*/}
        <Route path="/gst" element={< GST />} />
        <Route path="/composite-gst-registration" element={<GSTRegistration/>} />
        <Route path="/composite-gst-return" element={<GSTReturnPage/>}/>
        <Route path="/composite-gst-annual-return" element={< GSTAnnualReturnPage/>}/>
        {/*booking*/}
        <Route path="/bookkeeping" element={< BookKeeping />} />
        {/*contact*/}
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>} />
      <Route path="/blog" element={< BlogPage/>}/>
      <Route path="/fqa" element={< FAQPage/>}/>
      <Route path="/privacy-policy"  element={<PrivacyPolicy/>}/>
      <Route path="/terms-of-service" element={< TermsAndService/>}/>
      <Route path="/disclaimer" element={<Disclaime/>}/>
  

      </Routes>
      <Footer />
      < Chatbot/>
    </Router>
  );
};

export default App;
