import { Container, Nav, Navbar, Button } from "react-bootstrap"
import { Link, NavLink, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"



const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {

    const navegacion = useNavigate()

    const logout = () => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Seguro que desea cerrar su sesion?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si'
        }).then((result) => {
            if (result.isConfirmed) {
                //borrar del sessionstorage
                sessionStorage.removeItem("usuarioLogueado")
                setUsuarioLogueado({})
                navegacion("/")
                Swal.fire(
                    'Listo!',
                    'Sesion cerrada!',
                    'success'
                )
            }
        })

    }

    return (
        <Navbar bg="danger" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to={"/"}>Cafecito</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink end to={"/"} className={"nav-item nav-link"} >Inicio</NavLink>
                        <NavLink end to={"/registro"} className={"nav-item nav-link"}>Registro</NavLink>
                        {
                            usuarioLogueado.usuario ?
                                <>
                                    <NavLink end to={"/administrador"} className={"nav-item nav-link"}>Administrador</NavLink>
                                    <Button variant="dark" onClick={logout}>Logout</Button>
                                </>
                                :
                                <NavLink end to={"/login"} className={"nav-item nav-link"}>Login</NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;