import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default ({ type }) => {
    const query = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    logo
                    mobLogo
                }
            }
        }
    `);
    if (type === 'logo') {
        return (
            <img
                src={query.site.siteMetadata.logo}
                alt="SMK Bhakti Pertiwi, Kota Tangerang"
            />
        );
    } else if (type === 'mobLogo') {
        return (
            <img
                src={query.site.siteMetadata.mobLogo}
                alt="SMK Bhakti Pertiwi, Kota Tangerang"
            />
        );
    }
};
