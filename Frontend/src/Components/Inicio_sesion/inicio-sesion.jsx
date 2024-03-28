import React from 'react';
import "../Inicio_sesion/inisesion.css";
function MyLoginPage() {
    return (
        <html lang="en">
            <head>
               
                <title>inicio de sesion</title>
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossorigin="anonymous"
                />
                <link rel="stylesheet" type="text/css" href="../assets/css/inisesion.css" />
            </head>
            <body className="my-login-page">
                <section className="h-100">
                    <div className="container h-100">
                        <div className="row justify-content-md-center h-100">
                            <div className="card-wrapper">
                                <div className="brand">
                                    <img src="../assets/img/LOGO.png" alt="logo" />
                                </div>
                                <div className="card fat">
                                    <div className="card-body">
                                        <h4 className="card-title">Inicio de sesión</h4>
                                        <form method="POST" className="my-login-validation" noValidate>
                                            <div className="form-group">
                                                <label htmlFor="email">Correo electrónico</label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    value=""
                                                    required
                                                    autoFocus
                                                />
                                                <div className="invalid-feedback">El correo es inválido</div>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="password">
                                                    Contraseña
                                                    <a href="forgot.html" className="float-right">
                                                        Recuperar contraseña
                                                    </a>
                                                </label>
                                                <input
                                                    id="password"
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    required
                                                    data-eye
                                                />
                                                <div className="invalid-feedback">La contraseña es obligatoria</div>
                                            </div>

                                            <div className="form-group">
                                                <div className="custom-checkbox custom-control">
                                                    <input type="checkbox" name="remember" id="remember" className="custom-control-input" />
                                                    <label htmlFor="remember" className="custom-control-label">Recordar contraseña</label>
                                                </div>
                                            </div>

                                            <div className="form-group mt-4">
                                                <button type="submit" className="btn btn-primary btn-block">
                                                    Iniciar sesión
                                                </button>
                                            </div>
                                            <div className="mt-4 text-center">
                                                ¿No tienes una cuenta? <a href="register.html">Crear cuenta</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </body>
        </html>
    );
}

export default MyLoginPage;
