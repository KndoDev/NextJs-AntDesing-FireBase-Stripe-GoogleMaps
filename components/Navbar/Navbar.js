import Link from "next/link";
import { Row, Col } from "antd";
export default function Navbar() {
  return (
    <>
      <section className="container">
        <Row>
          <Col span={24}>
            <img
              width="80"
              height="80"
              src="/TIMON_1.svg"
              alt="Coroncor oLogo"
            />
          </Col>
        </Row>
        <div>
          <Link href="/" passHref>
            <a>Inicio</a>
          </Link>
          <Link href="/reservaciones" passHref>
            <a>Reservaciones</a>
          </Link>

          <Link href="/menu" passHref>
            <a>Menu</a>
          </Link>
        </div>
      </section>
      <style jsx>{`
            section{
                    background-color:#007BFF;
                    width:100%;
                    display:grid;
                    place-items:center;
            }
            div{
                margin:0;
                width:100%;
                display:flex;
                flex wrap: nowrap; 
                color:#d9faff;
                justify-content:center;
                padding-bottom:10px
            }
            a{
                margin:auto;
                color:#d9faff;
                font-weight:500;
            }
                
          `}</style>
    </>
  );
}
