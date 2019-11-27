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
      <a download href="../static/files/articulo.pdf">Articulo</a>
      <NavbarLink text="Conclusiones" href="#conclusiones" />
    </nav>
    <h1>El desinterés de los alumnos del ITS por la Ingeniería de Software</h1>

    <p className="intro">
      Este es el componente computacional de la Investigación "El desinterés de
      los alumnos del ITS por la ingeniería de software". A continuación se
      presentan los resultados obtenidos tras la encuesta realizada a
      aproximadamente setenta y siete alumnos de la especialidad de Sistemas
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
      <h2 id="objetivos">Objetivos</h2>
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
      <p>
        En esta sección se da respuesta a las preguntas de hipótesis planteadas
        inicialmente. Tomando en cuenta los resultados obtenidos, podemos
        obtener las siguientes conclusiones:
      </p>
      <ul>
        <li>
          No existe un desinterés generalizado de los alumnos de sistemas
          computacionales por la ingeniería de software. De hecho, es al
          contrario. El área de especialización preferida de los alumnos es la
          del desarrollo y programación, con un 40% de la muestra eligiendo este
          campo. Sin embargo, nuestra hipótesis que dice que la mayoría de los
          alumnos prefiere otra especialización distinta
          <b> se acepta como verdadera </b>, puesto que un 60% de los alumnos
          eligió una especialización distinta a la ingeniería de software.
        </li>
        <li>
          La mayoría de los alumnos de sistemas computacionales no dicen
          sentirse preparados para entrar a laborar en la industria de
          desarrollo web. Esta conclusión es alarmante, dado que las tecnologías
          web hoy en día son las que marcan la pauta del desarrollo tecnológico
          de software y si el instituto no capacita a sus alumnos correctamente,
          pueden quedarse rezagados en este ámbito
        </li>
        <li>
          Los alumnos de sistemas están muy interesados por recibir capacitación
          de temas de ingeniería de software ya que el 97% afirmó que busca
          desarrollarse profesionalmente. Sin embargo, el 35% admitió que
          solamente recibiría las capacitaciones si estas son gratis.
        </li>
        <li>
          Quienes ponen la ingeniería de software como su última opción tienden
          a hacer esto porque creen que no son buenos programadores. Esto nos
          indica que hay un “temor” hacia la programación que ocasiona que los
          alumnos no quieran ingresar a esa área.
        </li>
        <li>
          Una gran cantidad de los alumnos piensa que el tecnológico tiene el
          rol de enseñar a sus alumnos tecnologías de vanguardia. Este consenso
          quiere decir que de cierta forma ven al tecnológico responsable de su
          incapacidad de salir al entorno laboral como desarrolladores web.
        </li>
        <li>
          La dificultad percibida del desarrollo de software y programación no
          impide que los alumnos quieran escogerla como su opción número uno
          para especializarse. Esto quiere decir que, a pesar de ser un reto
          obtener las habilidades necesarias, los alumnos del tecnológico
          aspiran a ser desarrolladores de aplicaciones y soluciones innovadoras
          por medio de software.
        </li>
      </ul>
    </section>

    <section>
      <h2>Conoce más</h2>
      <ol>
        <li>
          Schmelkes, Corina y Elizondo Schmelkes, Nora. 2010.{" "}
          <i>
            Manual para la presentación de proyectos e informes de investigación
            (tesis)
          </i>{" "}
          (3era edición). Oxford University Press. s/l
        </li>
        <li>
          Sommerville, Ian. (2011). Software engineering (9th ed., p. 6).
          Pearson Education Inc. s/l
        </li>
        <li>
          Ruiz de la Peña, J., & Aguilera Cruz, O. (2007).{" "}
          <i>
            Importancia de la Ingeniería de Software en la producción de
            software.
          </i>{" "}
          Ciencias Holguín, XIII (2), 1-8.
        </li>
        <li>
          The Institute Of Electrical And Electronics Engineers. 1990.{" "}
          <i>IEEE Standard Glossary of Software Engineering Terminology.</i> New
          York, USA.
        </li>
        <li>
          Flores Torres, Iván, González Cruz Graciela y Rodríguez Rivera, Isela.
          2007. “Estrategias de Enseñanza Para Abatir La Apatía Del Alumno de
          Secundaria”.{" "}
          <i>
            Revista Iberoamericana Para la Investigación y el Desarrollo
            Educativo.
          </i>{" "}
          Enero - Junio 2013. Publicación #10. s/l
        </li>
        <li>
          Monje Álvarez, Carlos Arturo. 2011.{" "}
          <i>Metodología De La Investigación Cuantitativa Y Cualitativa.</i>{" "}
          Universidad Surcolombiana, Facultad de Ciencias Sociales y Humanas.
          Neiva, Colombia.
        </li>
        <li>
          Robles, Francia. Lifeder. Los 15 Tipos de Investigación Científica y
          sus Características - Lifeder. (2018). Lifeder. Obtenida el 3 de mayo
          de 2019.
          <a
            href="https://www.lifeder.com/tipos-investigacion-cientifica/"
            target="_blank"
          >
            Página web
          </a>
        </li>
        <li>
          The R Foundation. R Project. What is R? Obtenida el 6 de octubre de
          2019.{" "}
          <a href="https://www.r-project.org/about.html" target="_blank">
            Página web
          </a>
        </li>
      </ol>
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

      .intro {
        font-size: 1.5rem;
        font-weight: 100;
      }

      .subtitle {
        font-size: 2rem;
        font-weight: 100;
      }
    `}</style>
  </Layout>
)

export default IndexPage
