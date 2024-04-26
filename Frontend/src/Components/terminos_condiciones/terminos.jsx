// Importación de bibliotecas y recursos necesarios
import React from 'react';
import logo from "../../assets/img/imgInicioRegistro/logo.png"; // Importa el logo de la tienda
import "../Inicio_sesion/formularios.css"; // Importa estilos CSS
import { Link } from "react-router-dom"; // Importa el componente Link de react-router-dom

// Definición del componente funcional TerminosCondiciones
function TerminosCondiciones() {

    // Función para manejar el envío del formulario (actualmente solo imprime un mensaje en la consola)
    const manejarEnvio = () => {
        console.log('Formulario enviado');
    };

    // Renderizado del componente
    return (
        <div className='contenedorterm'> {/* Contenedor principal */}
            <Link to="/home"> {/* Enlace al inicio */}
                <img className='logon' src={logo} alt="Logo" /> {/* Mostrar el logo */}
            </Link>

            <div className='formularioterm'> {/* Contenedor del formulario */}
                <h1 className='titulon'>Términos y condiciones</h1> {/* Título */}
                <div className='texto'> {/* Contenedor de texto */}
                    <ul> {/* Lista de viñetas */}
                        {/* Términos y condiciones detallados */}
                        <li> {/* Punto 1 */}
                            ¡Bienvenido/a a nuestra tienda en línea de bicicletas, repuestos, accesorios y vestuarios! Antes de realizar cualquier compra, te pedimos que leas detenidamente los siguientes términos y condiciones. Al utilizar nuestros servicios y realizar una compra, aceptas estar sujeto/a a estos términos y condiciones. Si tienes alguna pregunta, no dudes en contactarnos.
                        </li>
                        <li> {/* Punto 2 */}
                            1. Información de la empresa
                            <ul> {/* Sublista */}
                                <li>Nombre de la empresa: BikeStore</li>
                                <li>Dirección: CRA11 No25 Barrio: obrero</li>
                                <li>Correo electrónico: BikeStore@gmail.com</li>
                                <li>Teléfono: 3175843654</li>
                            </ul>
                        </li>
                        <li>¡Bienvenido/a a nuestra tienda en línea de bicicletas, repuestos, accesorios y vestuarios! Antes de realizar cualquier compra, te pedimos que leas detenidamente los siguientes términos y condiciones. Al utilizar nuestros servicios y realizar una compra, aceptas estar sujeto/a a estos términos y condiciones. Si tienes alguna pregunta, no dudes en contactarnos.</li>
                        <li>
                            1. Información de la empresa
                            <ul>
                                <li>Nombre de la empresa: BikeStore</li>
                                <li>Dirección: CRA11 No25 Barrio: obrero</li>
                                <li>Correo electrónico: BikeStore@gmail.com</li>
                                <li>Teléfono: 3175843654</li>
                            </ul>
                        </li>
                        <li>
                            2. Precios y pagos
                            <ul>
                                <li>Todos los precios están en [moneda local] e incluyen impuestos, a menos que se especifique lo contrario.</li>
                                <li>Los precios de los productos pueden cambiar sin previo aviso.</li>
                                <li>Aceptamos pagos mediante tarjeta de crédito, transferencia bancaria y otros métodos de pago electrónicos seguros.</li>
                                <li>Todos los pagos deben realizarse en su totalidad antes de que se procese el pedido.</li>
                            </ul>
                        </li>
                        <li>
                            3. Envíos y entregas
                            <ul>
                                <li>Ofrecemos envíos a [país/es] y trabajamos con servicios de mensajería confiables para garantizar entregas seguras y oportunas.</li>
                                <li>Los plazos de entrega pueden variar según la ubicación y la disponibilidad del producto.</li>
                                <li>Los costos de envío se calcularán al momento de pagar y pueden variar según el peso y el tamaño del paquete.</li>
                            </ul>
                        </li>
                        <li>
                            4. Devoluciones y reembolsos
                            <ul>
                                <li>Aceptamos devoluciones dentro de los [días] días siguientes a la entrega, siempre que los productos estén en su estado original y sin usar.</li>
                                <li>Los costos de envío de las devoluciones correrán a cargo del cliente, a menos que el motivo de la devolución sea un error por parte de nuestra empresa.</li>
                                <li>Se ofrecerán reembolsos completos o créditos en la tienda, según la preferencia del cliente.</li>
                            </ul>
                        </li>
                        <li>
                            5. Garantías y responsabilidades
                            <ul>
                                <li>Todos nuestros productos están garantizados contra defectos de fabricación.</li>
                                <li>No nos hacemos responsables de los daños causados por un uso inadecuado o negligente de los productos.</li>
                                <li>Nos esforzamos por ofrecer descripciones precisas y detalladas de los productos, pero no garantizamos la exactitud de la información proporcionada.</li>
                            </ul>
                        </li>
                        <li>
                            6. Privacidad y seguridad
                            <ul>
                                <li>Respetamos tu privacidad y protegemos tus datos personales de acuerdo con nuestra política de privacidad.</li>
                                <li>Utilizamos medidas de seguridad adecuadas para proteger tu información contra accesos no autorizados o uso indebido.</li>
                            </ul>
                        </li>
                        <li>
                            7. Contacto
                            <ul>
                                <li>Si tienes alguna pregunta, comentario o inquietud sobre nuestros productos o servicios, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                {/* Botón de continuar */}
                <div className='boton-container'>
                    <Link to="/registro"><button className='boton' onClick={manejarEnvio}>Continuar</button></Link>
                </div>
            </div>
        </div>
    );
}

export default TerminosCondiciones; // Exporta el componente TerminosCondiciones