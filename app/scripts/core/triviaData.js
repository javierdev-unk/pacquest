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
  },
  {
    concept: "Linux",
    title: "Sistema Operativo Linux",
    description: "Un sistema operativo de código abierto basado en Unix, muy popular en servidores y desarrollo de software.",
    question: "¿Qué es Linux?",
    options: ["Un programa de edición", "Un sistema operativo de código abierto", "Una marca de discos duros", "Un tipo de cable de red"],
    correctIndex: 1
  },
  {
    concept: "Unix",
    title: "Sistema Operativo Unix",
    description: "Un sistema operativo multiusuario y multitarea desarrollado en los años 70, base de macOS y Linux.",
    question: "¿De cuál sistema operativo derivan macOS y Linux?",
    options: ["Windows", "MS-DOS", "Unix", "Android"],
    correctIndex: 2
  },
  {
    concept: "Compresión de Datos",
    title: "Reducción de Tamaño",
    description: "Proceso de reducir el tamaño de un archivo para que ocupe menos espacio en el disco o se envíe más rápido.",
    question: "¿Para qué sirve comprimir un archivo (ej. en formato ZIP)?",
    options: ["Para que ocupe menos espacio", "Para cambiar su color", "Para que sea más ruidoso", "Para instalar más RAM"],
    correctIndex: 0
  },
  {
    concept: "LAN",
    title: "Red de Área Local",
    description: "Una red de computadoras que abarca un área reducida, como una casa, oficina o edificio.",
    question: "¿Qué significa LAN?",
    options: ["Local Area Network", "Large Android Node", "Linux Apple Network", "Logic Access Name"],
    correctIndex: 0
  },
  {
    concept: "WAN",
    title: "Red de Área Amplia",
    description: "Una red de computadoras que se extiende sobre una gran distancia geográfica. Internet es la WAN más grande.",
    question: "¿Qué tipo de red es Internet?",
    options: ["LAN", "PAN", "WAN", "MAN"],
    correctIndex: 2
  },
  {
    concept: "Banda Ancha",
    title: "Ancho de Banda",
    description: "La cantidad máxima de datos que se pueden transmitir a través de una conexión de internet en un tiempo determinado.",
    question: "¿Qué mide el ancho de banda?",
    options: ["El peso del monitor", "La velocidad de transmisión de datos", "El brillo de la pantalla", "La cantidad de teclas"],
    correctIndex: 1
  },
  {
    concept: "Latencia",
    title: "Retraso en la Red",
    description: "El tiempo que tarda un paquete de datos en viajar desde su origen hasta su destino.",
    question: "¿Qué es la latencia en internet?",
    options: ["El retraso o lag en la conexión", "La marca del router", "El costo mensual", "La cantidad de virus"],
    correctIndex: 0
  },
  {
    concept: "Pixel",
    title: "Píxel",
    description: "La unidad más pequeña y básica de una imagen digital o pantalla que puede mostrar un color.",
    question: "¿Qué es un píxel?",
    options: ["Un tipo de memoria", "La unidad mínima de una imagen en pantalla", "Un programa para escribir", "Un cable de energía"],
    correctIndex: 1
  },
  {
    concept: "Resolución",
    title: "Resolución de Pantalla",
    description: "El número total de píxeles que puede ser mostrado en la pantalla, generalmente expresado como ancho x alto (ej. 1920x1080).",
    question: "¿A qué se refiere la resolución 1080p?",
    options: ["Al precio del monitor", "Al número de teclas", "A la cantidad de píxeles en pantalla", "A la velocidad del ventilador"],
    correctIndex: 2
  },
  {
    concept: "Tasa de Refresco",
    title: "Refresh Rate (Hz)",
    description: "La cantidad de veces por segundo que la pantalla actualiza su imagen. Se mide en Hercios (Hz).",
    question: "¿En qué se mide la tasa de refresco de un monitor?",
    options: ["En Litros", "En Metros", "En Hercios (Hz)", "En Kilogramos"],
    correctIndex: 2
  },
  {
    concept: "Cache",
    title: "Memoria Caché",
    description: "Memoria temporal muy rápida que guarda datos frecuentemente usados para acceder a ellos más rápido.",
    question: "¿Para qué sirve la memoria caché?",
    options: ["Para jugar mejor", "Para acceder a datos frecuentes más rápido", "Para apagar la computadora", "Para imprimir documentos"],
    correctIndex: 1
  },
  {
    concept: "VPN",
    title: "Red Privada Virtual",
    description: "Crea una conexión segura y cifrada sobre una red menos segura, como Internet, ocultando la dirección IP real.",
    question: "¿Para qué se utiliza una VPN?",
    options: ["Para comprar juegos", "Para navegar de forma segura y privada", "Para limpiar el teclado", "Para crear virus"],
    correctIndex: 1
  },
  {
    concept: "Antivirus",
    title: "Software Antivirus",
    description: "Programa diseñado para prevenir, buscar, detectar y eliminar virus informáticos y otro software malicioso.",
    question: "¿Cuál es la función principal de un Antivirus?",
    options: ["Acelerar internet", "Detectar y eliminar software malicioso", "Hacer los juegos más rápidos", "Guardar fotos"],
    correctIndex: 1
  },
  {
    concept: "Encriptación",
    title: "Cifrado",
    description: "El proceso de convertir información legible en un formato ilegible para protegerla de accesos no autorizados.",
    question: "¿Qué hace la encriptación de extremo a extremo?",
    options: ["Borra los mensajes", "Asegura que solo el emisor y receptor puedan leer el mensaje", "Traduce idiomas", "Mejora los gráficos"],
    correctIndex: 1
  },
  {
    concept: "Frontend",
    title: "Desarrollo Frontend",
    description: "La parte de un sitio web o aplicación con la que interactúa directamente el usuario (lo que se ve).",
    question: "¿De qué se encarga un desarrollador Frontend?",
    options: ["De los servidores", "De la base de datos", "De la interfaz visual y experiencia de usuario", "De instalar cables"],
    correctIndex: 2
  },
  {
    concept: "Backend",
    title: "Desarrollo Backend",
    description: "La parte de un sitio web o aplicación que funciona detrás de escena, incluyendo el servidor y la base de datos.",
    question: "¿Qué gestiona principalmente el Backend?",
    options: ["Los colores de la web", "El servidor, la lógica y la base de datos", "El diseño del logo", "El mouse del usuario"],
    correctIndex: 1
  },
  {
    concept: "Full Stack",
    title: "Desarrollador Full Stack",
    description: "Un programador que tiene habilidades tanto en el desarrollo Frontend como en el Backend.",
    question: "¿Qué hace un desarrollador Full Stack?",
    options: ["Solo arregla teclados", "Solo diseña logos", "Trabaja en el Frontend y en el Backend", "Solo instala Windows"],
    correctIndex: 2
  },
  {
    concept: "C++",
    title: "Lenguaje C++",
    description: "Un potente lenguaje de programación de propósito general, ampliamente usado en videojuegos y sistemas operativos.",
    question: "¿Para qué es famoso el lenguaje C++?",
    options: ["Para hacer páginas web simples", "Por su alto rendimiento en videojuegos y sistemas", "Por ser el lenguaje más fácil", "Por ser usado solo en calculadoras"],
    correctIndex: 1
  },
  {
    concept: "Python",
    title: "Lenguaje Python",
    description: "Un lenguaje de programación versátil y fácil de aprender, muy popular en inteligencia artificial y análisis de datos.",
    question: "¿En qué área destaca especialmente Python actualmente?",
    options: ["En el diseño de teclados", "En la inteligencia artificial y análisis de datos", "En la impresión 3D", "En la refrigeración de PC"],
    correctIndex: 1
  },
  {
    concept: "Java",
    title: "Lenguaje Java",
    description: "Un lenguaje de programación orientado a objetos, famoso por su filosofía 'Escribe una vez, ejecuta en cualquier lugar'.",
    question: "¿Qué caracteriza al lenguaje Java?",
    options: ["Solo funciona en Windows", "Puede ejecutarse en múltiples plataformas", "Es solo para hacer dibujos", "No usa código"],
    correctIndex: 1
  },
  {
    concept: "JSON",
    title: "Notación de Objetos JS",
    description: "Un formato de texto ligero para el intercambio de datos, fácil de leer para humanos y máquinas.",
    question: "¿Para qué se utiliza JSON?",
    options: ["Para comprimir videos", "Para intercambiar datos entre cliente y servidor", "Para limpiar la pantalla", "Para apagar la PC"],
    correctIndex: 1
  },
  {
    concept: "Terminal",
    title: "Línea de Comandos",
    description: "Una interfaz basada en texto que permite a los usuarios interactuar con el sistema operativo escribiendo comandos.",
    question: "¿Qué haces en una Terminal (o Consola)?",
    options: ["Jugar con el mouse", "Escribir comandos de texto al sistema operativo", "Dibujar con el cursor", "Grabar audios"],
    correctIndex: 1
  },
  {
    concept: "Bugs vs Errores",
    title: "Tipos de Errores",
    description: "Un bug es un defecto lógico en el código, mientras que un error de sintaxis es escribir mal una instrucción.",
    question: "¿Qué es un error de sintaxis en programación?",
    options: ["Un virus en la computadora", "Un fallo de hardware", "Escribir mal el código, incumpliendo las reglas del lenguaje", "Un cable desconectado"],
    correctIndex: 2
  },
  {
    concept: "Compilar vs Interpretar",
    title: "Ejecución de Código",
    description: "Compilar traduce todo el código de una vez, interpretar lo traduce línea por línea al momento de ejecutarse.",
    question: "¿Qué hace un lenguaje interpretado?",
    options: ["Traduce y ejecuta el código línea por línea", "Convierte todo a un archivo .exe", "Borra el código fuente", "Imprime el código en papel"],
    correctIndex: 0
  },
  {
    concept: "IDE",
    title: "Entorno de Desarrollo",
    description: "Un software que proporciona herramientas completas para los programadores, como editor de código, depurador y compilador.",
    question: "¿Qué significan las siglas IDE?",
    options: ["Internet Data Editor", "Integrated Development Environment", "Internal Digital Engine", "International Display Error"],
    correctIndex: 1
  },
  {
    concept: "Debug",
    title: "Depuración de Código",
    description: "El proceso de identificar y corregir errores (bugs) en el código de un programa.",
    question: "¿Qué hace un programador al depurar (debug) un programa?",
    options: ["Le agrega virus", "Busca y corrige los errores en el código", "Cambia el color de la pantalla", "Aumenta la memoria RAM"],
    correctIndex: 1
  },
  {
    concept: "Array",
    title: "Arreglo o Vector",
    description: "Una estructura de datos que almacena una colección de elementos, generalmente del mismo tipo, en un orden específico.",
    question: "¿Qué es un Array en programación?",
    options: ["Una lista ordenada de elementos", "Un tipo de monitor", "Un error del sistema", "Una marca de mouse"],
    correctIndex: 0
  },
  {
    concept: "String",
    title: "Cadena de Texto",
    description: "En programación, un String es una secuencia de caracteres usada para representar texto.",
    question: "¿Qué almacena una variable de tipo String?",
    options: ["Solo números enteros", "Texto o cadena de caracteres", "Imágenes en 3D", "Direcciones IP"],
    correctIndex: 1
  },
  {
    concept: "Boolean",
    title: "Valor Booleano",
    description: "Un tipo de dato lógico que solo puede tener dos valores: Verdadero (True) o Falso (False).",
    question: "¿Qué valores puede tomar un Booleano?",
    options: ["Cualquier número", "Rojo o Azul", "Verdadero (True) o Falso (False)", "Días de la semana"],
    correctIndex: 2
  },
  {
    concept: "If-Else",
    title: "Estructura Condicional",
    description: "Permite al programa tomar decisiones, ejecutando un código si se cumple una condición, o de lo contrario ejecutando otro.",
    question: "¿Para qué sirve un bloque 'If-Else'?",
    options: ["Para multiplicar números", "Para tomar decisiones lógicas en el código", "Para apagar la computadora", "Para borrar archivos"],
    correctIndex: 1
  },
  {
    concept: "Servidor Web",
    title: "Web Server",
    description: "Software o hardware que almacena y entrega el contenido de los sitios web a los navegadores de los usuarios.",
    question: "¿Cuál es la función de un servidor web?",
    options: ["Limpiar virus", "Entregar páginas web a los navegadores que las solicitan", "Cargar el celular", "Imprimir fotos"],
    correctIndex: 1
  },
  {
    concept: "Navegador Web",
    title: "Browser",
    description: "Un programa de software utilizado para acceder, recuperar y ver información en la World Wide Web.",
    question: "¿Cuál de los siguientes es un Navegador Web?",
    options: ["Windows", "Google Chrome", "Excel", "Photoshop"],
    correctIndex: 1
  },
  {
    concept: "Motor de Búsqueda",
    title: "Search Engine",
    description: "Un sistema informático que busca información en la World Wide Web según los términos ingresados por el usuario.",
    question: "¿Cuál de estos es un motor de búsqueda?",
    options: ["Google", "Word", "El Teclado", "Paint"],
    correctIndex: 0
  },
  {
    concept: "Open Source",
    title: "Código Abierto",
    description: "Modelo de desarrollo de software donde el código fuente está disponible públicamente para que cualquiera lo vea, modifique y distribuya.",
    question: "¿Qué significa que un programa sea Open Source?",
    options: ["Que siempre tiene virus", "Que su código fuente es público y modificable", "Que solo funciona de día", "Que cuesta mucho dinero"],
    correctIndex: 1
  },
  {
    concept: "Licencia de Software",
    title: "Derechos de Uso",
    description: "Un contrato legal que establece cómo se puede utilizar, modificar y distribuir un programa informático.",
    question: "¿Qué define una licencia de software?",
    options: ["El color del icono", "Los términos legales para su uso y distribución", "La velocidad de carga", "El tamaño en disco"],
    correctIndex: 1
  },
  {
    concept: "Freeware",
    title: "Software Gratuito",
    description: "Software que se distribuye sin costo, pero su código fuente no está disponible para modificación.",
    question: "¿Qué diferencia al Freeware del Open Source?",
    options: ["El Freeware es gratis pero su código es cerrado (privado)", "El Freeware cuesta dinero", "El Freeware solo es para Mac", "No hay diferencia"],
    correctIndex: 0
  },
  {
    concept: "Ping vs FPS",
    title: "Juegos Online",
    description: "Ping es el retraso de la red en milisegundos, FPS son los fotogramas visuales por segundo. Ping bajo y FPS alto es lo ideal.",
    question: "En videojuegos online, ¿qué es lo ideal?",
    options: ["Ping alto y FPS bajo", "Ping bajo y FPS alto", "Que ambos sean 0", "No importan los FPS"],
    correctIndex: 1
  },
  {
    concept: "Mac Address",
    title: "Dirección Física",
    description: "Un identificador único asignado a las interfaces de red de un dispositivo para comunicaciones en red.",
    question: "¿Qué es una dirección MAC?",
    options: ["Una computadora de Apple", "La dirección física única de una tarjeta de red", "Una dirección de correo", "Un tipo de hamburguesa"],
    correctIndex: 1
  },
  {
    concept: "IPv4 vs IPv6",
    title: "Protocolo de Internet",
    description: "IPv4 usa direcciones numéricas de 32 bits. Como se agotaron, se creó IPv6 que usa 128 bits e incluye letras.",
    question: "¿Por qué se creó el estándar IPv6?",
    options: ["Para hacerlo más difícil", "Porque las direcciones IPv4 se estaban agotando", "Para vender nuevos routers", "Para borrar el internet antiguo"],
    correctIndex: 1
  },
  {
    concept: "Ancho de Banda vs Velocidad",
    title: "Redes",
    description: "El ancho de banda es la capacidad de la tubería de datos, la velocidad es qué tan rápido fluyen realmente los datos.",
    question: "Si comparamos el internet con una tubería de agua, ¿qué sería el ancho de banda?",
    options: ["El color del agua", "El grosor o diámetro de la tubería", "La temperatura del agua", "El costo de la tubería"],
    correctIndex: 1
  },
  {
    concept: "Ciberseguridad",
    title: "Seguridad Informática",
    description: "La práctica de proteger sistemas, redes y programas de ataques digitales.",
    question: "¿Cuál es el objetivo de un ciberataque?",
    options: ["Limpiar el polvo de la PC", "Acceder, alterar o destruir información sensible", "Actualizar el reloj", "Mejorar la conexión"],
    correctIndex: 1
  },
  {
    concept: "Ransomware",
    title: "Secuestro de Datos",
    description: "Un tipo de software malicioso que bloquea el acceso a los datos de la víctima, exigiendo un rescate para liberarlos.",
    question: "¿Qué caracteriza a un ataque de Ransomware?",
    options: ["Borra todos los juegos", "Secuestra la información y pide un rescate económico", "Apaga el monitor", "Imprime hojas en blanco"],
    correctIndex: 1
  },
  {
    concept: "DDoS",
    title: "Ataque de Denegación",
    description: "Un ataque que busca saturar un servidor o red con tráfico falso para que no pueda responder a usuarios legítimos.",
    question: "¿Qué ocurre durante un ataque DDoS?",
    options: ["Se va la luz eléctrica", "Se inunda de tráfico un servidor hasta colapsarlo", "Se roban las contraseñas", "Se cambia el fondo de pantalla"],
    correctIndex: 1
  },
  {
    concept: "Framework",
    title: "Marco de Trabajo",
    description: "Una estructura base de código que proporciona herramientas y librerías predefinidas para acelerar el desarrollo.",
    question: "¿Para qué usan los programadores un Framework?",
    options: ["Para crear virus", "Para no tener que programar todo desde cero y ahorrar tiempo", "Para escribir más lento", "Para jugar videojuegos"],
    correctIndex: 1
  },
  {
    concept: "Librería (Library)",
    title: "Biblioteca de Código",
    description: "Un conjunto de funciones o códigos preescritos que los programadores pueden usar para tareas específicas.",
    question: "¿Qué es una librería en programación?",
    options: ["Una tienda de libros", "Un conjunto de código reutilizable para tareas específicas", "Un tipo de disco duro", "Un antivirus"],
    correctIndex: 1
  },
  {
    concept: "SQL",
    title: "Lenguaje de Consultas",
    description: "Structured Query Language, es el lenguaje estándar utilizado para gestionar y consultar bases de datos relacionales.",
    question: "¿Qué tipo de bases de datos utilizan principalmente SQL?",
    options: ["Bases de datos relacionales (con tablas)", "Bases de datos de imágenes", "Archivos de audio", "Bases de datos de juegos"],
    correctIndex: 0
  },
  {
    concept: "NoSQL",
    title: "Bases de Datos No Relacionales",
    description: "Sistemas de bases de datos que no usan tablas relacionales, ideales para almacenar datos no estructurados a gran escala.",
    question: "¿Cuál es una ventaja de las bases de datos NoSQL?",
    options: ["Son más lentas", "Son ideales para datos muy flexibles o no estructurados", "No guardan información", "Solo funcionan sin internet"],
    correctIndex: 1
  },
  {
    concept: "Big Data",
    title: "Macrodatos",
    description: "Término que describe el enorme volumen de datos que inunda los negocios cada día, y cómo se analizan para tomar decisiones.",
    question: "¿Qué busca el análisis de Big Data?",
    options: ["Encontrar patrones útiles en volúmenes masivos de información", "Borrar archivos grandes", "Aumentar el tamaño de la pantalla", "Acelerar el Wi-Fi"],
    correctIndex: 0
  },
  {
    concept: "Algoritmo Genético",
    title: "Inteligencia Artificial",
    description: "Un método de búsqueda y optimización basado en el proceso biológico de evolución natural (mutación y selección).",
    question: "¿En qué se inspiran los algoritmos genéticos?",
    options: ["En la teoría de la relatividad", "En la evolución biológica y selección natural", "En la receta del pan", "En la construcción de edificios"],
    correctIndex: 1
  },
  {
    concept: "Machine Learning",
    title: "Aprendizaje Automático",
    description: "Una rama de la inteligencia artificial que permite a las computadoras aprender de los datos sin ser programadas explícitamente.",
    question: "¿Cómo aprenden los sistemas de Machine Learning?",
    options: ["Leyendo libros", "Entrenándose con grandes cantidades de datos", "Copiando a otros robots", "Viendo videos"],
    correctIndex: 1
  }
];

// removeIf(production)
module.exports = triviaData;
// endRemoveIf(production)
