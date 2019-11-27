import React from "react"
import PropTypes from "prop-types"
import SEO from "./Seo"
import "./layout.css"
import NavbarLink from "./NavbarLink"

const Layout = ({ children, title }) => {
  return (
    <>
      <div>
        <SEO title={title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 50,
          }}
        >
          <main>{children}</main>
        </div>
        <footer className="footer">
          <div className="footer-text">
            <h3>Créditos</h3>
            <strong>Asesor</strong>
            <span>José Antonio García Dávila</span>
            <strong>Autores</strong>
            <span>
              ALEJANDRO ALBERTO RAMÍREZ VILCHIS | alexrv4299@gmail.com
            </span>
            <span>LUIS ANDRÉS PEÑA CASTILLO | luis14-14@hotmail.com</span>
            <span>LUIS ÁNGEL ALVARADO DOMINGUEZ | angel_ad269@hotmail.com</span>
            <span>
              VÍCTOR MARIO PADILLA MENDOZA | padillamendoza@outlook.com
            </span>
            <br />
            <p>Realizado en el periodo Agosto - Diciembre 2019</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .footer {
          background-color: gray;
          display: flex;
          padding: 20px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: var(--accent-color);
          color: black;
          font-weight: 100;
        }

        .footer-text {
          max-width: 300px;
          display: flex;

          flex-direction: column;
        }
      `}</style>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
