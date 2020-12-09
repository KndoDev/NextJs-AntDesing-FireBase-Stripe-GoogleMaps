import Navbar from "../Navbar/Navbar"
import Waves from "../Waves/Waves"
import styles, { globalStyles } from "./styles"
import { Scrollbars } from "react-custom-scrollbars"
export default function Layout({ children }) {
  return (
    <>
      <Waves>
        <div>
          <main>
            <Scrollbars style={{}}>
              <Navbar />
              {children}
            </Scrollbars>
          </main>
        </div>
      </Waves>
      <style jsx>{styles}</style>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}
