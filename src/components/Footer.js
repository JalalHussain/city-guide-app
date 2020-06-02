import React from 'react'
import styled from 'styled-components'

function Footer(){
    return(
        <FooterContainer className="main-footer">
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>Heading 1</h4>
                        <ul className="list-unstyled">
                            <li>Sub Heading 1</li>
                            <li>Sub Heading 1</li>
                            <li>Sub Heading 1</li>
                            <li>Sub Heading 1</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Heading 2</h4>
                        <ul className="list-unstyled">
                            <li>Sub Heading 2</li>
                            <li>Sub Heading 2</li>
                            <li>Sub Heading 2</li>
                            <li>Sub Heading 2</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Heading 3</h4>
                        <ul className="list-unstyled">
                            <li>Sub Heading 3</li>
                            <li>Sub Heading 3</li>
                            <li>Sub Heading 3</li>
                            <li>Sub Heading 3</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Heading 4</h4>
                        <ul className="list-unstyled">
                            <li>Sub Heading 4</li>
                            <li>Sub Heading 4</li>
                            <li>Sub Heading 4</li>
                            <li>Sub Heading 4</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} City Guide App - All Rights Reserved
                    </p>
                </div>
            </div>
            </div>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer`
    .footer-middle{
    background:var(--mainDark);
    padding-top: 3rem;
    color : var(--mainWhite);
}
` ;