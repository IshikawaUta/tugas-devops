import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import marked from 'marked';
import Sidebar from 'react-sidebar';
import Navlinks from './navlinks.js';
import Logo from './logos.js';
import '../style/header.less';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.topBar = React.createRef(); // Referensi ini mungkin tidak lagi diperlukan jika 'top' dihapus
        this.nav = React.createRef();
        this.navPlaceholder = React.createRef();

        this.state = {
            sidebarOpen: false
        };

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.menuOpen = this.menuOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    menuOpen(event) {
        event.preventDefault();
        this.onSetSidebarOpen(true);
    }

    componentDidMount() {
        // topBarHeight tidak lagi relevan jika .top dihapus, atau Anda perlu menyesuaikannya
        // const topBarHeight = this.topBar.current.getBoundingClientRect().height;
        const nav = this.nav.current;

        if (window.innerWidth < 901) {
            nav.classList.add('fixed');
            this.navPlaceholder.current.style.height =
                nav.getBoundingClientRect().height + 'px';
        } else {
            // Menambahkan event listener untuk efek "sticky" navbar
            window.addEventListener('scroll', function(e) {
                const top =
                    window.pageYOffset || document.documentElement.scrollTop;

                // Sesuaikan kondisi ini jika tidak ada top bar lagi
                // Jika navbar selalu fixed atau Anda ingin menentukannya berdasarkan scroll tertentu
                if (top >= 0) { // Misalnya, selalu fixed atau ketika sedikit scroll
                    nav.classList.add('fixed');
                    nav.classList.add('fade-in-down');
                } else {
                    nav.classList.remove('fixed');
                    nav.classList.remove('fade-in-down');
                }
            });
        }
    }

    render() {
        const baseData = this.props.data;
        return (
            <div id="header">
                {/* Bagian 'top' yang berisi info kontak dan logo utama sebelumnya telah dihapus */}
                <nav className="bg-primary" ref={this.nav}>
                    <Link to="/" className="home-navlink" title="Beranda">
                        <Logo type="logo" /> {/* Logo dipindahkan di sini */}
                    </Link>
                    <div className="mobile">
                        <a href="#menu" onClick={this.menuOpen}>
                            <i className="fa fa-bars" />
                        </a>
                    </div>
                    <div className="nav">
                        <Navlinks />
                    </div>
                </nav>
                <div
                    className="navbar-placeholder"
                    ref={this.navPlaceholder}
                ></div>
                <Sidebar
                    sidebar={
                        <SidebarContents
                            data={baseData.allBaseYaml.edges[0].node.data}
                        />
                    }
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    sidebarClassName="sidebar-content"
                    styles={{
                        root: {
                            position: 'absolute',
                            top: 0,
                            left: '-100%',
                            right: 'auto',
                            bottom: 0,
                            overflow: 'hidden'
                        },
                        sidebar: {
                            zIndex: 999,
                            position: 'fixed'
                        },
                        overlay: {
                            zIndex: 998
                        },
                        dragHandle: {
                            position: 'fixed',
                            zIndex: '99999'
                        }
                    }}
                >
                    <span />
                </Sidebar>
            </div>
        );
    }
}

function SidebarContents({ data }) {
    return (
        <div className="sidebar-contents" id="menu">
            <div className="logo">
                <a href="/">
                    <Logo type="logo" />
                </a>
            </div>
            <div className="links">
                <Navlinks />
            </div>
            <div className="contact">
                <div className="col">
                    <i className="fa fa-phone color-primary" />
                    <p className="prop color-primary">Telepon</p>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.phone.join('<br/>')
                        }}
                    />
                    <a className="text-primary transition duration-300 ease-in-out hover:text-secondaryColor" href={'mailto:' + data.email}>
                        {data.email}
                    </a>
                </div>
                <div className="col">
                    <i className="fa fa-map-marker color-primary" />
                    <p className="prop color-primary">Alamat</p>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: marked(
                                data.address.replace(/(?:\r\n|\r|\n)/g, '<br/>')
                            )
                        }}
                    />
                </div>
                <div className="col">
                    <i className="fa fa-whatsapp color-primary" />
                    <p className="prop color-primary">Whatsapp</p>
                    <div>{data.code}</div>
                </div>
            </div>
        </div>
    );
}

export default () => (
    <StaticQuery
        query={graphql`
            query contactInfoNavbarQuery {
                allBaseYaml {
                    edges {
                        node {
                            id
                            data {
                                phone
                                address
                                email
                                code
                            }
                        }
                    }
                }
            }
        `}
        render={data => <Navbar data={data} />}
    />
);