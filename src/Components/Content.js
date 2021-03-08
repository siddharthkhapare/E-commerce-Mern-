import React from 'react';
import { Card, Jumbotron, CardDeck } from 'react-bootstrap';
import democard from '../images/democard.jpg'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const Content = (props) => {
    return (
        <Jumbotron className="bg-white">
            <h1 className="text-center">Trending Products</h1>
            <CardDeck className="mt-4">
                <Card>
                        <Card.Body>

                            <Card.Title >Card title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Link href="#"><Card.Img variant="top" src={democard} /></Card.Link> 
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                
                    <Card.Footer>
                        <Card.Link href="#">View</Card.Link>
                        <Card.Link href="#">Add to cart <AddShoppingCartIcon /></Card.Link>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title >Card title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Link href="#"><Card.Img variant="top" src={democard} /></Card.Link> 
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                         </Card.Text>
                    </Card.Body>
                    <Card.Footer>

                        <Card.Link href="#">View</Card.Link>
                        <Card.Link href="#">Add to cart <AddShoppingCartIcon /></Card.Link>

                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title >Card title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Link href="#"><Card.Img variant="top" src={democard} /></Card.Link> 
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                         </Card.Text>
                    </Card.Body>
                    <Card.Footer>

                        <Card.Link href="#">View</Card.Link>
                        <Card.Link href="#">Add to cart <AddShoppingCartIcon /></Card.Link>

                    </Card.Footer>
                </Card>
            </CardDeck>
        </Jumbotron>

    );
}


export default Content;