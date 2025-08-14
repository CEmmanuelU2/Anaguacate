// testimoniosData.js
// ==============================================
// Archivo que contiene los datos de los testimonios.
// Las imágenes están en la carpeta `public/images` para
// que React las sirva directamente sin necesidad de import.

// Nota: process.env.PUBLIC_URL apunta al root público de React en producción.

const testimoniosData = [
  {
    id: 1,
    texto: "Utilicé la sección de datos económicos del aguacate para mi proyecto de fin de semestre. Súper útil.",
    autor: "Carolina Pérez, Estudiante de Agronomía",
    imagen: process.env.PUBLIC_URL + "/images/carolina.png",
    alt: "Carolina presentando su proyecto"
  },
  {
    id: 2,
    texto: "Gracias a esta revista he aprendido nuevas técnicas de cultivo que me han ayudado a mejorar mi producción.",
    autor: "Juan Pérez, Productor Independiente",
    imagen: process.env.PUBLIC_URL + "/images/juan.png",
    alt: "Juan en su cultivo"
  },
  {
    id: 3,
    texto: "La información técnica que comparten es precisa y actualizada. Es un recurso valioso para quienes trabajamos en investigación.",
    autor: "Marta Ruiz, Exportadora de Aguacate",
    imagen: process.env.PUBLIC_URL + "/images/marta.png",
    alt: "Marta revisando informes"
  },
  {
    id: 4,
    texto: "Excelente iniciativa. Hacía falta una publicación que abordara estos temas desde un enfoque técnico y práctico.",
    autor: "Dr. Luis Hernández, Académico",
    imagen: process.env.PUBLIC_URL + "/images/luis.png",
    alt: "Dr. Hernández dando una conferencia"
  },
  {
    id: 5,
    texto: "La interfaz de usuario es intuitiva y fácil de navegar. Mis clientes también han notado la mejora.",
    autor: "Paola Gómez, Comercializadora de Aguacate",
    imagen: process.env.PUBLIC_URL + "/images/paola.png",
    alt: "Paola mostrando la interfaz"
  },
  {
    id: 6,
    texto: "El módulo de Variables de Aguacate me permitió visualizar mejor las estadísticas de producción.",
    autor: "Carlos Ortega, Técnico agrícola",
    imagen: process.env.PUBLIC_URL + "/images/carlos.png",
    alt: "Carlos analizando datos"
  },
  {
    id: 7,
    texto: "Desde que implementamos el sistema, hemos reducido tiempos de respuesta y mejorado la gestión.",
    autor: "Laura Méndez, Coordinadora de proyectos",
    imagen: process.env.PUBLIC_URL + "/images/laura.png",
    alt: "Laura trabajando en la oficina"
  },
  {
    id: 8,
    texto: "Me encantó el enfoque académico y técnico. Ideal para profesionales y estudiantes por igual.",
    autor: "Fernando Chávez, Investigador universitario",
    imagen: process.env.PUBLIC_URL + "/images/fernando.png",
    alt: "Fernando leyendo documentos"
  }
];

export default testimoniosData;