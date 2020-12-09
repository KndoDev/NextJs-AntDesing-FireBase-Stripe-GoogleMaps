import Head from "next/head"
import Layout from "components/Layout"
import Card from "components/ Card"
import Button from "components/ButtonShoppingCart"
import Zoom from "react-reveal/Zoom"
import Slide from "react-reveal/Slide"
export default function reservaciones() {
  return (
    <div className="Contenedor">
      <Head>
        <title>Menu Coroncoro</title>
      </Head>
      <Layout>
        <div className="Button">
          <Slide right>
            <Button car=""></Button>
          </Slide>
        </div>
        <div className="Card">
          <Zoom>
            <Card
              title="Casuela"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              description="www.instagram.com"
              costo="$35.000"
            ></Card>
            <br />
          </Zoom>
        </div>
      </Layout>
      <style jsx>{`
        .Contenedor {
          height: 100%;
          width: 100%;
          background-color: red;
        }
        .Card {
          margin: 10px;
          display: grid;
          place-items: center;
        }
        .Button {
          position: absolute;
          height: 80px;
          width: 80px;
          right: 0px;
          bottom: 0px;
        }
      `}</style>
    </div>
  )
}
