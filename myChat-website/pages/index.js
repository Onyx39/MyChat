import {PageWrapper} from "../components/pageWrapper";
import {Columns, Heading} from "react-bulma-components";

// La page de l'index, c'est à dire le '/'
const IndexPage = () => {
    return (
        <PageWrapper>
            <Columns.Column className="is-8 is-offset-2 tp-notification">
                <Heading className="is-3">My Chat</Heading>
                <p className="description">Site de messagerie</p>
                <hr/>
                <p>Bienvenue sur ce site</p>
            </Columns.Column>
        </PageWrapper>
    )
}

// On exporte la page
export default IndexPage;