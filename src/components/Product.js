import React, { Component } from 'react'
import styled from 'styled-components'

    const Bg = styled.body`     
        background-color:#272f41;
        color:#fb9fa4;
        min-height:300vh;       
    `
    const Contain = styled.div`
        padding-top:80px;
        margin:0 8rem;        
    `
    const Text = styled.h1`
        font-size:10em;
    `
    const Collage = styled.div`
         margin-top: 7.5rem ;
    `
    const Shop = styled.a`
        text-decoration:underline;
        color:#fb9fa4;

        &:hover{
            text-decoration:underline;
        color:#fb9fa4;

        }

    `


export default class Product extends Component {
    render() {
        return (
            <Bg>
                <Contain>
                    <Text>PRODUCT</Text>
                    <Text>DESIGN</Text>
                    <img src="/static/images/home2.jpg" width="100% " height="900px"/>
                    <Collage className="Container-fluid">
                    
                        <div className="row">
                        
                            <div className="col"> 
                            <h2>
                                <div>OFFICIAL</div>
                                <div>FINALIST</div>
                                <div>AT ETSY</div>
                                <div>DESIGN AWARDS</div>
                            </h2>      
                                <Shop href="/">Shop new arrivals</Shop>
                            
                               
                            </div>
                            <div className="col">
                                <p>
                                Collage is a contemporary product design boutique that 
                                creates original and unique objects, experimenting with
                                 different materials, shapes, textures and colors. 
                                 We create a wide variety of hand-crafted objects, 
                                 from decorative and utility accessories to jewelry, 
                                 while constantly evolving to offer unique products 
                                 for a design-savvy clientele.
                                </p>
                            </div>
                            <div className="col">
                                <p>
                                All prices are in Canadian (CAD) currency.
                                 To accommodate our clients outside of Canada,
                                  we offer different shipping costs and methods, 
                                  at the best available price, but you need to get 
                                  in touch first. Please contact us for international 
                                  shipping costs, personalized orders or for a pick up,
                                   we'll be happy to create a specific listing for you.
                                </p>
                            </div>
                            
                        </div>
                        
                   
                    </Collage>
                </Contain>
               
            </Bg>
            
               
           
            
        )
    }
}
