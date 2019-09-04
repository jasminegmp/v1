import React from "react";
import styled from 'styled-components';
import Layout from "../components/layout"
import UnderConstruction from './UnderConstruction';
import "semantic-ui-css/semantic.min.css";


const ProjectDescription = styled.div`
    position: absolute;
    margin: 0 auto;
    width: 100%;
    top: 0,
    height: auto;
    width: auto;
`

export default () => (
    <Layout>
        <ProjectDescription>
            <UnderConstruction />
        </ProjectDescription>
    </Layout>
)
