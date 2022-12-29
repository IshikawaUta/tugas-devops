import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import marked from 'marked';
import '../style/contact.less';

export default ({tag}) => {
    const baseData = useStaticQuery(graphql`
        query contactInfoQuery {
            allBaseYaml {
                edges {
                    node {
                        id
                        data {
                            phone
                            address
                            email
                        }
                    }
                }
            }
        }
    `);

    return (
        <React.Fragment>
            <div id="contact" className="section">
                <div className="container">
                    <div className="title">
                        {(tag === 'h1') ? <h1 className="underlined">Kontak</h1> :  <h2 className="underlined">Kontak</h2>}
                    </div>
                    <div className="contents">
                        <div className="row">
                            <div className="col s12 m5 infos">
                                <div className="info">
                                    <i className="ico fa fa-map-marker" />
                                    <div
                                        className="data"
                                        dangerouslySetInnerHTML={{
                                            __html: marked(
                                                baseData.allBaseYaml.edges[0].node.data.address.replace(
                                                    /(?:\r\n|\r|\n)/g,
                                                    '<br/>'
                                                )
                                            )
                                        }}
                                    />
                                </div>
                                <div className="info">
                                    <i className="ico fa fa-phone" />
                                    <div
                                        className="data"
                                        dangerouslySetInnerHTML={{
                                            __html: baseData.allBaseYaml.edges[0].node.data.phone.join(
                                                '<br/>'
                                            )
                                        }}
                                    />
                                </div>
                                
                                <div className="info">
                                    <i className="ico fa fa-envelope" />
                                    <div className="data">
                                        <a
                                            href={
                                                'mailto:' +
                                                baseData.allBaseYaml.edges[0]
                                                    .node.data.email
                                            }
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    baseData.allBaseYaml
                                                        .edges[0].node.data
                                                        .email
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m7">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.936374623629!2d106.6167371!3d-6.1996856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x64997178f030796c!2sSMK%20Bhakti%20Pertiwi!5e0!3m2!1sen!2sid!4v1672029415599!5m2!1sen!2sid"
                                    width="100%"
                                    height="450"
                                    frameBorder="0"
                                    title="map"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
