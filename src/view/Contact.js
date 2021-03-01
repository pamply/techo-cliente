import React from 'react';
import srcProfile from '../../public/perfil.png';
import srcWhats from '../../public/whats.png'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '30px',
        width: '100%'
    },
    containerMoreInfo: {
        fontSize: '34px',
        marginBottom: '30px',
        fontWeight: 'bolder',
        color: '#0092DD'
    },
    img: {
        width: '250px',
        borderRadius: '5px',
        border: '3px solid black',
        opacity: '0.8'
    },
    phone: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '20px',
        fontSize: '26px'
    },
    whats: {
        width: '30px',
        marginRight: '5px'
    },
    name: {
        fontSize: '24px',
        color: '#575757',
        marginTop: '20px'
    }
}

export const Contact = () => (
    <div style={styles.container}>
        <div style={styles.containerMoreInfo}>Para cuaquier duda o para registarte</div>
        <div style={styles.containerMoreInfo}>¡Contáctame!</div>
        <img src={srcProfile} style={styles.img} />
        <div style={styles.name}><strong>Manuel Alejandro Pamplona Rosado</strong></div>
        <div style={styles.phone}>
            <img style={styles.whats} src={srcWhats} />
            <strong>81 8690 9301</strong>
        </div>
    </div>
);
