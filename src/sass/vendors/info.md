# vendors

## Esta carpeta tiene dos opciones en función de si estáis empleando webpack o no

### En el caso de que estéis compilando mediante webpack, es probable que vuestros vendors residan en la carpeta /node_modules , de modo que en nuestra carpeta /assets/vendors lo que haremos será alojar partials encargados de importar los archivos de /node_modules (si no necesitamos realizar ninguna modificación sobre los archivos) y de sobrescribir aquellas partes que necesitemos (no es buena idea modificar directamente las librerías de terceros ya que perderemos los cambios cuando las actualicemos)

### Por el contrario, si no disponéis de la carpeta node_modules podéis instalar las librerías de terceros directamente en la carpeta assets/vendors y añadir dentro de ella otra carpeta donde se encuentren los archivos partials que las sobrescriban  
