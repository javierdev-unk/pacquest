const triviaData = [
  {
    concept: "CPU",
    title: "Unidad Central de Procesamiento",
    description: "El CPU es el cerebro de la computadora. Procesa todas las instrucciones y datos que pasan por el sistema.",
    question: "¿Qué significan las siglas CPU?",
    options: ["Central Processing Unit", "Computer Personal Unit", "Control Process Utility", "Central Program User"],
    correctIndex: 0
  },
  {
    concept: "RAM",
    title: "Memoria de Acceso Aleatorio",
    description: "La RAM es la memoria a corto plazo de una computadora, donde se almacenan los datos que se están utilizando en el momento.",
    question: "¿Qué sucede con la información en la RAM cuando se apaga la computadora?",
    options: ["Se guarda permanentemente", "Se borra", "Se duplica", "Se envía a la nube"],
    correctIndex: 1
  },
  {
    concept: "GPU",
    title: "Unidad de Procesamiento Gráfico",
    description: "Es un procesador especializado en el renderizado de imágenes y videos, muy importante para juegos y diseño.",
    question: "¿Cuál es la función principal de una GPU?",
    options: ["Gestionar el teclado", "Procesar gráficos", "Almacenar archivos", "Enfriar el sistema"],
    correctIndex: 1
  },
  {
    concept: "SSD",
    title: "Unidad de Estado Sólido",
    description: "Es un dispositivo de almacenamiento de datos que utiliza memoria flash para guardar información, mucho más rápido que un HDD.",
    question: "¿Cuál es la principal ventaja de un SSD sobre un HDD?",
    options: ["Es más barato", "Es más ruidoso", "Es mucho más rápido", "Tiene partes móviles"],
    correctIndex: 2
  },
  {
    concept: "HDD",
    title: "Disco Duro Rígido",
    description: "Es un dispositivo de almacenamiento que utiliza platos magnéticos giratorios para grabar datos.",
    question: "¿Cómo almacena la información un HDD?",
    options: ["Con memoria flash", "Con imanes y discos giratorios", "Con luz láser", "Con vapor de agua"],
    correctIndex: 1
  },
  {
    concept: "Placa Base",
    title: "Motherboard",
    description: "Es el componente principal que conecta todos los demás elementos de la computadora (CPU, RAM, discos, etc.).",
    question: "¿Cómo se llama la placa donde se conectan todos los componentes?",
    options: ["Placa de Video", "Placa Base (Motherboard)", "Placa de Sonido", "Placa de Red"],
    correctIndex: 1
  },
  {
    concept: "Algoritmo",
    title: "Algoritmo",
    description: "Un conjunto de pasos lógicos y finitos para resolver un problema o realizar una tarea específica.",
    question: "¿Qué es un algoritmo?",
    options: ["Un lenguaje de programación", "Una serie de pasos para resolver un problema", "Un tipo de computadora", "Una marca de mouse"],
    correctIndex: 1
  },
  {
    concept: "Variable",
    title: "Variable de Programación",
    description: "Un espacio en la memoria reservado para almacenar un valor que puede cambiar durante la ejecución de un programa.",
    question: "En programación, ¿qué es una variable?",
    options: ["Un valor que nunca cambia", "Un contenedor para almacenar datos", "Un error del sistema", "Un tipo de monitor"],
    correctIndex: 1
  },
  {
    concept: "Bucle (Loop)",
    title: "Estructura de Ciclo",
    description: "Es una instrucción que repite un bloque de código mientras se cumpla una condición específica.",
    question: "¿Para qué sirve un 'bucle' en programación?",
    options: ["Para apagar el equipo", "Para repetir instrucciones", "Para borrar archivos", "Para saltar líneas de código"],
    correctIndex: 1
  },
  {
    concept: "Función",
    title: "Función o Método",
    description: "Un bloque de código reutilizable que realiza una tarea específica y puede devolver un resultado.",
    question: "¿Cuál es el beneficio de usar funciones?",
    options: ["Hacer el código más lento", "Evitar repetir el mismo código", "Aumentar el consumo de RAM", "Cambiar el color del editor"],
    correctIndex: 1
  },
  {
    concept: "Bug",
    title: "Error de Software",
    description: "Un error, falla o defecto en un programa de computadora que causa un resultado inesperado o incorrecto.",
    question: "¿A qué se refiere el término 'Bug' en informática?",
    options: ["A un virus de hardware", "A un error de programación", "A un tipo de cable", "A un insecto real en el teclado"],
    correctIndex: 1
  },
  {
    concept: "Sistema Operativo",
    title: "Controlador Maestro",
    description: "Software que administra el hardware y permite que el usuario interactúe con la computadora.",
    question: "¿Cuál de estos es un ejemplo de Sistema Operativo?",
    options: ["Microsoft Word", "Windows 11", "Google Chrome", "Adobe Photoshop"],
    correctIndex: 1
  },
  {
    concept: "Dirección IP",
    title: "Identificador de Red",
    description: "Una etiqueta numérica que identifica de manera única a un dispositivo conectado a una red.",
    question: "¿Para qué sirve la dirección IP?",
    options: ["Para saber el precio del equipo", "Para identificar un dispositivo en la red", "Para cargar la batería", "Para limpiar el disco"],
    correctIndex: 1
  },
  {
    concept: "DNS",
    title: "Sistema de Nombres de Dominio",
    description: "Traduce los nombres de dominio (como google.com) en direcciones IP numéricas.",
    question: "¿Qué hace el DNS?",
    options: ["Acelera el internet", "Convierte nombres de web en IPs", "Bloquea anuncios", "Descarga archivos"],
    correctIndex: 1
  },
  {
    concept: "HTTP",
    title: "Protocolo de Transferencia",
    description: "Es el protocolo utilizado para transmitir documentos de hipertexto, como páginas web, en Internet.",
    question: "¿En qué lugar solemos ver las siglas HTTP?",
    options: ["En el teclado", "En las direcciones de páginas web", "En las facturas de luz", "En los cables de red"],
    correctIndex: 1
  },
  {
    concept: "Firewall",
    title: "Cortafuegos",
    description: "Un sistema de seguridad de red que monitorea y controla el tráfico entrante y saliente basado en reglas de seguridad.",
    question: "¿Cuál es la función de un Firewall?",
    options: ["Aumentar la velocidad del Wi-Fi", "Bloquear accesos no autorizados", "Limpiar virus del disco", "Apagar fuegos eléctricos"],
    correctIndex: 1
  },
  {
    concept: "Nube (Cloud)",
    title: "Computación en la Nube",
    description: "Servicios de computación (servidores, bases de datos) que se ofrecen a través de Internet.",
    question: "¿Qué significa 'guardar en la nube'?",
    options: ["Guardar en un satélite", "Guardar en servidores de internet", "Subir datos al cielo", "Guardar en un CD"],
    correctIndex: 1
  },
  {
    concept: "Software Libre",
    title: "Open Source",
    description: "Software que respeta la libertad de los usuarios y la comunidad para ejecutar, copiar, distribuir y mejorar el programa.",
    question: "¿Qué caracteriza al Software Libre?",
    options: ["Es siempre gratis", "Su código fuente es accesible para todos", "No tiene licencia", "Solo funciona en Linux"],
    correctIndex: 1
  },
  {
    concept: "Bit",
    title: "Dígito Binario",
    description: "La unidad mínima de información en informática, que puede tener el valor 0 o 1.",
    question: "¿Cuántos valores puede tener un Bit?",
    options: ["10 valores", "2 valores (0 y 1)", "Infinitos", "256 valores"],
    correctIndex: 1
  },
  {
    concept: "Byte",
    title: "Grupo de 8 Bits",
    description: "Unidad de medida de información digital que equivale a 8 bits.",
    question: "¿A cuántos bits equivale un Byte?",
    options: ["10 bits", "8 bits", "100 bits", "1 bit"],
    correctIndex: 1
  },
  {
    concept: "ASCII",
    title: "Código de Caracteres",
    description: "Un estándar para representar caracteres de texto en computadoras.",
    question: "¿Para qué se usa el código ASCII?",
    options: ["Para medir la batería", "Representar letras y números en código", "Dibujar en 3D", "Controlar la temperatura"],
    correctIndex: 1
  },
  {
    concept: "Kernel",
    title: "Núcleo del Sistema",
    description: "La parte central del sistema operativo que gestiona la comunicación entre el software y el hardware.",
    question: "¿Qué es el Kernel?",
    options: ["Un tipo de procesador", "El corazón del sistema operativo", "Un virus informático", "Una marca de laptops"],
    correctIndex: 1
  },
  {
    concept: "BIOS",
    title: "Sistema Básico de Entrada/Salida",
    description: "Firmware instalado en la placa base que se encarga del arranque inicial de la computadora.",
    question: "¿Cuándo se ejecuta la BIOS?",
    options: ["Al abrir Word", "Al encender la computadora", "Al apagar el monitor", "Al jugar Pac-Man"],
    correctIndex: 1
  },
  {
    concept: "Compilador",
    title: "Traductor de Código",
    description: "Un programa que traduce el código escrito en un lenguaje de programación a lenguaje de máquina.",
    question: "¿Qué hace un compilador?",
    options: ["Borra el código", "Traduce código humano a código de máquina", "Busca virus", "Optimiza la batería"],
    correctIndex: 1
  },
  {
    concept: "Base de Datos",
    title: "Almacén de Datos",
    description: "Un sistema organizado para almacenar y gestionar grandes cantidades de información.",
    question: "¿Qué lenguaje se usa comúnmente para consultar bases de datos?",
    options: ["HTML", "SQL", "CSS", "Photoshop"],
    correctIndex: 1
  },
  {
    concept: "Router",
    title: "Enrutador",
    description: "Dispositivo que conecta diferentes redes y dirige el tráfico de datos entre ellas.",
    question: "¿Cuál es la función de un Router?",
    options: ["Amplificar el sonido", "Dirigir el tráfico de internet", "Cargar el mouse", "Imprimir documentos"],
    correctIndex: 1
  },
  {
    concept: "Wi-Fi",
    title: "Conexión Inalámbrica",
    description: "Tecnología que permite la conexión inalámbrica de dispositivos electrónicos a una red de datos.",
    question: "¿Qué permite la tecnología Wi-Fi?",
    options: ["Imprimir en 3D", "Conectarse a internet sin cables", "Ver televisión", "Cargar el celular"],
    correctIndex: 1
  },
  {
    concept: "Bluetooth",
    title: "Red de Corto Alcance",
    description: "Protocolo de comunicaciones diseñado para conectar dispositivos de bajo consumo a corta distancia.",
    question: "¿Cuál es una característica del Bluetooth?",
    options: ["Funciona a miles de kilómetros", "Conexión inalámbrica de corto alcance", "Se usa para limpiar discos", "Es una marca de café"],
    correctIndex: 1
  },
  {
    concept: "URL",
    title: "Localizador de Recursos",
    description: "La dirección única que identifica a un recurso en la web.",
    question: "¿Qué es una URL?",
    options: ["Un tipo de monitor", "La dirección de una página web", "Un lenguaje de programación", "Una marca de discos"],
    correctIndex: 1
  },
  {
    concept: "Cookie",
    title: "Galleta Informática",
    description: "Pequeño archivo enviado por un sitio web y almacenado en el navegador del usuario.",
    question: "¿Cuál es el propósito de una cookie?",
    options: ["Alimentar al usuario", "Recordar información del usuario", "Bloquear el virus", "Aumentar el brillo"],
    correctIndex: 1
  },
  {
    concept: "Phishing",
    title: "Suplantación de Identidad",
    description: "Una técnica de ingeniería social para engañar a los usuarios y obtener información confidencial.",
    question: "¿Qué busca un ataque de Phishing?",
    options: ["Regalar dinero", "Robar datos personales y claves", "Actualizar el sistema", "Mejorar la velocidad"],
    correctIndex: 1
  },
  {
    concept: "Malware",
    title: "Software Malicioso",
    description: "Cualquier tipo de software diseñado para infiltrarse o dañar una computadora sin el consentimiento del usuario.",
    question: "¿Qué es el Malware?",
    options: ["Un programa de antivirus", "Software dañino para el equipo", "Un juego de video", "Un tipo de cable"],
    correctIndex: 1
  },
  {
    concept: "Criptografía",
    title: "Cifrado de Datos",
    description: "Técnicas de escritura secreta para proteger la información frente a terceros no autorizados.",
    question: "¿Para qué sirve la criptografía?",
    options: ["Para dibujar mejor", "Para ocultar y proteger mensajes", "Para medir la RAM", "Para borrar archivos"],
    correctIndex: 1
  },
  {
    concept: "API",
    title: "Interfaz de Programación",
    description: "Un conjunto de definiciones y protocolos que permite que dos aplicaciones se comuniquen entre sí.",
    question: "¿Qué permite una API?",
    options: ["Que dos programas hablen entre sí", "Cambiar el mouse", "Limpiar el monitor", "Jugar en línea"],
    correctIndex: 0
  },
  {
    concept: "HTML",
    title: "Lenguaje de Marcado",
    description: "El lenguaje estándar utilizado para crear y estructurar páginas web.",
    question: "¿Para qué se usa principalmente HTML?",
    options: ["Para crear bases de datos", "Para estructurar páginas web", "Para editar fotos", "Para hackear"],
    correctIndex: 1
  },
  {
    concept: "CSS",
    title: "Hojas de Estilo",
    description: "Lenguaje utilizado para definir el diseño, los colores y las fuentes de una página web.",
    question: "¿Cuál es la función del CSS?",
    options: ["Dar estilo y diseño a la web", "Controlar los servidores", "Instalar programas", "Sumar números"],
    correctIndex: 0
  },
  {
    concept: "JavaScript",
    title: "Lenguaje de Scripting",
    description: "Lenguaje que permite crear contenido dinámico e interactivo en las páginas web.",
    question: "¿Qué permite hacer JavaScript en una web?",
    options: ["Hacerla interactiva", "Solo poner texto", "Imprimir la página", "Apagar el internet"],
    correctIndex: 0
  },
  {
    concept: "Git",
    title: "Control de Versiones",
    description: "Sistema para rastrear cambios en el código fuente durante el desarrollo de software.",
    question: "¿Para qué sirve Git?",
    options: ["Navegar en la web", "Controlar versiones de código", "Escuchar música", "Dibujar en 2D"],
    correctIndex: 1
  },
  {
    concept: "Firma Digital",
    title: "Identidad Digital",
    description: "Mecanismo que asegura la autenticidad e integridad de un mensaje o documento digital.",
    question: "¿Qué garantiza una firma digital?",
    options: ["El color del archivo", "Que el documento es auténtico", "Que el virus se borró", "La velocidad de carga"],
    correctIndex: 1
  },
  {
    concept: "Servidor",
    title: "Servidor Informático",
    description: "Una computadora potente que provee servicios, datos o recursos a otras computadoras llamadas clientes.",
    question: "¿Qué hace un servidor?",
    options: ["Solo juega Pac-Man", "Provee servicios a otros equipos", "Limpia teclados", "Se usa solo para ver videos"],
    correctIndex: 1
  },
  {
    concept: "Protocolo",
    title: "Reglas de Comunicación",
    description: "Un conjunto de reglas que permiten que dos o más entidades de un sistema de comunicación se comuniquen entre sí.",
    question: "¿Qué establece un protocolo?",
    options: ["El precio del internet", "Reglas para el intercambio de datos", "El tamaño de la pantalla", "La cantidad de RAM"],
    correctIndex: 1
  },
  {
    concept: "Ping",
    title: "Latencia de Red",
    description: "Utilidad que mide el tiempo de respuesta de una conexión entre dos dispositivos de red.",
    question: "¿Qué mide el comando Ping?",
    options: ["La temperatura", "La velocidad de respuesta de la red", "La memoria libre", "La cantidad de archivos"],
    correctIndex: 1
  },
  {
    concept: "USB",
    title: "Bus Serie Universal",
    description: "Estándar que define los cables, conectores y protocolos para conectar y alimentar periféricos.",
    question: "¿Para qué sirve el puerto USB?",
    options: ["Para ver televisión", "Conectar periféricos y cargar datos", "Enfriar la CPU", "Limpiar la placa base"],
    correctIndex: 1
  },
  {
    concept: "Hardware",
    title: "Componentes Físicos",
    description: "Las partes físicas y tangibles de un sistema informático.",
    question: "¿Cuál de estos es un Hardware?",
    options: ["Windows", "El Teclado", "Chrome", "Excel"],
    correctIndex: 1
  },
  {
    concept: "Software",
    title: "Componentes Lógicos",
    description: "El conjunto de programas y reglas informáticas para ejecutar tareas en una computadora.",
    question: "¿Cuál de estos es un Software?",
    options: ["El Monitor", "La Impresora", "Google Chrome", "El Cable de red"],
    correctIndex: 2
  },
  {
    concept: "Binario",
    title: "Sistema Numérico",
    description: "Sistema que utiliza solo dos símbolos (0 y 1) para representar valores.",
    question: "¿Qué números usa el sistema binario?",
    options: ["0 al 9", "0 y 1", "Solo el 1", "A y B"],
    correctIndex: 1
  },
  {
    concept: "IoT",
    title: "Internet de las Cosas",
    description: "La red de objetos físicos conectados a internet que recolectan e intercambian datos.",
    question: "¿Qué significan las siglas IoT?",
    options: ["Internal of Tools", "Internet of Things", "Input of Total", "Internet of Technology"],
    correctIndex: 1
  },
  {
    concept: "Inteligencia Artificial",
    title: "IA",
    description: "Capacidad de las máquinas de imitar funciones cognitivas humanas como el aprendizaje y la resolución de problemas.",
    question: "¿Cuál es el objetivo de la IA?",
    options: ["Hacer que las máquinas piensen", "Consumir menos luz", "Borrar fotos", "Aumentar el brillo"],
    correctIndex: 0
  },
  {
    concept: "Blockchain",
    title: "Cadena de Bloques",
    description: "Un registro digital descentralizado y seguro de transacciones distribuido en muchas computadoras.",
    question: "¿Qué tecnología es la base del Bitcoin?",
    options: ["Photoshop", "Blockchain", "Excel", "Windows"],
    correctIndex: 1
  },
  {
    concept: "Recursividad",
    title: "Función Recursiva",
    description: "Técnica de programación donde una función se llama a sí misma para resolver un problema.",
    question: "¿Qué hace una función recursiva?",
    options: ["Se borra a sí misma", "Se llama a sí misma", "Apaga el equipo", "Solo suma 1"],
    correctIndex: 1
  }
];

// removeIf(production)
module.exports = triviaData;
// endRemoveIf(production)
