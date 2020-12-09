import Head from "next/head"
import { Row, Col } from "antd"
import Layout from "components/Layout"
import Header from "components/Header"
import Map from "components/Map/Map"
import { colors } from "style/theme"
import Zoom from "react-reveal/Zoom"
export default function Home() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div>
      <Head>
        <title>Coroncoro Restaurante Bar</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        <Zoom>
          <section>
            <h1>Coroncoro restaurante Bar</h1>
            <h3>La Delicia Del Rio Y El Mar</h3>
            <br />
            <Row>
              <Col span={24}>
                <h4>Telefonos</h4>
              </Col>
            </Row>
            <Row>
              <Col span={12}>314 525 1048</Col>
              <Col span={12}>273 8402</Col>
            </Row>
            <Row>
              <Col span={24}>
                <br />
                <h4>Ubicacion</h4>
              </Col>
            </Row>
            Calle 25#25-185 AV. Las Peñitas
          </section>
        </Zoom>
        <div className="Map">
          <Map />
        </div>
      </Layout>
      <style jsx>{`
        h1 {
          color: ${colors.primary};
          font-weight: 800;
          margin-bottom: 0;
        }
        h4 {
          color: ${colors.primary};
          font-weight: 800;
        }
        section {
          text-align: center;
        }
        div .Map {
          padding: 10px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  )
}
