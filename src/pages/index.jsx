import React from "react"
import Layout from "../components/layout"
import NavbarLink from "../components/NavbarLink"

const IndexPage = () => (
  <Layout
    title={`El desinterés de los alumnos del ITS por la Ingeniería de Software`}
  >
    <div className="navbar">
      <NavbarLink text="Resultados" />
      <NavbarLink text="Conclusiones" />
      <NavbarLink text="Autores" />
    </div>
    <h1>El desinterés de los alumnos del ITS por la Ingeniería de Software</h1>
    <p className="subtitle">Investigación</p>

    <p>
      Este es el componente computacional de la Investigación "El desinterés de
      los alumnos del ITS por la ingeniería de software". A continuación se
      presentan los resultados obtenidos tras la encuesta realizada a
      aproximadamente 100 alumnos de la especialidad de Sistemas
      Computacionales.
    </p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>

    <h2>Resultados</h2>
    <h2>Gráficos</h2>
    <p>Aquí se presentarán las gráficas y figuras visuales</p>
    <h2>Conclusiones</h2>

    <style jsx>{`
      .navbar {
        display: flex;
        justify-content: space-between;
      }

      .subtitle {
        font-size: 2rem;
        font-weight: 100;
      }
    `}</style>
  </Layout>
)

export default IndexPage
