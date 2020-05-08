# Test de React Native

Mas allá de la validez de la solución, se desea un código entendible, manejable y performante.

- **Requerimientos:** indica lo que se debe obtener como resultado
- **Evaluación:** los puntos que se tendrán en cuanta para evaluar la solución.

**OBS**: en caso de no especificarse detalles, el desarrollador puede implementar la solución como mejor le parezca teniendo en cuanta los
Requerimientos y la Evaluación.

## Listado de Usuarios

> App en React Native/Redux/Redux-thunk/React Navigation

Primeramente, debes instalar (si no lo tienes aún) React Native en tu computadora, siguiendo los pasos de su [página oficial](https://reactnative.dev/docs/environment-setup) utilizando **react-native-cli**.

Para este test utilizaremos un fake api que puedes encontrarlo [aquí](https://reqres.in/). No necesita crearse ninguna cuenta, basta con consumir sus distintos endpoints, la que utilizaremos en este test son:

- Listado de usuarios: Endpoint con un listado simple de usuarios
  - Metodo: GET
  - URL: https://reqres.in/api/users
  - Query params:
    ```ts
    page: number;
    per_page: number;
    ```
- Detalle de usuario: Endpoint con los datos de un usuario especificado en la url.
  - Metodo: GET
  - URL: https://reqres.in/api/users/{id}

### Resultado esperado:

<a href="./assets/UserList.jpg">
  <img src="./assets/UserList.jpg" width="150">
</a>&nbsp;
<a href="./assets/UserDetail.jpg">
  <img src="./assets/UserDetail.jpg" width="150">
</a>

### Requerimientos:

- Utilizar Functional Components o Class componentes.
- Crear un state de Redux **users** el cual tenga el listado de usuarios o lo que creas necesarios.
- Crear dos action thunk. Uno que realice el fetch del listado de usuarios en base a unos parametros de paginado. Ej:
  ```js
  const getUsersThunk = (page, perPage) => {
    ...
  }
  ```
  Y otro que obtenga el detalle de un usuario en base a un parametro id y retorne el resultado. Ej:
  ```js
    const getUserDetail = (id) => {
      ...
    }
  ```
- Dibjar el listado de usuarios mediante el componente [FlatList de React native](https://reactnative.dev/docs/flatlist). No olvides de utilizar su método keyExtractor para especificar el id de cada registro.
- Al presionar en un registro, redirigir la pantalla UserDetail y pasar el parametro del ID. Puedes utilizar los [handling touches](https://reactnative.dev/docs/handling-touches#__docusaurus) Ej:

  ```jsx
  <FlatList
    renderItem={({item}) => (
      <TouchableOpacity onPress={handlePressUser}>...</TouchableOpacity>
    )}
  />
  ```

- Para la navegacion, utilizar el codigo base del repositorio el cual ya tiene instalado el package
  [React Navigation v5](https://reactnavigation.org/docs/getting-started).
  Solo te importara utilizar el prop navigation y su método **navigate**. Ej:

  ```js
  const handlePressUser = () => {
    props.navigation.navigate('UserDetail', {
      id: 'el-id-del-usuario',
    });
  };
  ```

- En la pantalla UserDetail, en el lifecycle correspondiente consumir el thunk para obtener el detalle del id recibido desde el parametro del prop navigation.

### Evaluación:

- Lifecycle de componentes: Utilizar correctamente las instancias de renderizado de los componentes. NO USAR METODOS DEPRECADOS.
- Atomicidad de componentes: Los componentes hijos deben contener la menor cantidad de lógica posible y realizar un renderizado/actión específica.
- Utilización correcta de estilos: Especialmente en la maquetación de componentes.
- Escalado de componentes: Utilizar [react-native-size-matters](https://github.com/nirsky/react-native-size-matters) y aplicar su escalado horizontal o vertical segun sea necesario.

### Consideraciones opcionales

- Atomicidad de commits en el repositorio
