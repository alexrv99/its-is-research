import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>El desinterés de los alumnos del ITS en la Ingeniería de Software</h1>
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
  </Layout>
)

export default IndexPage
