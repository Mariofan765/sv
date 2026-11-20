import './Navbar.css'


function Navbar() {
    return (
        <menu className={"menu"}>
            <div className={"submenu"}>
                <div>
                    <button className={"left-menu"}>А <span>&</span> A</button>
                </div>
                <div className={"right-menu"}>
                    <button className={"btn"}>Детали</button>
                    <button className={"btn"}>Дресс-код</button>
                    <button className={"btn"}>Ответить</button>
                </div>
            </div>
        </menu>
    )
}

export default Navbar;