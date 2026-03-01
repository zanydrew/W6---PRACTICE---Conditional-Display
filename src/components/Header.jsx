import pnLogo from "../assets/pn-logo.png";

export function Header({batchName}) {
    return (
        <div>
        <img src={pnLogo} alt="PN Logo" />
            <h1>Students results for {batchName}</h1>
        </div>
    )
}