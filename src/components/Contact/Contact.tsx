import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        
      </header>
      <div className="contacts" >
        <div style={{width:"400px",paddingLeft:'200px',paddingRight:'200px'}}>
        <a href="mailto:akshaykomale012345@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:akshaykomale012345@gmail.com" >Akshaykomade01234@gmail.com</a>
        </div>
        <div>
        <a href="tel:+919099142433"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919099142433">(+91) 9099142433</a>
        </div>  
      </div>
    </Container>
  )
}