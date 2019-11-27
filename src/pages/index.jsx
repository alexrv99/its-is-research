import React from "react"
import Layout from "../components/Layout"
import NavbarLink from "../components/NavbarLink"

const IndexPage = () => (
  <Layout
    title={`El desinterés de los alumnos del ITS por la Ingeniería de Software`}
  >
    <nav>
      <NavbarLink text="Resultados" href="#resultados" />
      <NavbarLink text="Objetivos" href="#objetivos" />
      <NavbarLink text="Conclusiones" href="#conclusiones" />
    </nav>
    <h1>El desinterés de los alumnos del ITS por la Ingeniería de Software</h1>

    <p>
      Este es el componente computacional de la Investigación "El desinterés de
      los alumnos del ITS por la ingeniería de software". A continuación se
      presentan los resultados obtenidos tras la encuesta realizada a
      aproximadamente 100 alumnos de la especialidad de Sistemas
      Computacionales.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>

    <section>
      <h2>Introducción</h2>
      <p>
        El desarrollo de software y la ingeniería de software son dos campos
        sumamente importantes para cualquier ingeniero en sistemas
        computacionales, sobre todo en estos tiempos en los que se es tan
        dependiente de las computadoras.
      </p>
      <p>
        La industria y las empresas están siempre a la espera de nuevos
        profesionales capaces de diseñar, desarrollar y brindar mantenimiento a
        sistemas de software que estén hechos a la medida de sus necesidades.
      </p>
      <p>
        Por estas razones se considera importante el fomentar el interés por la
        ingeniería de software, pues se ha notado que a varios estudiantes de la
        carrera de Ingeniería en Sistemas Computacionales del Instituto
        Tecnológico de Saltillo no les llama demasiado la atención la Ingeniería
        de software.
      </p>
    </section>

    <section>
      <h2>Objetivos</h2>
      <p>
        Conocer aproximadamente cuántas personas aspiran a ser desarrolladores
        de software o estar involucrados de alguna manera en su producción, así
        como analizar las razones por las que algunos alumnos no quieren
        perseguir esta carrera, las causas, sus posibles repercusiones en el
        futuro de los ingenieros en sistemas egresados del Instituto Tecnológico
        de Saltillo y al menos una manera de incentivar el interés en este
        redituable campo laboral.
      </p>
      <h3>Objetivos específicos</h3>
      <ul>
        <li>
          Determinar la cantidad precisa de estudiantes de Ingeniería en
          Sistemas Computacionales que no se interesen por el desarrollo de
          software, una muestra lo más precisa posible para comprobar si nuestra
          hipótesis inicial es correcta.
        </li>
        <li>
          Medir estadísticamente las razones de este desinterés hacia el
          desarrollo de software basados en los resultados del primer objetivo.
        </li>
        <li>
          Generar diversas maneras de fomentar el interés por el desarrollo de
          software en el ITS.
        </li>
      </ul>
    </section>

    <section>
      <h2>Hipótesis</h2>
      <p>
        Un 50% de los alumnos de la carrera de Ingeniería en Sistemas
        Computacionales del ITS tienen mayor interés por otras especialidades
        —redes, bases de datos, soporte técnico, mantenimiento, ciberseguridad—
        que por la de ingeniería de software. Esta hipótesis se verificará
        comparando las especialidades preferidas de los estudiantes de sistemas.
      </p>

      <h3>Hipótesis específicas</h3>
      <ul>
        <li>
          La razón principal por la que los alumnos no se quieren involucrar con
          el desarrollo de software es que consideran que los conocimientos de
          programación requeridos para desarrollar software son complejos y
          difíciles de entender.
        </li>
        <li>
          Al menos la mitad de los alumnos de la carrera de sistemas estarían
          interesados en aprender sobre programación más aplicada, como diseño
          de interfaces gráficas y desarrollo de programas en cursos y materias
          enfocados específicamente en esto.
        </li>
        <li>
          Un 25% de los alumnos creen que la poca promoción de la Ingeniería de
          Software por parte del tecnológico provoca que los alumnos no se
          interesen en esta carrera.
        </li>
      </ul>
    </section>

    <section>
      <h2 id="resultados">Resultados</h2>
      <p>Aquí se presentarán las gráficas y figuras visuales</p>
    </section>

    <section>
      <h2 id="conclusiones">Conclusiones</h2>
    </section>

    <section>
      <h2>Conoce más</h2>
    </section>

    <style jsx>{`
      nav {
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
      }

      section {
        margin: 100px 0;
      }

      .subtitle {
        font-size: 2rem;
        font-weight: 100;
      }
    `}</style>
  </Layout>
)

export default IndexPage
