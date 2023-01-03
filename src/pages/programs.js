import React from 'react';
import Layout from '../components/layout';
import Programs from '../components/programs';

const meta = {
    title: 'Programs',
    description:
        'Tiga program atau jurusan SMK Bina Mandiri Kabupaten Tangerang',
    keywords: 'Programs'
};

export default function() {
    return (
        <Layout meta={meta}>
            <Programs />
        </Layout>
    );
}
