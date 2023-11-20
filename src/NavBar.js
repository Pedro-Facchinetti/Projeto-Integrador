import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
    const location = useLocation();

    return (
        <nav className="nav" style={{ background: '#24394A', borderRadius: '10px', padding: '20px', overflow: 'hidden', width: '100%' }}>
            <ul style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0, justifyContent: 'center', gap: '35px' }}>
                <CustomLink to={"/anamnese"} isActive={location.pathname === '/anamnese'}>Anamnese</CustomLink>
                <CustomLink to={"/ficha/paciente_adulto"} isActive={location.pathname === '/ficha/paciente_adulto'}>Ficha Clínica</CustomLink>
                <CustomLink to={"/orcamento"} isActive={location.pathname === '/orcamento'}>Orçamento</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, isActive, children, ...props }) {
    return (
        <li>
            <Link
                to={to}
                style={{
                    display: 'flex',
                    padding: '10px 20px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    borderRadius: '10px',
                    background: isActive ? '#13232F' : '#13232F',
                    color: 'white',
                    textDecoration: 'none',
                    border: isActive ? '1px solid #11C8B4' : 'none',
                    boxShadow: isActive ? '0px 4px 4px 0px rgba(190, 190, 190, 0.25)' : 'none',
                    fontSize: '16px', // Tamanho da fonte fixo
                    width: '170px',  // Largura fixa
                }}
                {...props}
            >
                {children}
            </Link>
        </li>
    )
}