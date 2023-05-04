// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    body: {
        display: 'block',
        marginTop: 75,
    },
    page: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        color: "#000",
        justifyContent: "center",
        alignItems: 'center',
        gap: 10
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 10
    },
    heading: {
        fontWeight: "bold",
        fontSize: 19,
        textAlign: 'center'
    },
    text: {
        textAlign: 'center',
        fontWeight: 700,
        marginTop: 10
    }
});

const PDF = () => {
    return (
        <Document style={styles.body}>
            <Page size="A3" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.heading}>The Food Artisan Blog Page Assignment_10</Text>
                    <Text style={styles.text}>This portion of the page is from react-pdf Api</Text>
                </View>
                <View style={styles.section}>
                    <Text>This is the blog page of this website which stands for Qeestion and Ansser section for this assignment project</Text>
                </View>
            </Page>
        </Document>
    );
};

export default PDF;