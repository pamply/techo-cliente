import React from 'react';
import srcVideoDescription from '../../public/screen.mov';
import srcVideoGoals from '../../public/screen2.mov';
import srcVideoDetails from '../../public/screen3.mov';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';

Modal.setAppElement('#app')
const buttonStyle = {
    backgroundColor: '#D83D3D',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '20px',
};

const cardStyle = {
    padding: '10px',
    border: '3px solid #0092DD',
    borderRadius: '10px',
    width: '100%',
    marginBottom: '30px',
    cursor: 'pointer',
};

const styles = {
    container: {
        marginTop: '50px',
        width: '100%',
        marginRight: '25px',
        fontSize: '16px'
    },
    containerButton: {
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'center',
    },
    containerCard: {
        ...cardStyle,
    },
    containerCardHover: {
        ...cardStyle,
        backgroundColor: '#FFEFD8',
    },
    containerModal: {
        height: '100%',
    },
    highlightText: {
        fontSize: '20px',
    },
    button: {
        ...buttonStyle,
        padding: '10px',
        color: '#F5E6E6',
        opacity: '0.5'
    },
    buttonHover: {
        ...buttonStyle,
        padding: '11px',
        borderRadius: '6px',
        color: 'white',
    }
}

const Card = (props) => {
    const [isHover, setIsHover] = React.useState(false);

    function openModal() {
        props.openModal(true);
    }
    return (
        <div
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
            style={isHover? styles.containerCardHover : styles.containerCard}
            onClick={openModal}>
            <div style={styles.containerInnerCard}>
                <strong>{props.title}</strong>
                {props.children}
            </div>
        </div>
    );
};

export const Description = () => {
    const [openModal, setOpenModal] = React.useState(false);
    const [srcVideo, setSrcVideo] = React.useState(srcVideoDescription);

    function openVideoModal(src) {
        return (val) => {
            setSrcVideo(src);
            setOpenModal(val);
        }
    }
    return (
        <div style={styles.container}>
            <Card
                title='¿Qué es fomento al trabajo?'
                openModal={openVideoModal(srcVideoDescription)}
            >
                <p>Es el programa que se encarga de gestionar y velar por la implementación de toda <strong style={styles.highlightText}>acción estratégica y estructurada en beneficio de la economía familiar</strong> dentro de los asentamientos.</p>
            </Card>
            <Card
                title='Objetivo'
                openModal={openVideoModal(srcVideoGoals)}
            >
                <p>Fomentar <strong style={styles.highlightText}>capacidades, habilidades y conocimientos</strong> a través de capacitaciones en oficios profesionalizadas para <strong style={styles.highlightText}>aumentar los ingresos</strong> relacionados a las actividades económicas de las familias respetando los saberes bajo esquemas de <strong style={styles.highlightText}>economía social y solidaria.</strong></p>
            </Card>
            <Card
                title='¿Cómo funciona?'
                openModal={openVideoModal(srcVideoDetails)}
            >
                <p>Capacitación por cursos en línea por medio de: <strong style={styles.highlightText}>videollamadas, whatsapp, facebook o llamadas</strong></p>
            </Card>
            
            <Modal
            isOpen={openModal}
            onRequestClose={() => setOpenModal(false)}
            style={styles.containerModal}
            contentLabel="Example Modal"
            >
                <video width="95%" controls>
                    <source src={srcVideo} type="video/mp4" />
                </video>
            </Modal>
            <Button />
        </div>);
};

const Button = () => {
    const [isHover, setIsHover] = React.useState(false);
    const history = useHistory();
    return (
        <div style={styles.containerButton}>
            <span
                onMouseOver={() => setIsHover(true)}
                onMouseOut={() => setIsHover(false)}
                onClick={() => history.push('/contacto')}
                style={isHover ? styles.buttonHover : styles.button}>
                    <strong>¡Estoy interesado!</strong>
            </span>
        </div>
    )
}