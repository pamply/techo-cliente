import React from 'react';
import { Search } from './Search';

const styles = {
    container: {
        marginTop: '180px',
        width: '100%'
    }
}

export const Main = () => (
    <div style={styles.container}>
        <div style={styles.searchContainer}><Search /></div>
    </div>
)