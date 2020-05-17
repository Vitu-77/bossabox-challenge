import React, { useState, useEffect } from 'react';
import { Container, Toolbar } from './styles';
import ToolsList from '../../components/ToolsList'
import Suspense from '../../components/Suspense';
import { Search, CheckBox } from '../../components/form';
import { PrimaryButton } from '../../components/buttons';
import { IoMdAdd } from 'react-icons/io';
import { get } from '../../services/api';

export default () => {

    const [tools, setTools] = useState()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            const { data, status } = await get('/tools');

            if (status === 200) {
                setTools(data);
                setLoading(false);
            }
        }

        fetch();
    }, []);

    return (
        <Container>
            <Suspense loading={loading}>
                <div>
                    <header>
                        <h1>VUTTR</h1>
                        <h3>Very Usefull Tools to Remember</h3>
                    </header>
                    <Toolbar>
                        <form>
                            <Search placeholder='Pesquisar...' />
                            <CheckBox label='Search in tags only' />
                        </form>
                        <PrimaryButton>
                            <IoMdAdd />
                            Adicionar
                        </PrimaryButton>
                    </Toolbar>
                    <ToolsList tools={tools} />
                </div>
            </Suspense>
        </Container>
    )
}