
--?3#Kf2h+$Qf6C8W

-- Create the tables
CREATE TABLE IF NOT EXISTS articulos (
  idArticulos SERIAL PRIMARY KEY,
  idCategorias INT NOT NULL,
  idMarca INT NOT NULL,
  tipo VARCHAR(50) NOT NULL,
  nombre VARCHAR(150) NOT NULL,
  costo INT NOT NULL,
  margen DECIMAL(5,0) NOT NULL,
  descuento DECIMAL(5,0) NOT NULL,
  impuesto DECIMAL(5,0) NOT NULL,
  stock INT NOT NULL,
  descipcion VARCHAR(50) NOT NULL, 
  img VARCHAR(200) NOT NULL
);
 
CREATE TABLE IF NOT EXISTS categorias (
  idCategoria SERIAL PRIMARY KEY,
  descripcion VARCHAR(11) NOT NULL
);

CREATE TABLE IF NOT EXISTS marcas (
  idMarca SERIAL PRIMARY KEY,
  marca VARCHAR(20) NOT NULL,
  img VARCHAR(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS rol (
  idRol SERIAL PRIMARY KEY,
  descripcion VARCHAR(50) NOT NULL,
  estado VARCHAR(8) NOT NULL
);

CREATE TABLE IF NOT EXISTS usuarios (
  idUsuarios SERIAL PRIMARY KEY,
  nombre VARCHAR(150) NOT NULL,
  noDocumento VARCHAR(15) NOT NULL,
  correo VARCHAR(50) NOT NULL,
  direccion VARCHAR(100) NOT NULL,
  idRol INT NOT NULL,
  FOREIGN KEY (idRol) REFERENCES rol (idRol)
);

CREATE TABLE IF NOT EXISTS telefonos (
  idTelefonos SERIAL PRIMARY KEY,
  numero TEXT NOT NULL,
  idUsuarios INT NOT NULL,
  FOREIGN KEY (idUsuarios) REFERENCES usuarios (idUsuarios)
);

CREATE TABLE IF NOT EXISTS ventascap (
  idVenta SERIAL PRIMARY KEY,
  idUsuarios INT NOT NULL,
  valorTotal INT NOT NULL,
  estado VARCHAR(15) NOT NULL,
  fecha DATE NOT NULL,
  FOREIGN KEY (idUsuarios) REFERENCES usuarios (idUsuarios)
);

CREATE TABLE IF NOT EXISTS ventasdet (
  idVentasDet SERIAL PRIMARY KEY,
  idArticulos INT NOT NULL,
  precioUnitario INT NOT NULL,
  idVenta INT NOT NULL,
  valorDescuento INT NOT NULL,
  cantidad VARCHAR(20) NOT NULL,
  totalPagar INT NOT NULL,
  FOREIGN KEY (idArticulos) REFERENCES articulos (idArticulos),
  FOREIGN KEY (idVenta) REFERENCES ventascap (idVenta)
);
-- Agregar las llaves foráneas a la tabla articulos
ALTER TABLE articulos
ADD CONSTRAINT fk_categoria
FOREIGN KEY (idCategorias) REFERENCES categorias(idCategoria),
ADD CONSTRAINT fk_marca
FOREIGN KEY (idMarca) REFERENCES marcas(idMarca);

-- Insert data into tables
INSERT INTO marcas (marca, img) VALUES
('Fox', 'https://enduro21.com/images/2022/july-2022/vista-outdoor-acquires-fox-racing-/fox_racing_logo.jpg'),
('Specialized', 'https://upload.wikimedia.org/wikipedia/commons/2/24/Specialized_red_S_black_logotype.jpg'),
('Optimus', 'https://bicicletasellibertador.com/wp-content/uploads/2015/11/optimus-marca.jpg-1.png'),
('Venzo', 'https://www.bikemax.com.ar/wp-content/uploads/2020/05/Logo-Venzo-bicicletas-en-rosario.jpg');

INSERT INTO rol (descripcion, estado) VALUES
('administrador', 'activo'),
('cliente', 'activo');

INSERT INTO usuarios (nombre, noDocumento, correo, direccion, idRol) VALUES
('Ingrid Julieth Arce Castro', '1115548234', 'ajulieth918@gmail.com', 'callejon san jorge poste 56 - casa 11', 1),
('Juan Jose Cespedes Villota', '1107844348', 'cespedesvillotaj@gmail.com', 'buchitolo carrera 5 casa #6-16', 1),
('Sebastian Rodriguez prado', '1114314888', 'sebasrodrigueztian0gmail.com', 'el 20 de julio carrera #14-61', 2),
('Luis Miguel Ibargüen David', '1114877196', 'Luis.m.i.d.205@gmail.com', ' Villa Patricia carrera 11bis 8c18 ', 2);

INSERT INTO telefonos (numero, idUsuarios) VALUES
('311697582', 1),
('316453606', 3),
('31034843485', 4),
('3023996428', 2),
('3108308270', 1);