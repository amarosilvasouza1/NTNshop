import { Container } from "./styles";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { Destaque } from "../components/Destaque";

import shipping from '../assets/shipping-circle.svg'
import promotion from '../assets/promotions-circle.svg'
import whatsapp from '../assets/whatsapp-circle.svg'
import security from '../assets/security-circle.svg'

export function Page() {
  return (
    <Container>
      <Header />
      <Slider />
      <div className="informative-banners">
        <div className="frete">
          <img src={shipping}/>
          <div className="desc-info">
            <h3>Frete Gratís</h3>
            <p>Frete gratuito para todo Brasil!</p>
          </div>
        </div>
        <div className="preco">
          <img src={promotion}/>
          <div className="desc-info">
            <h3>Melhores preços</h3>
            <p>
              Economize comprando nossos produtos com até com até 30% de
              desconto!
            </p>
          </div>
        </div>
        <div className="suporte">
          <img src={whatsapp}/>
          <div className="desc-info">
            <h3>Precisa de suporte?</h3>
            <p>Obtenha um suporte rápido e eficaz, contate-nos no WhatsApp!</p>
          </div>
        </div>
        <div className="seguranca">
          <img src={security}/>
          <div className="desc-info">
            <h3>Segurança em primeiro lugar</h3>
            <p>
              Seus dados são processados com total segurança na hora da compra.
            </p>
          </div>
        </div>
      </div>
      <Destaque/>
    </Container>
  );
}
