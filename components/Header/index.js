import React from "react"
import { breakpoints } from "style/theme"
export default function Header() {
  return (
    <>
      <div className="FotoCoroncoro">
        <img
          className="FotoCoroncoro"
          src="/FotoCoroncoro.png"
          alt="Foto Coroncoro"
        />
      </div>
      <style jsx>{`
        div .FotoCoroncoro {
          width: 100%;
          filter: blur(0.5px);
        }
        img .FotoCoroncoro {
          width: 100%;
        }

        @media (max-width: ${breakpoints.mobile}) {
          div .FotoCoroncoro {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}
