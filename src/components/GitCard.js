import React from "react";
import preview from "../assets/preview.jpg";
import "../css/App.css";
import location from "../assets/icon-location.svg";
import twitter from "../assets/icon-twitter.svg";
import company from "../assets/icon-company.svg";
import link from "../assets/icon-website.svg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GitCard = () => {
    return(
        <Container className="git-container justify-content-center align-items-center">
            <Row className="">

                <Col lg={6}>
                    <img className="git-image" src={preview} alt="icon display"/>
                    <div className="username">Username</div>
                    <p className="atuser">@username</p>
                    <p className="bio">This profile has no bio</p>
                </Col>

                <Col lg={6}>
                    <div className="date">Joined 25 Jan 2011</div>
                </Col>

            </Row>

            <div className="section2">
               <div>
                    <table>
                    <tr>
                        <th>Repos</th>
                        <th>Followers</th>
                        <th>Following</th>
                    </tr>
                    <tr>
                        <td>100</td>
                        <td>20</td>
                        <td>14</td>
                    </tr>
                    </table>
               </div>
            </div>

            <Row className="icon-row row-one">
                <Col>
                <img className="icon" src={location} alt="location icon"/>
                <p className="location">Location</p>
                </Col>

                <Col>
                <img className="icon" src={twitter} alt="twitter icon"/>
                <p className="twitter">Twitter</p>
                </Col>
            </Row>

            <Row className="icon-row">
                <Col>
                <img className="icon" src={link} alt="link icon"/>
                <p className="link">https://github.io/</p>
                </Col>

                <Col>
                <img className="icon" src={company} alt="building icon"/>
                <p className="company">company</p>
                </Col>
            </Row>

              

        </Container>
    )
}

export default GitCard;