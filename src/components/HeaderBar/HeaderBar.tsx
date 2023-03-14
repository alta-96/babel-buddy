import Styles from './HeaderBar.module.css';
import Button from "react-bootstrap/Button";
import {FaCog} from "react-icons/fa";
import {BsFillDoorOpenFill, BsPersonFill} from "react-icons/bs";

type Props = {
    isLoggedIn: boolean
}

const HeaderBar = (props: Props) => {
    return (
        <nav className={Styles['header-bar']}>
            <section>
                <div className={Styles.logo}>
                    <h2>BabelBuddy</h2>
                </div>
                {props.isLoggedIn && <div className="d-inline mx-2">
                    <Button variant="warning" className="mx-2 text-white"> <FaCog className="text-primary mb-1" /> Settings </Button>
                    <Button variant="success" className="mx-2"> <BsPersonFill className="text-white mb-1" /> My Profile </Button>
                </div>}
            </section>
            <section>
                {props.isLoggedIn && <Button variant="danger" className="my-2 mx-2"> <BsFillDoorOpenFill className="text-warning mb-1" /> Log Out </Button>}
            </section>
        </nav>
    )
}

export default HeaderBar;