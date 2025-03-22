// ABOUTME: This page answers frequently asked questions about inclusive language
// ABOUTME: It addresses common concerns and provides practical information

import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import Link from 'next/link';

export default function PreguntasFrecuentes() {
  return (
    <ContentLayout 
      title="Preguntas frecuentes" 
      description="Respuestas a las preguntas más comunes sobre el lenguaje inclusivo y nuestro proyecto"
      lastUpdated="21 de marzo de 2023"
    >
      <p>
        En esta página respondemos a las preguntas más frecuentes sobre el lenguaje inclusivo 
        con terminación en -e y sobre nuestro proyecto nobinarie.com. Si tienes alguna pregunta 
        que no encuentres aquí, no dudes en contactarnos.
      </p>

      <div className="space-y-12 mt-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Sobre el lenguaje inclusivo</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-rainbow-blue dark:text-rainbow-blue">¿Por qué es necesario el lenguaje inclusivo?</h3>
              <div className="mt-2 prose dark:prose-invert">
                <p>
                  El lenguaje inclusivo es necesario porque el español tradicional utiliza el masculino como 
                  forma "neutra" o "no marcada", lo que invisibiliza a las mujeres y personas no binarias. 
                  Además, refuerza la idea de que lo masculino es lo universal y lo neutro.
                </p>
                <p>
                  El lenguaje no solo refleja la realidad, sino que también la construye. Cuando utilizamos 
                  un lenguaje que reconoce y representa a todas las personas, contribuimos a crear una sociedad 
                  más inclusiva y equitativa.
                </p>
                <p>
                  Para profundizar en este tema, puedes visitar nuestra página{' '}
                  <Link href="/que-es-lengua-inclusiva" className="text-rainbow-blue hover:underline">
                    ¿Qué es lengua inclusiva?
                  </Link>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-rainbow-purple dark:text-rainbow-purple">¿La terminación en -e es la única forma de lenguaje inclusivo?</h3>
              <div className="mt-2 prose dark:prose-invert">
                <p>
                  No, existen diferentes formas de lenguaje inclusivo en español, como el uso de la x 
                  (todxs), el uso de la @ (tod@s), los desdoblamientos (todos y todas) o el uso de términos 
                  colectivos (el profesorado en vez de los profesores).
                </p>
                <p>
                  Sin embargo, defendemos el uso de la terminación en -e porque:
                </p>
                <ul>
                  <li>Es pronunciable, a diferencia de la "x" o la "@"</li>
                  <li>Representa una verdadera neutralidad de género, no solo una dualidad masculino/femenino</li>
                  <li>Se integra de forma natural con las reglas fonéticas y morfológicas del español</li>
                  <li>Es más accesible para personas que utilizan lectores de pantalla</li>
                </ul>
                <p>
                  Puedes leer más sobre este tema en nuestra página{' '}
                  <Link href="/por-que-usamos-la-e" className="text-rainbow-purple hover:underline">
                    ¿Por qué usamos la -e?
                  </Link>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-rainbow-green dark:text-rainbow-green">¿El lenguaje inclusivo es gramaticalmente correcto?</h3>
              <div className="mt-2 prose dark:prose-invert">
                <p>
                  El concepto de "corrección gramatical" es más complejo de lo que parece. Las lenguas 
                  evolucionan constantemente para adaptarse a las necesidades comunicativas de sus 
                  hablantes. Lo que consideramos "correcto" cambia con el tiempo.
                </p>
                <p>
                  Si bien instituciones como la Real Academia Española (RAE) no han reconocido oficialmente 
                  el lenguaje inclusivo, esto no significa que sea incorrecto. Muchos cambios lingüísticos 
                  a lo largo de la historia comenzaron como usos no reconocidos por las autoridades, para 
                  luego ser incorporados gracias al uso frecuente de los hablantes.
                </p>
                <p>
                  Además, el lenguaje inclusivo con terminación en -e respeta en gran medida la estructura 
                  morfológica del español, adaptándose a sus patrones ya existentes.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-rainbow-orange dark:text-rainbow-orange">¿Es difícil aprender a usar el lenguaje inclusivo?</h3>
              <div className="mt-2 prose dark:prose-invert">
                <p>
                  Como cualquier cambio en nuestros hábitos lingüísticos, el uso del lenguaje inclusivo puede 
                  requerir cierta práctica al principio. Sin embargo, la mayoría de las personas descubren que, 
                  con un poco de tiempo y uso cotidiano, se vuelve bastante natural.
                </p>
                <p>
                  Las reglas básicas son sencillas y consistentes:
                </p>
                <ul>
                  <li>Cambiar las terminaciones -o/-a por -e en sustantivos y adjetivos que hacen referencia a personas</li>
                  <li>Cambiar los artículos el/la por le, los/las por les</li>
                  <li>Mantener sin cambios las palabras que ya son neutras o que terminan en -e</li>
                </ul>
                <p>
                  Nuestra página de{' '}
                  <Link href="/ejemplos" className="text-rainbow-orange hover:underline">
                    ejemplos
                  </Link>{' '}
                  ofrece muchas muestras prácticas que pueden ayudarte a familiarizarte con estos patrones.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Sobre el uso práctico</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-rainbow-blue dark:text-rainbow-blue">¿Debo usar lenguaje inclusivo en todos los contextos?</h3>
              <div className="mt-2 prose dark:prose-invert">
                <p>
                  No hay una regla fija sobre cuándo usar lenguaje inclusivo. Cada persona puede decidir 
                  en qué contextos se siente cómoda utilizándolo. Sin embargo, recomendamos:
                </p>
                <ul>
                  <li>Usarlo en contextos donde quieras explícitamente incluir a todas las personas sin distinción de género</li>
                  <li>Considerarlo especialmente importante en espacios educativos, sanitarios, legales y de servicios públicos</li>
                  <li>Respetarlo como una forma de reconocimiento cuando una persona o grupo lo solicita</li>
                </ul>
                <p>
                  Recuerda que el uso del lenguaje inclusivo también puede variar según el contexto formal o 
                  informal, y según el entorno cultural o social en el que te encuentres.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-rainbow-purple dark:text-rainbow-purple">¿Qué hago si me equivoco al usar lenguaje inclusivo?</h3>
              <div className="mt-2 prose dark:prose-invert">
                <p>
                  Equivocarse es parte del proceso de aprendizaje. Si te equivocas al usar lenguaje inclusivo:
                </p>
                <ul>
                  <li>No te preocupes demasiado, es normal mientras te acostumbras</li>
                  <li>Puedes corregirte brevemente y continuar con la conversación</li>
                  <li>No es necesario hacer una gran explicación o disculpa extensa</li>
                  <li>Recuerda que la práctica constante mejorará tu fluidez</li>
                </ul>
                <p>
                  Lo importante es la intención de incluir y respetar a todas las personas, no la perfección 
                  en el uso. Con el tiempo, el uso del lenguaje inclusivo se volverá más natural.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-rainbow-green dark:text-rainbow-green">¿Cómo puedo explicar a otras personas por qué uso lenguaje inclusivo?</h3>
              <div className="mt-2 prose dark:prose-invert">
                <p>
                  Si alguien te pregunta por qué usas lenguaje inclusivo, aquí hay algunas sugerencias:
                </p>
                <ul>
                  <li>Explica que lo usas para visibilizar y respetar a todas las personas, independientemente de su género</li>
                  <li>Puedes mencionar que el lenguaje evoluciona constantemente para adaptarse a las necesidades sociales</li>
                  <li>Comparte ejemplos concretos de cómo el masculino genérico puede invisibilizar a ciertos grupos</li>
                  <li>Enfoca la conversación en el respeto y la inclusión, más que en reglas gramaticales</li>
                  <li>Si te sientes cómodo/a/e, puedes compartir experiencias personales o de personas cercanas</li>
                </ul>
                <p>
                  También puedes dirigir a las personas interesadas a recursos como este sitio web 
                  para que puedan informarse más ampliamente si lo desean.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-rainbow-red dark:text-rainbow-red">¿Qué hago si alguien se niega a usar lenguaje inclusivo al referirse a mí?</h3>
              <div className="mt-2 prose dark:prose-invert">
                <p>
                  Si te identificas con un género no binario y alguien se niega a usar lenguaje inclusivo al referirse a ti:
                </p>
                <ul>
                  <li>Puedes explicar amablemente cómo prefieres que se dirijan a ti</li>
                  <li>Recuerda que cada persona tiene su propio proceso de adaptación y aprendizaje</li>
                  <li>Si la situación es recurrente y te afecta, considera limitar la interacción con esa persona</li>
                  <li>Busca apoyo en comunidades que respeten tu identidad</li>
                  <li>En entornos laborales o educativos, infórmate sobre políticas de inclusión que puedan respaldarte</li>
                </ul>
                <p>
                  Es importante recordar que tienes derecho a ser tratade con respeto y a que tu identidad 
                  sea reconocida apropiadamente.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Sobre nobinarie.com y los diccionarios</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-rainbow-blue dark:text-rainbow-blue">¿Qué son los diccionarios de corrección ortográfica que ofrecen?</h3>
              <div className="mt-2 prose dark:prose-invert">
                <p>
                  Nuestros diccionarios son archivos que puedes instalar en procesadores de texto como 
                  Microsoft Word, LibreOffice, Google Docs y otros programas para que reconozcan como válidas 
                  las palabras con terminación en -e utilizadas en lenguaje inclusivo.
                </p>
                <p>
                  De esta manera, cuando escribas palabras como "todes", "amigues" o "compañeres", 
                  no aparecerán subrayadas en rojo como errores ortográficos.
                </p>
                <p>
                  Puedes descargar e instalar estos diccionarios desde nuestra página de{' '}
                  <Link href="/descargas" className="text-rainbow-blue hover:underline">
                    descargas
                  </Link>.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-rainbow-purple dark:text-rainbow-purple">¿En qué plataformas funcionan los diccionarios?</h3>
              <div className="mt-2 prose dark:prose-invert">
                <p>
                  Nuestros diccionarios son compatibles con:
                </p>
                <ul>
                  <li>Microsoft Word (Windows y Mac)</li>
                  <li>LibreOffice Writer</li>
                  <li>Google Docs (mediante extensión)</li>
                  <li>macOS (corrector del sistema)</li>
                  <li>iOS (corrector del sistema)</li>
                  <li>Android (depende del teclado)</li>
                  <li>Firefox (corrector integrado)</li>
                  <li>Chrome (corrector integrado)</li>
                </ul>
                <p>
                  En nuestra sección de{' '}
                  <Link href="/tutoriales" className="text-rainbow-purple hover:underline">
                    tutoriales
                  </Link>{' '}
                  encontrarás guías específicas para instalar los diccionarios en cada plataforma.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-rainbow-green dark:text-rainbow-green">¿Puedo contribuir al proyecto nobinarie?</h3>
              <div className="mt-2 prose dark:prose-invert">
                <p>
                  ¡Absolutamente! Nobinarie es un proyecto colaborativo y valoramos diferentes tipos de contribuciones:
                </p>
                <ul>
                  <li>Sugerir nuevas palabras para incluir en los diccionarios</li>
                  <li>Reportar errores o problemas técnicos</li>
                  <li>Contribuir con código si tienes conocimientos técnicos</li>
                  <li>Traducir contenidos a otros idiomas</li>
                  <li>Compartir el proyecto en tus redes sociales</li>
                  <li>Hacer una donación para mantener el sitio activo</li>
                </ul>
                <p>
                  Puedes encontrar más información en nuestra página{' '}
                  <Link href="/contribuir" className="text-rainbow-green hover:underline">
                    cómo contribuir
                  </Link>.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-rainbow-orange dark:text-rainbow-orange">¿Cómo surgió este proyecto?</h3>
              <div className="mt-2 prose dark:prose-invert">
                <p>
                  Nobinarie surgió de la necesidad práctica de contar con herramientas que facilitaran 
                  el uso del lenguaje inclusivo en entornos digitales. Lo que comenzó como un pequeño 
                  diccionario para uso personal, se ha convertido en un proyecto más amplio que busca 
                  proporcionar recursos, información y herramientas para todas las personas interesadas 
                  en el lenguaje inclusivo.
                </p>
                <p>
                  El proyecto está inspirado en los valores de la comunidad LGBTIQ+ y el movimiento por 
                  la liberación de género, y busca contribuir a una comunicación más equitativa e inclusiva.
                </p>
                <p>
                  Puedes conocer más sobre nuestra historia en la página{' '}
                  <Link href="/historia" className="text-rainbow-orange hover:underline">
                    historia del proyecto
                  </Link>.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-rainbow-red dark:text-rainbow-red">¿Quiénes están detrás de nobinarie.com?</h3>
              <div className="mt-2 prose dark:prose-invert">
                <p>
                  Nobinarie es un proyecto colectivo en el que participan personas de diferentes 
                  disciplinas y orígenes, unidas por la convicción de que el lenguaje inclusivo 
                  es una herramienta importante para construir una sociedad más justa y equitativa.
                </p>
                <p>
                  El equipo incluye lingüistas, desarrolladores de software, diseñadores, educadores 
                  y activistas, muchos de los cuales son parte de la comunidad LGBTIQ+.
                </p>
                <p>
                  Puedes conocer más sobre nosotres en la sección de{' '}
                  <Link href="/creditos" className="text-rainbow-red hover:underline">
                    créditos y agradecimientos
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-gradient-to-r from-rainbow-purple/10 to-rainbow-blue/10 dark:from-rainbow-purple/20 dark:to-rainbow-blue/20 p-6 rounded-xl my-10">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-0 mb-2">¿No encontraste tu pregunta?</h3>
        <p className="mb-4">
          Si tienes alguna pregunta que no ha sido respondida en esta sección, no dudes en contactarnos. 
          Estamos siempre dispuestes a escuchar y responder tus consultas.
        </p>
        <Link 
          href="/contribuir#contact" 
          className="btn-primary inline-flex"
        >
          Contactanos
        </Link>
      </div>

      <h2>Recursos relacionados</h2>
      
      <ul>
        <li>
          <Link href="/que-es-lengua-inclusiva" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            ¿Qué es lengua inclusiva?
          </Link>
        </li>
        <li>
          <Link href="/por-que-usamos-la-e" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            ¿Por qué usamos la -e?
          </Link>
        </li>
        <li>
          <Link href="/ejemplos" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Ejemplos de lenguaje inclusivo
          </Link>
        </li>
        <li>
          <Link href="/glosario" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Glosario de términos
          </Link>
        </li>
      </ul>
    </ContentLayout>
  );
}