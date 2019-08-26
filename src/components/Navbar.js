import React, { Component } from 'react'
import { className } from 'postcss-selector-parser';
import styled from 'styled-components'

    const Nav = styled.nav`
        padding: 1.875rem;
        background-color:#272f41;
        color:#fb9fa4;
        font-family: 'Noto Sans', sans-serif;
        position: sticky;
    `

    const Text = styled.h1`
        font-size:1rem;
        text-align:center;
    `
export default class Navbar extends Component {
    render() {
        return (
            <Nav>
                <Text>Online boutique</Text>
            </Nav>
                   
        )
    }
}
