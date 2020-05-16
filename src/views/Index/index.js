import React from 'react';
import { Container, Toolbar } from './styles';
import ToolsList from '../../components/ToolsList'

export default () => {
    return (
        <Container>
            <div>
                <header>
                    <h1>VUTTR</h1>
                    <h3>Very usefull tools to reuse</h3>
                </header>
                <Toolbar>
                    <form>
                        <input type='text' placeholder='Pesquisar...' />
                        <input type='checkbox' />
                    </form>
                    <button>Adicionar</button>
                </Toolbar>
                <ToolsList />
            </div>
        </Container>
    )
}