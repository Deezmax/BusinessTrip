import React from "react";
import './footer.scss'

export function Footer() {
    return (
        <React.Fragment>
            <div className='footer'>
                <div className='row'>
                    <div className='col'>
                        Projekt für die Bachelorarbeit
                    </div>
                    <div className='col left'>
                        &copy; Maximilian Schreiter {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;