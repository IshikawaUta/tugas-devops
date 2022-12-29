/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'Siap Kerja, Santun, Mandiri dan Kreatif',
        logo: '/images/logo.webp',
        siteUrl: 'https://smkbhaktipertiwi-tng.sch.id/',
        mobLogo: '/images/moblogo.webp',
        description:
            'SMK Bhakti Pertiwi Kota Tangerang, Siap kerja, Santun, Mandiri dan Kreatif.',
        currentPlacementYear: 2022,
        navLinks: [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'About Us',
                link: '/about',
                children: [
                    {
                        name: 'Tentang Kami',
                        link: '/about/tentang-kami'
                    },
                    {
                        name: 'Sambutan Kepsek',
                        link: '/about/sambutan-kepsek'
                    },              
                ]
            },
            {
                name: 'Academics',
                link: '/akademik',
                children: [
                    {
                        name: 'Pendaftaran',
                        link: '/akademik/pendaftaran'
                    },
                    {
                        name: 'Kalender Akademik',
                          link: '/akademik/kalender'
                    },
                ]
            },
            {
                name: 'Programs',
                link: '/programs',
                children: [
                    {
                        name: 'Akuntansi Keuangan Lembaga',
                        link: '/programs/akuntansi-keuangan'
                    },
                    {
                        name: 'Otomatisasi Tata Kelola Perkantoran',
                        link: '/programs/administrasi-perkantoran'
                    },
                    {
                        name: 'Teknik Komputer Jaringan',
                        link:
                            '/programs/teknik-komputer-jaringan/'
                    }
                ]
            },
            {
                name: 'Facilities',
                link: '/facilities',
                children: [
                    {
                        name: 'Lab Komputer',
                        link: '/facilities/ccf'
                    },
                    {
                        name: 'Lainnya',
                        link: '/facilities/other'
                    }
                ]
            },
           
            {
                name: 'Contact',
                link: '/contact'
            }
        ]
    },
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    'gatsby-remark-copy-linked-files',
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1080
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/data`
            }
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-yaml`,
        `gatsby-plugin-less`
    ]
};