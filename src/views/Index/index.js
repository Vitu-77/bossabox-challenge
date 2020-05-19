import React, { useState, useEffect, useRef } from 'react';
import * as Yup from 'yup';

import Modal from '../../components/modal';
import ToolsList from '../../components/ToolsList'
import Suspense from '../../components/Suspense';
import { Form, Input, TextArea } from '../../components/form';
import { Search, CheckBox } from '../../components/form';
import { PrimaryButton } from '../../components/buttons';
import { Container, Toolbar, ModalTitle, ModalButtons } from './styles';

import { IoMdAdd } from 'react-icons/io';
import { get, create } from '../../services/api';

export default () => {
    const modalRef = useRef(null);
    const formRef = useRef(null);
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

    const handleAddTool = async (tool) => {
        try {
            const schema = Yup.object().shape({
                title: Yup.string().required('This is a required field'),
                link: Yup.string().required('This is a required field'),
            });

            await schema.validate(tool, { abortEarly: false });

            let { tags, ...rest } = tool;
            tags = tags.trim().split(' ');

            const { data, status } = await create('/tools', { tags, ...rest });

            if (status === 200) {
                setTools([{ ...data }, ...tools]);
            }

            return modalRef.current.closeModal();
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                const errors = {};

                error.inner.forEach(err => errors[err.path] = err.message);
                formRef.current.setErrors(errors);
            }
        }
    }

    return (
        <Container>
            <Modal ref={modalRef}>
                <Form ref={formRef} onSubmit={handleAddTool}>
                    <ModalTitle><IoMdAdd /> Add new tool</ModalTitle>
                    <Input width={400} label='Tool name *' name='title' />
                    <Input width={400} label='Tool link *' name='link' />
                    <TextArea width={400} label='Tool description' name='description' />
                    <Input width={400} label='Tags' name='tags' />
                    <ModalButtons>
                        <PrimaryButton color='sucess'>
                            Add tool
                        </PrimaryButton>
                    </ModalButtons>
                </Form>
            </Modal>
            <Suspense loading={loading}>
                <div className='tools'>
                    <header>
                        <h1>VUTTR</h1>
                        <h3>Very Usefull Tools to Remember</h3>
                    </header>
                    <Toolbar>
                        <form>
                            <Search placeholder='Pesquisar...' />
                            <CheckBox label='Search in tags only' />
                        </form>
                        <PrimaryButton onClick={() => modalRef.current.openModal()}>
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