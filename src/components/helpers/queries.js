// llamar a la variable de entorno
const URL_USUARIO = import.meta.env.VITE_API_USUARIO
const URL_PRODUCTO = import.meta.env.VITE_API_PRODUCTO

export const login = async (usuario) =>{
    try {
      console.log(usuario);
      const respuesta = await fetch(`${URL_USUARIO}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      const datos = await respuesta.json();
      return {
        status: respuesta.status,
        mensaje: datos.mensaje,
        usuario: datos.nombre,
        uid: datos.uid
      };

    
    
    } catch (error) {
      console.log("errores en el login");
      return null;
    }
  }


export const obtenerProductos = async ()=>{
    try {
        const respuesta = await fetch(URL_PRODUCTO)
        const listaProductos = await respuesta.json()
        return listaProductos

    } catch (error) {
        console.log(error)
        return null
    }
}
export const obtenerProducto = async (id)=>{
    try {
        const respuesta = await fetch(`${URL_PRODUCTO}/${id}`)
        const productoEditar = await respuesta.json()
        return productoEditar

    } catch (error) {
        console.log(error)
        return null
    }
}

export const consultaBorrarProducto = async (id)=>{
    try {
        const respuesta = await fetch(`${URL_PRODUCTO}/${id}` , {
            method:"DELETE"
        });
        // const listaProductos = await respuesta.json()
        return respuesta

    } catch (error) {
        console.log(error)
        return null
    }
}

export const consultaCrearProducto = async (producto)=>{
    try {
        const respuesta = await fetch(URL_PRODUCTO, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta

    } catch (error) {
        console.log(error)
        return null
    }
}

export const consultaEditarProducto = async (producto, id)=>{
    try {
        const respuesta = await fetch(URL_PRODUCTO+"/"+id, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta

    } catch (error) {
        console.log(error)
        return null
    }
}
