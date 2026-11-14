import './Navbar.css'


function Navbar() {
    return (
        <menu className={"menu"}>
            <div className={"submenu"}>
                <div>
                    <button className={"left-menu"}>А <span>&</span> A</button>
                </div>
                <div className={"right-menu"}>
                    <button className={"btn"}>ДЕТАЛИ</button>
                    <button className={"btn"}>ДРЕСС-КОД</button>
                    <button className={"btn"}>ОТВЕТИТЬ</button>
                </div>
            </div>
        </menu>
    )
}

export default Navbar;