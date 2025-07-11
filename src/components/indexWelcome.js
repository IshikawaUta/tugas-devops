import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import marked from 'marked';

const margin = '22px 0'; // don't judge, too lazy

export default props => (
    <StaticQuery
        query={graphql`
            query welcomeQuery {
                allBaseYaml {
                    edges {
                        node {
                            id
                            data {
                                image {
                                    publicURL
                                }
                                welcomeMessage
                                mission
                                qualityObjectives
                                vision
                                qualityPolicy
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            <div id="welcome" className="section">
                <div className="container">
                    <div className="title">
                        <h2 className="underlined">Selamat Datang</h2>
                    </div>
                    <div className="contents allow-list-style">
                        <div className="row">
                            <div
                                className="col s12"
                                dangerouslySetInnerHTML={{
                                    __html: marked(
                                        data.allBaseYaml.edges[0].node.data.welcomeMessage.replace(
                                            /(?:\r\n|\r|\n)/g,
                                            '<br/>'
                                        )
                                    )
                                }}
                            />
                            <div className="col s12 m6 p2">
                                <p
                                    className="font-2"
                                    style={{ margin: margin }}
                                >
                                    <b>Visi</b>
                                </p>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: marked(
                                            data.allBaseYaml.edges[0].node.data.vision.replace(
                                                /(?:\r\n|\r|\n)/g,
                                                '<br/>'
                                            )
                                        )
                                    }}
                                />
                                <p
                                    className="font-2"
                                    style={{ margin: margin }}
                                >
                                    <b>Sasaran Mutu Institusi</b>
                                </p>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: marked(
                                            data.allBaseYaml.edges[0].node.data
                                                .qualityObjectives
                                        )
                                    }}
                                />
                            </div>
                            <div className="col s12 m6 p2">
                                <p
                                    className="font-2"
                                    style={{ margin: margin }}
                                >
                                    <b>Misi</b>
                                </p>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: marked(
                                            data.allBaseYaml.edges[0].node.data.mission.replace(
                                                /(?:\r\n|\r|\n)/g,
                                                '<br/>'
                                            )
                                        )
                                    }}
                                />
                                <p
                                    className="font-2"
                                    style={{ margin: margin }}
                                >
                                    <b>Kebijakan Mutu Institusi</b>
                                </p>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: marked(
                                            data.allBaseYaml.edges[0].node.data.qualityPolicy.replace(
                                                /(?:\r\n|\r|\n)/g,
                                                '<br/>'
                                            )
                                        )
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    />
);
