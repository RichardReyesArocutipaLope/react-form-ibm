import './App.css'

const preguntas =
  [
    {
      pregunta: '¿Cuál es la definición de los ataques activos?',
      respuestas: {
        p1: 'a) Son aquellos en los que un atacante se involucra con la red o el sistema de manera directa.',
        p2: 'b) Son aquellos en los que un atacante intenta robar información de una red.',
        p3: 'c) Son aquellos en los que un atacante interfiere con el funcionamiento normal de una red sin intención maliciosa.',
        p4: 'd) Son aquellos en los que un atacante intenta acceder a una red sin permiso.',
        p5: 'e) Son aquellos en los que un atacante envía mensajes de spam a una red.',
      }
    },

    {
      pregunta: '¿Cuál de las siguientes características es propia de los ataques activos?',
      respuestas: {
        p1: 'a) Interacción con el sistema objetivo.',
        p2: 'b) Ausencia de intención maliciosa.',
        p3: 'c) Acción indirecta.',
        p4: 'd) No requiere conocimientos técnicos.',
        p5: 'e) No deja rastro en los registros del sistema.',
      }
    },

    {
      pregunta: '¿Qué tipo de ataque implica la modificación de información transmitida a través de la red?',
      respuestas: {
        p1: 'a) Ataque de Modificación de Datos.',
        p2: 'b) Ataque de Denegación de Servicio.',
        p3: 'c) Ataque de Hombre en Medio.',
        p4: 'd) Ataque de Suplantación de Identidad.',
        p5: 'e) Ataque de Fuerza Bruta.',
      }
    },

    {
      pregunta: '¿Cuál es el objetivo principal de los ataques de Denegación de Servicio (DoS)?',
      respuestas: {
        p1: 'a) Interrumpir o bloquear el acceso a los servicios.',
        p2: 'b) Robar información confidencial.',
        p3: 'c) Manipular los datos transmitidos.',
        p4: 'd) Interceptar la comunicación entre dos partes.',
        p5: 'e) Exponer vulnerabilidades en el sistema.',
      }
    },

    {
      pregunta: '¿En qué consiste un ataque de Hombre en Medio (MitM)?',
      respuestas: {
        p1: 'a) Interceptar la comunicación entre dos partes legítimas.',
        p2: 'b) Alterar los datos transmitidos en la red.',
        p3: 'c) Saturar una red o sistema con tráfico falso.',
        p4: 'd) Modificar la información recibida por los destinatarios.',
        p5: 'e) Obtener acceso no autorizado a un sistema mediante la fuerza bruta.',
      }
    },

    {
      pregunta: '¿Cuál es el objetivo principal de un ataque pasivo?',
      respuestas: {
        p1: 'a) Observar y monitorear al objetivo sin causar daño a la infraestructura.',
        p2: 'b) Causar daño a la infraestructura del objetivo.',
        p3: 'c) Recolectar información almacenada o transmitida por el sujeto atacado.',
        p4: 'd) Realizar ataques activos en el futuro.',
        p5: 'e) Identificar posibles ataques activos.',
      }
    },

    {
      pregunta: '¿Qué es el análisis de tráfico en un ataque pasivo?',
      respuestas: {
        p1: 'a) Observar el patrón de los mensajes, determinar la ubicación y la identidad de los servidores, y descubrir la frecuencia y longitud de los mensajes intercambiados.',
        p2: 'b) Acceder a la información encriptada de los mensajes.',
        p3: 'c) Realizar ataques activos mediante el cifrado de los mensajes.',
        p4: 'd) Descifrar la información encriptada de los mensajes.',
        p5: 'e) Proteger la comunicación mediante el uso de cifrado'
      }
    },

    {
      pregunta: '¿Cuál es el objetivo principal del "sniffing" como tipo de ataque pasivo?',
      respuestas: {
        p1: 'a) Obtener información como direcciones IP, claves y direcciones MAC.',
        p2: 'b) Interceptar paquetes de datos en redes inalámbricas.',
        p3: 'c) Configurar tarjetas inalámbricas en modo monitor.',
        p4: 'd) Protegerse contra ataques de sniffing mediante técnicas basadas en el host.',
        p5: 'e) Utilizar programas como WireShark, WinSniffer, Nmap y SpyNet.',
      }
    },

    {
      pregunta: '¿Cuál de las siguientes recomendaciones es una estrategia recomendada para protegerse delos ataques pasivos?',
      respuestas: {
        p1: 'a) Utilizar una VPN para encriptar el tráfico y ocultar sitios web, servicios y aplicaciones utilizadas.',
        p2: 'b) Utilizar programas sniffers para identificar vulnerabilidades en la red.',
        p3: 'c) Monitorear constantemente las redes utilizando sistemas de detección de intrusos.',
        p4: 'd) Verificar cuidadosamente la identidad de remitentes de correos electrónicos o visitantes deoficinas.',
        p5: 'e) Implementar la criptografía de datos en páginas web para proteger información sensible',
      }
    },

    {
      pregunta: '¿La palabra criptografía viene del griego y significa?',
      respuestas: {
        p1: 'a) Escritura secreta',
        p2: 'b) Secret read',
        p3: 'c) Escritura de cripto',
        p4: 'd) Rama de la criptología',
        p5: 'e) Cripto escritura',
      }
    },

    {
      pregunta: '¿Los mensajes a encriptar son?',
      respuestas: {
        p1: 'a) Texto plano',
        p2: 'b) Texto cifrado',
        p3: 'c) Mensaje',
        p4: 'd) Conjunto de caracteres',
        p5: 'e) Caracteres y números',
      }
    },

    {
      pregunta: '¿El resultado del proceso de encriptación es?',
      respuestas: {
        p1: 'a) Texto cifrado',
        p2: 'b) Texto encriptado',
        p3: 'c) Texto plano',
        p4: 'd) Mensaje',
        p5: 'e) Mensaje encriptado',
      }
    },

    {
      pregunta: '¿Cuál es el proceso de encriptación?',
      respuestas: {
        p1: 'a) Texto plano - encriptación - desencriptación - texto plano',
        p2: 'b) Texto plano - desencriptación - texto',
        p3: 'c) Encriptación - texto plano',
        p4: 'd) Texto plano - intruso encriptación',
        p5: 'e) Intruso - mensaje - texto plano',
      }
    },

    {
      pregunta: '¿Método que reordenan las letras, pero no las disfrazan?',
      respuestas: {
        p1: 'a) Método por transposición',
        p2: 'b) Método de sustitución',
        p3: 'c) Método de la burbuja',
        p4: 'd) Método cifrado de César',
        p5: 'e) Método de encriptación',
      }
    },

    {
      pregunta: '¿Cuántas claves se tiene en el cifrado simétrico?',
      respuestas: {
        p1: 'a) 1',
        p2: 'b) 2',
        p3: 'c) 3',
        p4: 'd) 4',
        p5: 'e) 5',
      }
    },

    {
      pregunta: '¿Qué significa NSA?',
      respuestas: {
        p1: 'a) National Security Agency',
        p2: 'b) National Succession Address',
        p3: 'c) National Space Administration',
        p4: 'd) National Security Access',
        p5: 'e) National Space Access',
      }
    },

    {
      pregunta: '¿Cuántos bits de entrada de texto plano tiene el algoritmo de cifrado DES?',
      respuestas: {
        p1: 'a) 64 bits',
        p2: 'b) 128 bits',
        p3: 'c) 256 bits',
        p4: 'd) 32 bits',
        p5: 'e) 64 bits',
      }
    },

    {
      pregunta: '¿En qué año fue creado el algoritmo AES?',
      respuestas: {
        p1: 'a) 2000',
        p2: 'b) 1677',
        p3: 'c) 1678',
        p4: 'd) 1998',
        p5: 'e) 2012',
      }
    },

    {
      pregunta: '¿Cuáles son los objetivos principales de la encriptación?',
      respuestas: {
        p1: 'a) Autenticación, confidencialidad, integridad',
        p2: 'b) Autenticación, integridad, inteligibilidad',
        p3: 'c) Autenticación, confidencialidad, estabilidad',
        p4: 'd) Autorización, confidencialidad, integridad',
        p5: 'e) Autorización, seguridad, recepción de datos',
      }
    },

    {
      pregunta: '¿Qué acciones se recomiendan para prevenir ataques de red?',
      respuestas: {
        p1: 'a) Todas las anteriores',
        p2: 'b) Uso de redes privadas virtuales',
        p3: 'c) Autenticación y filtrado de tráfico',
        p4: 'd) Protección de datos en reposo',
        p5: 'e) Cifrado de extremo a extremo',
      }
    },

    {
      pregunta: '¿Cuál no es un protocolo o tecnología de cifrado?',
      respuestas: {
        p1: 'a) HTTP',
        p2: 'b) IPSecurity',
        p3: 'c) VPN',
        p4: 'd) SSH',
        p5: 'e) SSL/TLS',
      }
    },

    {
      pregunta: '¿Cuál no es un desafío en la implementación de cifrado?',
      respuestas: {
        p1: 'a) Realización de protocolo',
        p2: 'b) Gestión de claves',
        p3: 'c) Sobrecarga computacional y de recursos',
        p4: 'd) Interoperabilidad',
        p5: 'e) Todas las anteriores',
      }
    },

    {
      pregunta: '¿Qué significa las siglas VPN?',
      respuestas: {
        p1: 'a) Virtual private network',
        p2: 'b) Virtual public network',
        p3: 'c) Virtual prime network',
        p4: 'd) Very private network',
        p5: 'e) Virus protection network',
      }
    },

    {
      pregunta: '¿Las VPN son capaces de?',
      respuestas: {
        p1: 'a) c y d son correctas',
        p2: 'b) Eliminar virus',
        p3: 'c) Ocultar la IP',
        p4: 'd) Encriptar los datos',
        p5: 'e) Comprimir información',
      }
    },

    {
      pregunta: 'No es un tipo de VPN',
      respuestas: {
        p1: 'a) VPN de encriptación',
        p2: 'b) VPN personal',
        p3: 'c) VPN de acceso remoto',
        p4: 'd) VPN móvil',
        p5: 'e) VPN de sitio a sitio',
      }
    }, ,

    {
      pregunta: 'No es una ventaja de las VPN',
      respuestas: {
        p1: 'a) Eliminar virus',
        p2: 'b) Proteger la información privada',
        p3: 'c) Ocultar la información de navegación',
        p4: 'd) Acceder a páginas web bloqueados en tu país:',
        p5: 'e) Tener acceso a más contenidos disponibles en plataformas de streaming',
      }
    },

    {
      pregunta: 'No es una desventaja de una VPN',
      respuestas: {
        p1: 'a) Añade una capa más de seguridad al encriptar los datos',
        p2: 'b) Una conexión a Internet más lenta',
        p3: 'c) Bloqueos específicos a los servicios VPN (por ejemplo, por Netflix)',
        p4: 'd) Uso ilegal de las propias VPN',
        p5: 'e) No saber cómo de fuerte es el cifrado proporcionado por la VPN',
      }
    },

    {
      pregunta: '¿Cuál es uno de los objetivos principales del cifrado asimétrico?',
      respuestas: {
        p1: 'a) Garantizar la confidencialidad de los datos.',
        p2: 'b) Verificar la integridad de los datos.',
        p3: 'c) Establecer la autoría de un mensaje.',
        p4: 'd) Proteger contra ataques de denegación de servicio.',
        p5: 'e) Facilitar la compresión de archivos.',
      }
    },

    {
      pregunta: '¿Para qué se utiliza la clave pública en el cifrado asimétrico?',
      respuestas: {
        p1: 'a) Para cifrar los datos.',
        p2: 'b) Para descifrar los datos.',
        p3: 'c) Para firmar digitalmente los datos.',
        p4: 'd) Para autenticar la identidad del remitente.',
        p5: 'e) Para generar números aleatorios criptográficamente seguros.',
      }
    },

    {
      pregunta: '¿Cuál es una aplicación común de los algoritmos de cifrado asimétrico?',
      respuestas: {
        p1: 'a) Seguridad de las transacciones en línea.',
        p2: 'b) Compresión de archivos.',
        p3: 'c) Optimización de bases de datos.',
        p4: 'd) Análisis forense de dispositivos móviles.',
        p5: 'e) Generación de hashes para contraseñas.',
      }
    },
    {
      pregunta: '¿Cuál es el objetivo principal del control del diálogo en la capa de sesión?',
      respuestas: {
        p1: 'a) Regular y coordinar la interacción entre las entidades en una comunicación.',
        p2: 'b) Establecer la autenticación y autorización de los usuarios en una sesión.',
        p3: 'c) Proporcionar la sincronización precisa entre los sistemas involucrados.',
        p4: 'd) Establecer y terminar las sesiones del usuario.',
        p5: 'e) Controlar el flujo de datos en una dirección a la vez.',
      }
    },

    {
      pregunta: '¿Cuál es el propósito principal de la gestión de tokens en la capa de sesión?',
      respuestas: {
        p1: 'a) Autenticar y autorizar a los usuarios en una sesión.',
        p2: 'b) Dividir una conexión en diferentes actividades.',
        p3: 'c) Sincronizar la comunicación entre los sistemas.',
        p4: 'd) Marcar el final de una sesión de comunicación.',
        p5: 'e) Regular y coordinar la interacción entre las entidades en una comunicación.',
      }
    },

    {
      pregunta: '¿Cuál es el objetivo de la sincronización en la capa de sesión?',
      respuestas: {
        p1: 'a) Facilitar la detección y corrección de errores en la comunicación.',
        p2: 'b) Garantizar la integridad de los datos durante la transmisión.',
        p3: 'c) Optimizar la velocidad de la conexión entre los sistemas.',
        p4: 'd) Mejorar la eficiencia en el consumo de recursos de red.',
        p5: 'e) Asegurar la confidencialidad de la información transmitida.',
      }
    },

    {
      pregunta: '¿En qué modo de comunicación los dispositivos pueden transmitir y recibir datos, pero no simultáneamente en ambas direcciones?',
      respuestas: {
        p1: 'a) Modo half-duplex.',
        p2: 'b) Modo full-duplex.',
        p3: 'c) Modo simplex.',
        p4: 'd) Modo multiplex.',
        p5: 'e) Modo unidireccional.',
      }
    },

    {
      pregunta: '¿Qué describe mejor el protocolo XDR?',
      respuestas: {
        p1: 'a) Un protocolo para transferir archivos entre arquitecturas distintas.',
        p2: 'b) Un protocolo para enviar bit entre arquitecturas distintas.',
        p3: 'c) Un protocolo de seguridad para establecer comunicaciones seguras.',
        p4: 'd) Un código de caracteres utilizado para la codificación de datos.',
        p5: 'e) Un protocolo de transmisión de paquetes entre dos routers.',
      }
    },

    {
      pregunta: '¿Cuál es la función principal del protocolo FTP?',
      respuestas: {
        p1: 'a) Transferir archivos entre sistemas principales.',
        p2: 'b) Eliminar en común de archivos entre sistemas principales.',
        p3: 'c) Transferir archivos entre sistemas distintos.',
        p4: 'd) Encriptar y descifrar datos transmitidos.',
        p5: 'e) Transferir y decodificar datos transmitidos.',
      }
    },

    {
      pregunta: '¿Qué es la Serialización?',
      respuestas: {
        p1: 'a) La serialización es el proceso de convertir un objeto en una secuencia de bytes para almacenarlo o transmitirlo.',
        p2: 'b) La serialización es un proceso utilizado para la compresión de archivos y reducir su tamaño.',
        p3: 'c) La serialización es una técnica de encriptación para asegurar la confidencialidad de los datos.',
        p4: 'd) La serialización es una técnica para verificar la integridad de los datos en una base de datos.',
        p5: 'e) La serialización es una buena práctica usada para verificar la consistencia de los datos en una red.',
      }
    },

    {
      pregunta: '¿Qué describe mejor el protocolo SSL?',
      respuestas: {
        p1: 'a) Un protocolo de seguridad para establecer comunicaciones seguras.',
        p2: 'b) Un protocolo para transferir archivos entre sistemas principales.',
        p3: 'c) Una representación estándar de varios tipos de datos.',
        p4: 'd) Un código de caracteres utilizado para la codificación de datos.',
        p5: 'e) Una regla de transmisión para redes que usa Token Ring.',
      }
    },


    {
      pregunta: '¿Cuál es la definición correcta del protocolo RPC?',
      respuestas: {
        p1: 'a) Es un protocolo que permite a un programa ejecutar procedimientos en un sistema remoto.',
        p2: 'b) Es un protocolo que envía información por tunelización.',
        p3: 'c) Es un protocolo utilizado para transmitir datos entre clientes y servidores de correo electrónico.',
        p4: 'd) Es un protocolo que funciona como base para los intercambios de datos realizados en la web.',
        p5: 'e) Es un protocolo responsable de encontrar la dirección de hardware que corresponde a una determinada dirección IP.'
      }
    },

    {
      pregunta: ' ¿Cuáles son los modos de operación en el protocolo Netbios?',
      respuestas: {
        p1: 'a) Modo datagrama - Modo sesión',
        p2: 'b) Modo broadcast - Modo Conexión',
        p3: 'c) Modo multidifusión - Modo datagrama',
        p4: 'd) Modo sesión - Modo asíncrono',
        p5: 'e) Modo síncrono - Modo sesión',
      }
    },

    {
      pregunta: '¿Cuál es el protocolo utilizado para encriptar los paquetes PPTP?',
      respuestas: {
        p1: 'a) MPPE (Microsoft Point-to-Point Encryption).',
        p2: 'b) AES (Advanced Encryption Standard).',
        p3: 'c) SSL (Secure Sockets Layer).',
        p4: 'd) TLS (Transport Layer Security).',
        p5: 'e) IP (Internet Protocol).',
      }
    },

    {
      pregunta: ' ¿Qué significa Netbios?',
      respuestas: {
        p1: 'a) Network Basic Input/Output System',
        p2: 'b) Network Base Input/Output Service',
        p3: 'c) Network Binary Output System',
        p4: 'd) Network Basic Internet System',
        p5: 'e) Network Binary Input/Output Service',
      }
    },

    {
      pregunta: '¿Cuál es el rol que cumple la capa de presentación?',
      respuestas: {
        p1: 'a) Traducir el formato y asignar sintaxis a los datos para que se puedan transmitir.',
        p2: 'b) Receptor de mensajes.',
        p3: 'c) Multiplexar las señales y transmitirlas por un mismo medio.',
        p4: 'd) Establecer una conexión entre dos sistemas.',
        p5: 'e) Emisor de mensajes.',
      }
    },

    {
      pregunta: ' ¿Cuáles son los estándares para la presentación de imágenes gráficas?',
      respuestas: {
        p1: 'a) GIF, TIFF y JPEG',
        p2: 'b) GIF, MPEG y JPEG',
        p3: 'c) GIF, TIFF y QUICKTIME',
        p4: 'd) MIDI, TIFF y JPEG',
        p5: 'e) MPEG, JPEG, GIF',
      }
    },

    {
      pregunta: '¿Cuáles son los estándares para la regular la presentación de sonido y películas?',
      respuestas: {
        p1: 'a) MIDI, MPEG y QUICKTIME.',
        p2: 'b) QUICKTIME, MIDI, GIF.',
        p3: 'c) MPEG, GIF, QUICKTIME.',
        p4: 'd) TIFF, QUICKTIME, MPEG.',
        p5: 'e) JPEG, MPEG, MIDI.',
      }
    },

    {
      pregunta: '¿Con qué capa colabora la capa de presentación?',
      respuestas: {
        p1: 'a) Capa de Aplicación.',
        p2: 'b) Capa de Sesión.',
        p3: 'c) Capa de Transporte.',
        p4: 'd) Capa de Red.',
        p5: 'e) Capa del anfitrión.',
      }
    },

    {
      pregunta: 'Además de organizar y controlar la sincronización. ¿Qué otra función importante tiene la capa de sesión?',
      respuestas: {
        p1: 'a) Sincronizar el intercambio de datos.',
        p2: 'b) Traducir diferentes formatos.',
        p3: 'c) Establecer e interrumpir una conexión.',
        p4: 'd) Define servicios de red.',
        p5: 'e) Controlar la red.',
      }
    },

    {
      pregunta: 'En casos de desconexión al estar transfiriendo un archivo, ¿cómo la capa de sesión asegura la continuación de transferencia de este archivo al reconectarse a la red?',
      respuestas: {
        p1: 'a) Mediante puntos de control.',
        p2: 'b) Mediante un permiso o solicitud.',
        p3: 'c) Se reinicia la transferencia.',
        p4: 'd) Controlando el congestionamiento.',
        p5: 'e) Se deja de retransmitir.',
      }
    },

    {
      pregunta: 'La comunicación se establece entre ambos dispositivos, de forma paralela o unidireccional.',
      respuestas: {
        p1: 'a) Control del diálogo.',
        p2: 'b) Control de finalización.',
        p3: 'c) Control de actividad.',
        p4: 'd) Control de sesión.',
        p5: 'e) Control de secuencia',
      }
    },

    {
      pregunta: 'En una conferencia web, ¿como la capa de sesión garantiza que la persona que se muestra en la pantalla sea el orador actual?',
      respuestas: {
        p1: 'a) Mediante el control de flujo.',
        p2: 'b) Mediante la recuperación de la sesión.',
        p3: 'c) Mediante sesiones fragmentadas.',
        p4: 'd) Mediante secciones guardadas.',
        p5: 'e) Mediante el acceso temporal.',
      }
    },

    {
      pregunta: '¿Cuáles son las funciones principales de la capa de presentación?',
      respuestas: {
        p1: 'a. Comprensión de datos, cifrado y formateo de datos',
        p2: 'b. Codificación, estándares y comprensión de datos',
        p3: 'c. Comprensión de datos, servicios, cifrado de datos',
        p4: 'd. Codificación, servicios y cifrado de datos',
        p5: 'e. Servicios, compresión de datos y formateo de datos',
      }
    },

    {
      pregunta: 'Se encarga de reducir el tamaño de los archivos mediante algoritmos',
      respuestas: {
        p1: 'a. Comprensión de datos',
        p2: 'b. Cifrado',
        p3: 'c. Formateo de datos',
        p4: 'd. Estándares',
        p5: 'e. Codificación',
      }
    },

    {
      pregunta: 'Se encarga de la traducción los diferentes tipos de código',
      respuestas: {
        p1: 'a. Formateo de datos',
        p2: 'b. Estándares',
        p3: 'c. Codificación',
        p4: 'd. Comprensión de datos',
        p5: 'e. Cifrado de datos',
      }
    },

    {
      pregunta: 'En el caso de una transacción en línea se procede a proteger la información durante la transmisión ¿Que función se aplica?',
      respuestas: {
        p1: 'a. Cifrado de datos',
        p2: 'b. Codificación de datos',
        p3: 'c. Forate de datos',
        p4: 'd. Comprensión de datos',
        p5: 'e. Estándares',
      }
    },


    {
      pregunta: '¿Cuál es el beneficio del cifrado de datos?',
      respuestas: {
        p1: 'a. Proteger los datos de posibles robos.',
        p2: 'b. Reducir el tamaño del mensaje.',
        p3: 'c. Facilitar el paso de mensajes.',
        p4: 'd. Serializar los datos.',
        p5: 'e. Visualizar la información.',
      }
    },

    {
      pregunta: '¿Cómo se llama la capa 6 del modelo OSI?',
      respuestas: {
        p1: 'a. Presentación',
        p2: 'b. Sesión',
        p3: 'c. Aplicación',
        p4: 'd. Codificación',
        p5: 'e. Internet',
      }
    },

    {
      pregunta: 'La reducción del tamaño de los datos de debe al servicio de:',
      respuestas: {
        p1: 'a. Comprensión de datos',
        p2: 'b. Codificación',
        p3: 'c. Estándares',
        p4: 'd. Formateo de datos',
        p5: 'e. Cifrado de datos',
      }
    },

    {
      pregunta: 'Al momento de robo de información el sustractor se encuentra con información ilegible esto se debe a:',
      respuestas: {
        p1: 'a. Cifrado',
        p2: 'b. Serialización',
        p3: 'c. Conversión',
        p4: 'd. Estandarización',
        p5: 'e. Formateo',
      }
    },

    {
      pregunta: '¿Cuál es el objetivo principal del control del diálogo en la capa de sesión?',
      respuestas: {
        p1: 'a) Regular y coordinar la interacción entre las entidades en una comunicación.',
        p2: 'b) Establecer la autenticación y autorización de los usuarios en una sesión.',
        p3: 'c) Proporcionar la sincronización precisa entre los sistemas involucrados.',
        p4: 'd) Establecer y terminar las sesiones del usuario.',
        p5: 'e) Controlar el flujo de datos en una dirección a la vez.',
      }
    },

    {
      pregunta: 'Control enfocado en la comunicación que se establece entre ambos dispositivos, de forma paralela o unidireccional.',
      respuestas: {
        p1: 'a) Control del diálogo',
        p2: 'b) Control de actividad.',
        p3: 'c) Control de sesión.',
        p4: 'd) Control de finalización.',
        p5: 'e) Control de secuencia.',
      }
    },

    {
      pregunta: 'Es una función importante de la capa de sesión',
      respuestas: {
        p1: 'a) Sincronizar el intercambio de datos.',
        p2: 'b) Traducir diferentes formatos.',
        p3: 'c) Establecer e interrumpir una conexión.',
        p4: 'd) Define servicios de red.',
        p5: 'e) Controlar la red',
      }
    },

    {
      pregunta: '¿ Cuántas capas componen el modelo OSI?',
      respuestas: {
        p1: 'a) Consta de 7',
        p2: 'b) Consta de 5',
        p3: 'c) Consta de 8',
        p4: 'd) Consta de 6',
        p5: 'e) Consta de 9',
      }
    },

    {
      pregunta: '¿Cuál de las siguientes opciones describe mejor la escalabilidad en las redes?',
      respuestas: {
        p1: 'a. La capacidad de una red para crecer y manejar un aumento en el tráfico y la carga de trabajo.',
        p2: 'b. La velocidad de conexión de una red.',
        p3: 'c. La cantidad de dispositivos conectados a una red.',
        p4: 'd. La duración de tiempo que una red ha estado en funcionamiento.',
        p5: 'e. La ubicación geográfica de una red.',
      }
    },

    {
      pregunta: '¿Cuál de las siguientes opciones no es una amenaza común de seguridad en redes?',
      respuestas: {
        p1: 'a. Firewall',
        p2: 'b. Ataque de denegación de servicio distribuido (DDoS).',
        p3: 'c. Spyware',
        p4: 'd. Troyanos',
        p5: 'e. Adware',
      }
    },

    {
      pregunta: '¿Qué es el escalado vertical en términos de escalabilidad en redes?',
      respuestas: {
        p1: 'a. Aumentar la capacidad de un servidor o dispositivo agregando más recursos, como CPU o RAM.',
        p2: 'b. Aumentar el número de servidores en una red para distribuir la carga de trabajo.',
        p3: 'c. Aumentar la velocidad de conexión de una red.',
        p4: 'd. Aumentar la cantidad de datos que se pueden transferir a través de una red en un período de tiempo determinado.',
        p5: 'e. Aumentar el número de dispositivos conectados a una red.',
      }
    },

    {
      pregunta: '¿Cuál de las siguientes afirmaciones describe mejor una amenaza de seguridad en una red?',
      respuestas: {
        p1: 'a. El robo de datos confidenciales mediante técnicas de phishing.',
        p2: 'b. El aumento de la capacidad de una red para manejar mayores volúmenes de tráfico.',
        p3: 'c. La instalación de software antivirus en los dispositivos de red.',
        p4: 'd. El uso de tecnologías inalámbricas para mejorar la conectividad.',
        p5: 'e. El monitoreo de la calidad del servicio en una red.',
      }
    },

    {
      pregunta: '¿Cuál de las siguientes opciones se considera una medida efectiva para proteger una red contra ataques cibernéticos?',
      respuestas: {
        p1: 'a. Actualizar regularmente el software y firmware de los dispositivos de red.',
        p2: 'b. Permitir el acceso abierto a la red sin restricciones.',
        p3: 'c. Utilizar contraseñas débiles para facilitar el acceso a los dispositivos de red.',
        p4: 'd. Desactivar todas las funciones de cortafuegos en la red.',
        p5: 'e. Conectar la red a cualquier punto de acceso Wi-Fi público disponible.',
      }
    },

    {
      pregunta: '¿Cuál de las siguientes opciones describe mejor el concepto de balanceo de carga en redes escalables?',
      respuestas: {
        p1: 'a. Distribuir uniformemente el tráfico entre diferentes servidores o dispositivos de red.',
        p2: 'b. Aumentar la capacidad de almacenamiento en los dispositivos de red.',
        p3: 'c. Establecer una conexión segura entre dos puntos finales de la red.',
        p4: 'd. Controlar el acceso a la red mediante la autenticación de usuarios.',
        p5: 'e. Utilizar técnicas de compresión de datos para minimizar el ancho de banda utilizado.',
      }
    },

    {
      pregunta: '¿Cuál de las siguientes afirmaciones es cierta acerca de las amenazas internas en una red?',
      respuestas: {
        p1: 'a. Las amenazas internas son más fáciles de detectar que las amenazas externas.',
        p2: 'b. Las amenazas internas sólo pueden provenir de empleados deshonestos.',
        p3: 'c. Las amenazas internas siempre son intencionales.',
        p4: 'd. Las amenazas internas solo afectan a los dispositivos de red, no a los usuarios.',
        p5: 'e. Las amenazas internas no representan un riesgo significativo para la seguridad de la red.',
      }
    },

    {
      pregunta: '¿Cuál de las siguientes opciones describe mejor el concepto de autenticación en una red escalable?',
      respuestas: {
        p1: 'a. Verificar la identidad de los dispositivos de red antes de permitirles acceder a la red.',
        p2: 'b. Establecer conexiones seguras entre diferentes puntos finales de la red.',
        p3: 'c. Utilizar técnicas de compresión de datos para reducir el ancho de banda requerido.',
        p4: 'd. Aumentar la capacidad de almacenamiento en los dispositivos de red.',
        p5: 'e. Utilizar firewalls de múltiples capas para proteger la red contra ataques.',
      }
    },

    {
      pregunta: '¿Cuál de las siguientes opciones describe mejor el concepto de ISP (Proveedor de Servicios de Internet)?',
      respuestas: {
        p1: 'a. Una empresa que ofrece acceso a Internet y servicios relacionados a los usuarios y organizaciones.',
        p2: 'b. Un dispositivo que permite la conexión de varios dispositivos a una red local.',
        p3: 'c. Un protocolo utilizado para transmitir datos a través de una red de área local (LAN).',
        p4: 'd. Un tipo de ataque cibernético que busca obtener acceso no autorizado a una red.',
        p5: 'e. Un programa de software utilizado para proteger una red contra amenazas de seguridad.',
      }
    },

    {
      pregunta: '¿Cuál de las siguientes tecnologías puede ayudar a mitigar los ataques de denegación de servicio distribuido (DDoS) en una red escalable?',
      respuestas: {
        p1: 'a. Firewall de aplicaciones web (WAF).',
        p2: 'b. Protocolo ARP (Address Resolution Protocol).',
        p3: 'c. VLANs (Virtual Local Area Networks).',
        p4: 'd. Sistema de nombres de dominio seguro (DNSSEC).',
        p5: 'e. IPsec (Internet Protocol Security).',
      }
    },

    {
      pregunta: '¿Cuál es el objetivo principal al abordar la escalabilidad de redes?',
      respuestas: {
        p1: 'a. Mantener un rendimiento óptimo y satisfacer las demandas en constante evolución.',
        p2: 'b. Minimizar las amenazas de seguridad.',
        p3: 'c. Reducir los costos de mantenimiento de la red.',
        p4: 'd. Maximizar la velocidad de conexión a Internet.',
        p5: 'e. Implementar nuevas tecnologías de comunicación.',
      }
    },

    {
      pregunta: '¿Qué buenas prácticas son fundamentales para garantizar la seguridad de una red?',
      respuestas: {
        p1: 'a. Autenticación sólida, cifrado de datos y segmentación de red.',
        p2: 'b. Actualizaciones de software y monitorización continua.',
        p3: 'c. Concienciación sobre seguridad y formación del personal.',
        p4: 'd. Implementación de firewalls y antivirus.',
        p5: 'e. Uso de redes privadas virtuales (VPN) y detección de intrusos.',
      }
    },

    {
      pregunta: '¿Cuál es la definición de escalabilidad en el contexto de los sistemas informáticos?',
      respuestas: {
        p1: 'a. La capacidad de un sistema para responder al incremento en el número de usuarios.',
        p2: 'b. La capacidad de un sistema para procesar grandes volúmenes de datos.',
        p3: 'c. La capacidad de un sistema para resistir ataques cibernéticos.',
        p4: 'd. La capacidad de un sistema para conectarse a redes externas.',
        p5: 'e. La capacidad de un sistema para adaptarse a los cambios tecnológicos.',
      }
    },

    {
      pregunta: '¿Cuál es la importancia de abordar la escalabilidad en el diseño de un sistema?',
      respuestas: {
        p1: 'a. Garantizar un rendimiento óptimo y satisfacer las demandas en constante evolución.',
        p2: 'b. Evitar amenazas de seguridad.',
        p3: 'c. Reducir los costos de mantenimiento del sistema.',
        p4: 'd. Maximizar la velocidad de procesamiento de datos.',
        p5: 'e. Implementar nuevas tecnologías de hardware.',
      }
    },

    {
      pregunta: '¿Cuál de los siguientes enfoques es recomendado para abordar la escalabilidad de redes en entornos de nube?',
      respuestas: {
        p1: 'a. Utilización de servicios de escalado automático para ajustar dinámicamente los recursos.',
        p2: 'b. Implementación de redes definidas por software (SDN) para una gestión centralizada.',
        p3: 'c. Utilización de servidores dedicados para maximizar el rendimiento.',
        p4: 'd. Priorización del uso de conexiones de red cableadas en lugar de inalámbricas.',
        p5: 'e. Implementación de contenedores para facilitar la migración de aplicaciones.',
      }
    },

    {
      pregunta: '¿Seleccione una Ventaja de la Escalabilidad:',
      respuestas: {
        p1: 'a. Todas',
        p2: 'b. Capacidad de crecimiento',
        p3: 'c. Mejora de rendimiento',
        p4: 'd. Flexibilidad',
        p5: 'e. Adaptabilidad',
      }
    },

    {
      pregunta: '¿Cuál es la amenaza de seguridad externa en Escalabilidad de Redes que infecta y daña los sistemas informáticos, propagándose a través de archivos y dispositivos?',
      respuestas: {
        p1: 'a. Caballo de Troya',
        p2: 'b. Spyware',
        p3: 'c. Ataque por denegación de servicio',
        p4: 'd. Robo de identidad',
        p5: 'e. Ataque día cero',
      }
    },

    {
      pregunta: '¿Cuál es un tipo común de ataque interno en la Escalabilidad de Redes?',
      respuestas: {
        p1: 'a. b y c',
        p2: 'b. Uso de dispositivo no autorizado',
        p3: 'c. Robo físico de los dispositivos de la empresa',
        p4: 'd. adware',
        p5: 'e. spyware',
      }
    },

    {
      pregunta: '¿Cuál de las siguientes definiciones es la más acertada para la capa de acceso del modelo jerárquico de tres capas de Cisco?',
      respuestas: {
        p1: 'a. Se encarga de proporcionar conectividad física a los dispositivos finales y controlar el acceso a la red.',
        p2: 'b. Responsable de enrutar el tráfico de datos entre diferentes redes locales.',
        p3: 'c. Es donde se realizan las funciones de seguridad y cifrado de datos en una red.',
        p4: 'd. Es donde se implementan los protocolos de enrutamiento para el intercambio de información entre diferentes redes.',
        p5: 'e. Es donde se gestionan los servicios de aplicaciones y servidores en una red.',
      }
    },

    {
      pregunta: '¿Cuál de las siguientes alternativas no es una capa del modelo jerárquico de Cisco?',
      respuestas: {
        p1: 'a. Capa de aplicación',
        p2: 'b. Capa de acceso.',
        p3: 'c. Capa de distribución',
        p4: 'd. Capa de núcleo.',
        p5: 'e. Ninguna',
      }
    },

    {
      pregunta: '¿Cuál es el propósito principal de utilizar el modelo de jerarquía de tres capas de Cisco en el diseño de la red de la nueva sucursal?',
      respuestas: {
        p1: 'a. Aumentar la escalabilidad de la red.',
        p2: 'b. Optimizar el rendimiento,',
        p3: 'c. Mejorar la seguridad.',
        p4: 'd. Facilitar la gestión y mantenimiento.',
        p5: 'e. Reducir los costos de implementación.',
      }
    },

    {
      pregunta: '¿Qué función desempeña la capa de acceso en el modelo de jerarquía de tres capas de Cisco?',
      respuestas: {
        p1: 'a. Establecer la conexión directa con los usuarios finales.',
        p2: 'b. Realizar tareas de enrutamiento y filtrado de tráfico.',
        p3: 'c. Proporcionar servicios principales de la red, como correo electrónico y acceso a Internet.',
        p4: 'd. Redirigir el tráfico de manera eficiente hacia los servicios adecuados.',
        p5: 'e. Ninguna de las anteriores.',
      }
    },

    {
      pregunta: '¿Cuál es el papel principal de la capa de distribución en el modelo de jerarquía de tres capas de Cisco?',
      respuestas: {
        p1: 'a. Realizar tareas de enrutamiento y filtrado de tráfico de red.',
        p2: 'b. Proporcionar servicios principales de la red, como correo electrónico y acceso a Internet.',
        p3: 'c. Redirigir el tráfico de manera eficiente hacia los servicios adecuados.',
        p4: 'd. Establecer la conexión directa con los usuarios finales.',
        p5: 'e. Ninguna de las anteriores.',
      }
    },

    {
      pregunta: '¿Qué función desempeña la capa de núcleo en el modelo de jerarquía de tres capas de Cisco?',
      respuestas: {
        p1: 'a. Redirigir el tráfico de manera eficiente hacia los servicios adecuados de red.',
        p2: 'b. Establecer la conexión directa con los usuarios finales.',
        p3: 'c. Realizar tareas de enrutamiento y filtrado de tráfico.',
        p4: 'd. Proporcionar servicios principales de la red, como correo electrónico y acceso a Internet.',
        p5: 'e. Ninguna de las anteriores.',
      }
    },

    {
      pregunta: '¿Cuál es el objetivo principal al diseñar la red de la nueva sucursal de la empresa?',
      respuestas: {
        p1: 'a. Aumentar la escalabilidad de la red.',
        p2: 'b. Optimizar el rendimiento.',
        p3: 'c. Mejorar la seguridad.',
        p4: 'd. Facilitar la gestión y mantenimiento.',
        p5: 'e. Reducir los costos de implementación.',
      }
    },

    {
      pregunta: '¿Cuál es el beneficio principal de utilizar el modelo de jerarquía de tres capas de Cisco en el diseño de la red?',
      respuestas: {
        p1: 'a. Mayor flexibilidad en la gestión de la red.',
        p2: 'b. Mayor eficiencia en el enrutamiento del tráfico.',
        p3: 'c. Mejor seguridad.',
        p4: 'd. Menor costo de implementación.',
        p5: 'e. Mayor rapidez en el acceso a servicios corporativos.',
      }
    },

    {
      pregunta: '¿Cuál es la función principal de la capa de distribución en el modelo de jerarquía de tres capas de Cisco?',
      respuestas: {
        p1: 'a. Realizar tareas de enrutamiento y filtrado de tráfico de red.',
        p2: 'b. Establecer la conexión directa con los usuarios finales.',
        p3: 'c. Proporcionar servicios principales de la red, como correo electrónico y acceso a Internet.',
        p4: 'd. Redirigir el tráfico de manera eficiente hacia los servicios adecuados.',
        p5: 'e. Ninguna de las anteriores.',
      }
    },



    {
      pregunta: '¿ Protocolo de transporte en el cual importa más la velocidad de transmisión a que los datos lleguen completos,',
      respuestas: {
        p1: 'a. UDP',
        p2: 'b. UTP',
        p3: 'c. TCP/IP',
        p4: 'd. TCP',
        p5: 'e. IP',
      }
    },


    {
      pregunta: '¿Las videoconferencias por Zoom, las llamadas por Whatsapp y videojuegos en línea hacen uso del protocolo de transporte:',
      respuestas: {
        p1: 'a. UDP',
        p2: 'b. UTP',
        p3: 'c. TCP/IP',
        p4: 'd. TCP',
        p5: 'e. IP',
      }
    },

    {
      pregunta: '¿Qué tipo de protocolo de transporte proporciona una entrega confiable de datos?',
      respuestas: {
        p1: 'a. TCP',
        p2: 'b. UDP',
        p3: 'c. ICMP',
        p4: 'd. HTTP',
        p5: 'e. FTP',
      }
    },

    {
      pregunta: '¿Cuál de los siguientes procesos se emplea para reensamblar los segmentos TCP en el orden original?',
      respuestas: {
        p1: 'a. Resecuenciamiento de segmentos',
        p2: 'b. Reenvío de segmentos',
        p3: 'c. Control de flujo',
        p4: 'd. Confirmación de recepción de segmentos',
        p5: 'e. Manejo de congestión',
      }
    },

    {
      pregunta: '¿Qué función de TCP asegura que cada segmento llegue a su destino?',
      respuestas: {
        p1: 'a. Confirmación de recepción de segmentos',
        p2: 'b. Resecuenciamiento de segmentos',
        p3: 'c. Retransmisión de TCP',
        p4: 'd. Reensamblaje de segmentos',
        p5: 'e. Control de flujo',
      }
    },

    {
      pregunta: '¿Qué sucede si faltan uno o más segmentos en la transmisión TCP?',
      respuestas: {
        p1: 'a. Sólo se reconocen los datos de los segmentos recibidos correctamente.',
        p2: 'b. Se retransmiten todos los segmentos desde el inicio.',
        p3: 'c. Se cancela la sesión TCP y se inicia una nueva.',
        p4: 'd. Se envía una solicitud de retransmisión al host emisor.',
        p5: 'e. Se descartan los segmentos faltantes y se continúa con la transmisión.',
      }
    },

    {
      pregunta: '¿El mecanismo de retroalimentación de TCP ajusta la tasa de transmisión de datos al flujo máximo que la red puede soportar, ¿Cuál de los procesos es?',
      respuestas: {
        p1: 'a. Control de flujo',
        p2: 'b. Resecuenciamiento de segmentos',
        p3: 'c. Reensamblaje de segmentos',
        p4: 'd. Retransmisión de TCP',
        p5: 'e. Control de congestión',
      }
    },

    {
      pregunta: '¿Qué significa UDP?',
      respuestas: {
        p1: 'a. User Datagram Protocol',
        p2: 'b. User Data Protocol',
        p3: 'c. Universal Datagram Protocol',
        p4: 'd. Unicast Datagram Protocol',
        p5: 'e. User Domain Protocol',
      }
    },

    {
      pregunta: '¿Cuál es la principal diferencia entre UDP y TCP?',
      respuestas: {
        p1: 'a. TCP garantiza la entrega de paquetes.',
        p2: 'b. UDP es más seguro que TCP.',
        p3: 'c. UDP proporciona un control de flujo confiable.',
        p4: 'd. UDP es más rápido que TCP.',
        p5: 'e. UDP permite la multiplexación de aplicaciones.',
      }
    },

    {
      pregunta: '¿Cuál es el propósito principal del protocolo DNS?',
      respuestas: {
        p1: 'a. Resolver nombres de dominio a direcciones IP.',
        p2: 'b. Controlar la congestión en la red',
        p3: 'c. Proporcionar seguridad en las comunicaciones.',
        p4: 'd. Establecer conexiones seguras entre servidores.',
        p5: 'e. Gestionar la transferencia de archivos en la red.',
      }
    },

    {
      pregunta: '¿Cuál es el propósito del campo de identificación en un paquete DNS?',
      respuestas: {
        p1: 'a. Identificar el paquete DNS correspondiente a una respuesta.',
        p2: 'b. Identificar el tipo de consulta DNS.',
        p3: 'c. Identificar el nombre de dominio del servidor DNS.',
        p4: 'd. Identificar el número de secuencia del paquete DNS.',
        p5: 'e. Identificar el tamaño del paquete DNS',
      }
    },

    {
      pregunta: '¿Cuál es el propósito principal de la capa de Transporte en la comunicación de datos?',
      respuestas: {
        p1: 'a. Control de flujo y reensamblaje de segmentos',
        p2: 'b. Encriptación de datos',
        p3: 'c. Seguimiento de direcciones IP',
        p4: 'd. Control de acceso a la red',
        p5: 'e. Administración de direcciones MAC',
      }
    },

    {
      pregunta: '¿Cuál es una función clave de la capa de Transporte?',
      respuestas: {
        p1: 'a. División de datos en segmentos',
        p2: 'b. Enrutamiento de paquetes',
        p3: 'c. Transmisión inalámbrica de datos',
        p4: 'd. Transformación de direcciones IP',
        p5: 'e. Configuración de enlaces físicos',
      }
    },

    {
      pregunta: '¿Qué se utiliza para identificar las diferentes aplicaciones en la capa de Transporte?',
      respuestas: {
        p1: 'a. Números de puerto',
        p2: 'b. Direcciones IP',
        p3: 'c. Máscaras de subred',
        p4: 'd. Direcciones MAC',
        p5: 'e. Protocolos de enrutamiento en',
      }
    },

    {
      pregunta: '¿Cuál de las siguientes funciones no es responsabilidad de la capa de Transporte?',
      respuestas: {
        p1: 'a. Encriptación de datos',
        p2: 'b. Identificación de aplicaciones',
        p3: 'c. Control de flujo',
        p4: 'd. Encapsulación de datos',
        p5: 'e. Administración de errores',
      }
    },

    {
      pregunta: '¿Qué tipo de servicios ofrece la capa de Transporte para la segmentación de datos?',
      respuestas: {
        p1: 'a. Fragmentación y reconstrucción',
        p2: 'b. Compresión y descompresión',
        p3: 'c. Autenticación y autorización',
        p4: 'd. Encapsulación y encriptación',
        p5: 'e. Balanceo de carga y redundancia',
      }
    },


    {
      pregunta: '¿Cuál de las siguientes afirmaciones describe correctamente la segmentación de datos en la capa de Transporte?',
      respuestas: {
        p1: 'a. Divide los datos en partes manejables llamadas segmentos',
        p2: 'b. Combina varios flujos de datos en uno solo',
        p3: 'c. Agrega encabezados de capa de Aplicación a los datos',
        p4: 'd. Encripta los datos antes de la transmisión',
        p5: 'e. Controla el flujo de datos entre hosts remotos',
      }
    },


    {
      pregunta: '¿Cuál es una característica clave del protocolo UDP?',
      respuestas: {
        p1: 'a. No orientado a la conexión',
        p2: 'b. Confiable y garantiza la entrega de paquetes',
        p3: 'c. Utiliza el control de congestión para evitar la pérdida de datos',
        p4: 'd. Proporciona un flujo de datos bidireccional',
        p5: 'e. Orientado a la conexión',
      }
    },

    {
      pregunta: '¿Cuál de las siguientes aplicaciones utiliza el protocolo UDP?',
      respuestas: {
        p1: 'a. Transmisión de video en tiempo real',
        p2: 'b. Correo electrónico',
        p3: 'c. Transferencia de archivos FTP',
        p4: 'd. Navegador web',
        p5: 'e. Acceso remoto a servidores',
      }
    },

    {
      pregunta: '¿Cuál es la principal ventaja de utilizar UDP en comparación con TCP?',
      respuestas: {
        p1: 'a. Velocidad de transferencia de datos',
        p2: 'b. Mayor confiabilidad y garantía de entrega de paquetes',
        p3: 'c. Menor consumo de ancho de banda de red',
        p4: 'd. Soporte para el establecimiento de conexiones seguras',
        p5: 'e. Mayor eficiencia en la detección y corrección de errores',
      }
    },


    {
      pregunta: '¿Cuál de los siguientes no es un mecanismo utilizado para el control de congestión en la capa de Transporte?',
      respuestas: {
        p1: 'a. Algoritmos de enrutamiento dinámico',
        p2: 'b. Ventana deslizante',
        p3: 'c. Retransmisión de paquetes perdidos',
        p4: 'd. Algoritmos de control de velocidad',
        p5: 'e. Detección de congestión mediante indicadores de red',
      }
    },

    {
      pregunta: '¿Qué se entiende por multiplexación en la capa de Transporte?',
      respuestas: {
        p1: 'a. La combinación de varios flujos de datos en uno solo',
        p2: 'b. La división de un flujo de datos en partes manejables',
        p3: 'c. La asignación de números de puerto a las aplicaciones',
        p4: 'd. El control de flujo de datos entre hosts remotos',
        p5: 'e. El establecimiento de una conexión entre dos hosts',
      }
    },

    {
      pregunta: '¿Cuál de las siguientes tecnologías utiliza la multiplexación en la capa de Transporte para permitir que varias aplicaciones compartan una única conexión de red?',
      respuestas: {
        p1: 'a. MPLS (Multi-Protocol Label Switching)',
        p2: 'b. ADSL (Asymmetric Digital Subscriber Line)',
        p3: 'c. Cableado estructurado',
        p4: 'd. VLAN (Virtual Local Area Network)',
        p5: 'e. VPN (Virtual Private Network)',
      }
    },




    {
      pregunta: '¿Qué es el HTTP?',
      respuestas: {
        p1: 'a.Conjunto de reglas utilizado para la transmisión y recepción de documentos hipertexto',
        p2: 'b.Conjunto de reglas aplicadas para la transmisión y recepción de documentos en formato de hojas de cálculo',
        p3: 'c.Conjunto de reglas utilizado para la transmisión y recepción de documentos multimedia',
        p4: 'd.Estándar utilizado para la transmisión y recepción de documentos en formato de presentaciones',
        p5: 'e.Protocolo utilizado para la transmisión y recepción de documentos de audio y video',
      }
    },

    {
      pregunta: '¿Cuál es el significado de las Siglas DNS?',
      respuestas: {
        p1: 'a.Domain Name System',
        p2: 'b.Doman Names Sistems',
        p3: 'c.Demean Name Systems',
        p4: 'd.Demean Name System',
        p5: 'e.Domins Name Sistems',
      }
    },

    {
      pregunta: '¿Cual de las siguientes alternativas es falsa respecto al SNMP?',
      respuestas: {
        p1: 'a.Permite monitorear y controlar dispositivos de red de forma individual, pero no la red completa como una arquitectura unificada.',
        p2: 'b.Utiliza el protocolo UDP para operar de forma eficiente consumiendo pocos recursos del procesador y la red.',
        p3: 'c.Se ha convertido en el estándar dominante para la gestión de redes.',
        p4: 'd.Es ofrecido por la mayoría de equipos de interconexión como routers, switches y PC.',
        p5: 'e.todas las anteriores',
      }
    },

    {
      pregunta: '¿Cuál no es un protocolo de la capa aplicación?',
      respuestas: {
        p1: 'a.FPT',
        p2: 'b.SNMP',
        p3: 'c.HTTP',
        p4: 'd.DNS',
        p5: 'e.SMTP',
      }
    },

    {
      pregunta: '¿Qué servicios no proporciona la capa de aplicación?',
      respuestas: {
        p1: 'a. Terminal de red físico',
        p2: 'b. Transferencia, acceso y gestión de archivos',
        p3: 'c. Direccionamiento',
        p4: 'd. Servicios de correo',
        p5: 'e. Servicios de directorio',
      }
    },

    {
      pregunta: '¿Para qué sirve un terminal de red virtual?',
      respuestas: {
        p1: 'a. Para conectarse a un host remoto',
        p2: 'b. Para gestionar archivos en un ordenador remoto',
        p3: 'c. Para proporcionar reenvío y almacenamiento de correo electrónico',
        p4: 'd. Para facilitar el acceso a una base de datos distribuida',
        p5: 'e. Para crear una estructura jerárquica de archivos',
      }
    },

    {
      pregunta: '¿Cómo define FTAM una estructura jerárquica virtual de archivos?',
      respuestas: {
        p1: 'a. Creando una estructura jerárquica de archivos',
        p2: 'b. Especificando atributos y operaciones de archivo',
        p3: 'c. Proporcionando reenvío y almacenamiento de correo electrónico',
        p4: 'd. Facilitando el acceso a una base de datos distribuida',
        p5: 'e. Emulando un terminal de software en un host remoto',
      }
    },

    {
      pregunta: '¿Cuál es la función del DNS en el direccionamiento para la comunicación cliente-servidor?',
      respuestas: {
        p1: 'a. Resuelve los nombres de dominio en direcciones IP',
        p2: 'b. Proporciona acceso a una base de datos distribuida',
        p3: 'c. Facilita la transferencia, el acceso y la gestión de archivos',
        p4: 'd. Crea una estructura jerárquica para los archivos',
        p5: 'e. Permite el reenvío y almacenamiento de correo electrónico',
      }
    },

    {
      pregunta: '¿Cuál de los siguientes modelos de referencia se divide en cuatro capas y es más simple en comparación con otros modelos?',
      respuestas: {
        p1: 'a. Modelo TCP/IP',
        p2: 'b. Modelo OSI',
        p3: 'c. Modelo Ethernet',
        p4: 'd. Modelo HTTP',
        p5: 'e. Modelo FTP',
      }
    },

    {
      pregunta: '¿En qué ámbito se utiliza principalmente el modelo OSI en la actualidad?',
      respuestas: {
        p1: 'a. teoría, educación de redes y desarrollo de protocolos y estándares',
        p2: 'b. Implementación práctica de redes',
        p3: 'c. Comunicaciones inalámbricas',
        p4: 'd. Seguridad de redes',
        p5: 'e. Navegación web',
      }
    },

    {
      pregunta: '¿Cuál de los siguientes modelos de referencia tiene siete capas y se utiliza principalmente en la teoría y educación de redes?',
      respuestas: {
        p1: 'a. Modelo OSI',
        p2: 'b. Modelo Ethernet',
        p3: 'c. Modelo TCP/IP',
        p4: 'd. Modelo WLAN',
        p5: 'e. Modelo Bluetooth',
      }
    },

    {
      pregunta: '¿Cuál de las siguientes actividades se realiza a través de la capa de aplicación?',
      respuestas: {
        p1: 'a. Acceder a recursos compartidos en la red, como impresoras y servidores de archivos.',
        p2: 'b. Establecer y mantener sesiones de comunicación entre aplicaciones.',
        p3: 'c. Enviar y recibir mensajes instantáneos.',
        p4: 'd. Transferir datos en forma de paquetes a través de la red.',
        p5: 'e. Realizar el enrutamiento de datos hacia su destino final.',
      }
    },

    {
      pregunta: '¿Cuál de las siguientes organizaciones se encarga de desarrollar estándares internacionales?',
      respuestas: {
        p1: 'a. ISO',
        p2: 'b. NASA',
        p3: 'c. FDA',
        p4: 'd. UNESCO',
        p5: 'e. OMS',
      }
    },

    {
      pregunta: '¿Qué protocolo se utiliza comúnmente para enviar y recibir correos electrónicos?',
      respuestas: {
        p1: 'a. SMTP',
        p2: 'b. HTTP',
        p3: 'c. FTP',
        p4: 'd. TCP',
        p5: 'e. DNS',
      }
    },

    {
      pregunta: '¿Cuál de las siguientes opciones es una tecnología inalámbrica utilizada para conectar dispositivos a Internet?',
      respuestas: {
        p1: 'a. Wi-Fi',
        p2: 'b. Ethernet',
        p3: 'c. USB',
        p4: 'd. HDMI',
        p5: 'e. VGA',
      }
    },

    {
      pregunta: '¿Cuál de los siguientes formatos de archivo se utiliza principalmente para comprimir archivos y carpetas?',
      respuestas: {
        p1: 'a. ZIP',
        p2: 'b. PDF',
        p3: 'c. DOCX',
        p4: 'd. MP3',
        p5: 'e. PNG',
      }
    },

    {
      pregunta: '¿Cuál de las siguientes organizaciones es responsable de establecer estándares para la World Wide Web (WWW)?',
      respuestas: {
        p1: 'a. W3C',
        p2: 'b. FIFA',
        p3: 'c. IMF',
        p4: 'd. UNICEF',
        p5: 'e. WHO',
      }
    },

    {
      pregunta: '¿Qué capa del modelo OSI es responsable del encapsulamiento de datos en redes?',
      respuestas: {
        p1: 'a. Capa de enlace de datos',
        p2: 'b. Capa de red',
        p3: 'c. Capa de transporte',
        p4: 'd. Capa de sesión',
        p5: 'e. Capa de aplicación',
      }
    },

    {
      pregunta: '¿Cuál de las siguientes opciones describe mejor el proceso de encapsulamiento de datos en la capa de transporte?',
      respuestas: {
        p1: 'a. Formateo de datos en unidades de datos del protocolo de transporte',
        p2: 'b. Agregación de encabezados y pies de página de trama',
        p3: 'c. Asignación de direcciones IP de origen y destino',
        p4: 'd. Agregación de encabezados de protocolo de transporte',
        p5: 'e. Creación de datagramas IP',
      }
    },

    {
      pregunta: '¿Qué función realiza la capa de enlace de datos durante el encapsulamiento de datos?',
      respuestas: {
        p1: 'a. Agregación de encabezados y pies de página de trama',
        p2: 'b. Agregación de encabezados de segmento',
        p3: 'c. Asignación de números de puerto',
        p4: 'd. Asignación de direcciones IP',
        p5: 'e. Creación de datagramas IP',
      }
    },

    {
      pregunta: '¿Cuál es el objetivo principal del encapsulamiento de datos en redes?',
      respuestas: {
        p1: 'a. Asegurar la integridad de los datos transmitidos',
        p2: 'b. Reducir la latencia de la red',
        p3: 'c. Incrementar la capacidad de almacenamiento en la memoria',
        p4: 'd. Establecer conexiones seguras entre redes',
        p5: 'e. Minimizar el consumo de energía en los dispositivos de red',
      }
    },

    {
      pregunta: '¿Cuál es la unidad básica de información enviada a través de una red?',
      respuestas: {
        p1: 'a. Paquete',
        p2: 'b. Trama',
        p3: 'c. Segmento',
        p4: 'd. Datagrama IP',
        p5: 'e. Bitstream',
      }
    },

    {
      pregunta: '¿Cuál de los siguientes protocolos se utiliza para la resolución de nombres de dominio en la capa de aplicación TCP/IP?',
      respuestas: {
        p1: 'a. HTTP',
        p2: 'b. FTP',
        p3: 'c. SMTP',
        p4: 'd. DHCP',
        p5: 'e. DNS',
      }
    },

    {
      pregunta: '¿Cuál de los siguientes protocolos se utiliza para el acceso remoto a dispositivos de red en la capa de aplicación TCP/IP?',
      respuestas: {
        p1: 'a. HTTP',
        p2: 'b. FTP',
        p3: 'c. SMTP',
        p4: 'd. DHCP',
        p5: 'e. Telnet',
      }
    },

    {
      pregunta: '¿Cuál de los siguientes protocolos se utiliza para la asignación automática de direcciones IP en la capa de aplicación TCP/IP?',
      respuestas: {
        p1: 'a. SMTP',
        p2: 'b. FTP',
        p3: 'c. DHCP',
        p4: 'd. SNMP',
        p5: 'e. HTTP',
      }
    },

    {
      pregunta: '¿Cuál de las siguientes características permite que los dispositivos generan automáticamente sus propias direcciones IP sin intervención manual?',
      respuestas: {
        p1: 'a. Autoconfiguración',
        p2: 'b. Retrocompatibilidad',
        p3: 'c. Autoasignación',
        p4: 'd. AutoIP',
        p5: 'e. Conmutación',
      }
    },

    {
      pregunta: '¿Aproximadamente.Cuántas IP pueden ser generadas con el protocolo IPV4?',
      respuestas: {
        p1: 'a. 4300 millones de direcciones',
        p2: 'b. 5700 millones de direcciones',
        p3: 'c. 1500 millones de direcciones',
        p4: 'd. 1.5 billones de direcciones',
        p5: 'e. 4.4 billones de direcciones',
      }
    },

    {
      pregunta: '¿De qué tamaño son las direcciones IPV4 e IPV6 respectivamente?',
      respuestas: {
        p1: 'a. 32bits y 128bits',
        p2: 'b. 64bits y 128bits',
        p3: 'c. 32bits y 96 bits',
        p4: 'd. 48bits y 256bits',
        p5: 'e. 16bits y 128bits',
      }
    },

    {
      pregunta: '¿Cual NO es una ventaja de IPV6?',
      respuestas: {
        p1: 'a. Soporte generalizado',
        p2: 'b. Mayor espacio de direcciones',
        p3: 'c. Autoconfiguración',
        p4: 'd. Mejoras en el enrutamiento y la eficiencia',
        p5: 'e. Seguridad mejorada',
      }
    },

    {
      pregunta: '¿ No es una función de la capa de aplicación',
      respuestas: {
        p1: 'a. Autonomía',
        p2: 'b. Supervisión',
        p3: 'c. Seguridad0',
        p4: 'd. Análisis',
        p5: 'e. Identificaciòn',
      }
    },

    {
      pregunta: '¿Las amenazas externas en Escalabilidad de Redes son aquellos causados por usuarios con acceso legítimo a los servidores:',
      respuestas: {
        p1: 'a. Falso',
        p2: 'b. Verdadero',
        p3: 'c. UNDEFINED',
        p4: 'd. UNDEFINED',
        p5: 'e. UNDEFINED',
      }
    },

    {
      pregunta: '¿La escalabilidad se refiere a la capacidad de una red para adaptarse y crecer en respuesta a cambios en las necesidades y demandas de los usuarios.',
      respuestas: {
        p1: 'a. Verdadero',
        p2: 'b. Falso',
        p3: 'c. UNDEFINED',
        p4: 'd. UNDEFINED',
        p5: 'e. UNDEFINED',
      }
    },

    {
      pregunta: '¿El escalado horizontal implica aumentar la capacidad de un servidor o dispositivo agregando más recursos, como CPU o RAM.',
      respuestas: {
        p1: 'a. Falso',
        p2: 'b. Verdadero',
        p3: 'c. UNDEFINED',
        p4: 'd. UNDEFINED',
        p5: 'e. UNDEFINED',
      }
    },


    {
      pregunta: '¿Cuál de los siguientes protocolos de transporte es más adecuado para enviar una película de 1GB por la red?',
      respuestas: {
        p1: 'a. UDP',
        p2: 'b. TCP',
        p3: 'c. IP',
        p4: 'd. HTTP',
        p5: 'e. UNDEFINED',
      }
    },

    {
      pregunta: '¿Cuál es el protocolo de transporte que prioriza la velocidad de transmisión sobre la integridad de los datos?',
      respuestas: {
        p1: 'a. UDP',
        p2: 'b. TCP',
        p3: 'c. IP',
        p4: 'd. FTP',
        p5: 'e. UNDEFINED',
      }
    },

    {
      pregunta: '¿Qué protocolo de transporte se utiliza comúnmente en videoconferencias, llamadas por WhatsApp y videojuegos en línea?',
      respuestas: {
        p1: 'a. UDP',
        p2: 'b. TCP',
        p3: 'c. IP',
        p4: 'd. HTTP',
        p5: 'e. UNDEFINED',
      }
    },

    {
      pregunta: '¿Cuál de los siguientes procesos se utiliza en TCP para reensamblar los segmentos en el orden original?',
      respuestas: {
        p1: 'a. Reenvío de segmentos',
        p2: 'b. Resecuenciamiento de segmentos',
        p3: 'c. Control de flujo',
        p4: 'd. Confirmación de recepción de segmentos',
        p5: 'e. UNDEFINED',
      }
    },

    {
      pregunta: '¿TCP (Transmission Control Protocol) es un protocolo de la capa de Transporte que ofrece una entrega confiable de datos.',
      respuestas: {
        p1: 'a. Verdadero',
        p2: 'b. Falso',
        p3: 'c. UNDEFINED',
        p4: 'd. UNDEFINED',
        p5: 'e. UNDEFINED',
      }
    },
    {
      pregunta: '¿Los números de puerto se utilizan en la capa de Transporte para identificar las aplicaciones y direccionar los datos a la aplicación correcta en el host de destino.',
      respuestas: {
        p1: 'a. Verdadero',
        p2: 'b. Falso',
        p3: 'c. UNDEFINED',
        p4: 'd. UNDEFINED',
        p5: 'e. UNDEFINED',
      }
    },

    {
      pregunta: '¿Supongamos que se quiere enviar una película a un amigo por la red y dicha película tiene un tamaño de 1Gb. Sería correcto usar el protocolo de transporte UDP?',
      respuestas: {
        p1: 'a. Falso',
        p2: 'b. Verdadero',
        p3: 'c. UNDEFINED',
        p4: 'd. UNDEFINED',
        p5: 'e. UNDEFINED',
      }
    },

  ]


// Función para desordenar un array utilizando el algoritmo Fisher-Yates (Knuth)
function shuffleArray(array) {
  const newArray = array.slice(); // Crear una copia del array original para no modificarlo
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}


function shuffleObjectProperties(obj) {
  // Obtener las claves (propiedades) del objeto en un array
  const keys = Object.keys(obj);

  // Crear un nuevo objeto para almacenar las propiedades desordenadas
  const shuffledObj = {};

  // Generar un orden aleatorio para las claves
  const shuffledKeys = shuffleArray(keys);

  // Asignar las propiedades desordenadas al nuevo objeto
  shuffledKeys.forEach(key => {
    shuffledObj[key] = obj[key];
  });

  return shuffledObj;
}

function App() {
  return (

    <div className='wrapper'>
      <div className='container'>
        {preguntas.map(pregunta => (
          <div>
            <h2 className='pregunta'>{pregunta.pregunta}</h2>
            {Object.keys(shuffleObjectProperties(pregunta.respuestas)).map(item => (
              <p className='respuesta' onClick={(event) => { (pregunta.respuestas['p1'] == pregunta.respuestas[item]) ? event.target.classList.add('si') : event.target.classList.add('no') }}>{pregunta.respuestas[item]}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
