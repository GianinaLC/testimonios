import '../styles/testimonio.css'

const Testimonio = ({ img, nombre, ciudad, titulo, empresa, testimonio }) => {
    return (
        <div className='contenedor-testimonio'>
            <img src={img} alt={nombre} />
            <div className='testimonio-detalles'>
                <p className='texto-test'><span className='negrita'>{nombre}</span> en {ciudad}</p>
                <p className='texto-test'>{titulo} en <span className='negrita'>{empresa}</span></p>
                <p className='testimonio-descripcion'>{testimonio}</p>
            </div >
        </div >
    )
}

export default Testimonio