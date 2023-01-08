import {Container, Footer as FooterBulma, Level} from 'react-bulma-components'

/**
 * Le footer de l'application
 */
export const Footer = () => {
    return (
        <FooterBulma>
            <Container>
                <Level>
                    <Level.Item>
                        <small className="level-item">
                            My Chat - Valentin RICHARD
                        </small>
                    </Level.Item>
                </Level>
            </Container>
        </FooterBulma>
    )
}