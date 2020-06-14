import React, { useState, useEffect, useRef, useContext } from 'react';
import * as Yup from 'yup';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

import { ToolsContext } from '../../store/tools/context';

import Modal from '../../components/modal';
import ToolsList from '../../components/ToolsList';
import Suspense from '../../components/Suspense';
import { Form, Input, TextArea, CheckBox, Search } from '../../components/form';
import { PrimaryButton } from '../../components/buttons';
import { Container, Toolbar, ModalTitle, ModalButtons } from './styles';

import { IoMdAdd } from 'react-icons/io';
import { get, create } from '../../services/api';

export default () => {
	const addToolModalRef = useRef(null);
	const formRef = useRef(null);

	const { tools, setTools, setLoadingTools, setSearchingByTag } = useContext(
		ToolsContext
	);

	const [loading, setLoading] = useState(true);
	const [searchTagsOnly, setSearchTagsOnly] = useState(false);

	useEffect(() => {
		const fetch = async () => {
			const { data, status } = await get('/tools');

			if (status === 200) {
				setTools(data);
				setLoading(false);
			}
		};

		fetch();
	}, [setTools]);

	const handleAddTool = async (tool) => {
		try {
			const schema = Yup.object().shape({
				title: Yup.string().required('This is a required field'),
				link: Yup.string().required('This is a required field'),
			});

			await schema.validate(tool, { abortEarly: false });

			let { tags, ...rest } = tool;
			tags = tags.trim().split(' ');

			const response = await create('/tools', { tags, ...rest });

			if (response.status === 201) {
				setTools([{ ...response.data }, ...tools]);
				formRef.current.reset();
				return addToolModalRef.current.closeModal();
			}
		} catch (error) {
			if (error instanceof Yup.ValidationError) {
				const errors = {};

				error.inner.forEach((err) => (errors[err.path] = err.message));
				formRef.current.setErrors(errors);
			}
		}
	};

	const searchTools = async (inputValue) => {
		const fetch = async (route) => {
			setLoadingTools(true);

			const { data } = await get(route);
			setTools(data);

			if (searchTagsOnly) {
				setSearchingByTag(inputValue);
			} else {
				setSearchingByTag('');
			}

			setTimeout(() => {
				setLoadingTools(false);
			}, 400);
		};

		if (inputValue.length <= 2) {
			return fetch('/tools');
		} else {
			if (searchTagsOnly) {
				return fetch(`/tools?tags_like=${inputValue}`);
			} else {
				return fetch(`/tools?q=${inputValue}`);
			}
		}
	};

	const debounce = AwesomeDebouncePromise(searchTools, 500);

	const handleSearch = async ({ search }) => {
		if (!search.length) return;

		if (searchTagsOnly) {
			setLoadingTools(true);

			const response = await get(`/tools?tags_like=${search}`);
			setSearchingByTag(search);
			setTools(response.data);

			setLoadingTools(false);
		} else {
			setLoadingTools(true);

			const response = await get(`/tools?q=${search}`);
			setSearchingByTag('');
			setTools(response.data);

			setLoadingTools(false);
		}
	};

	return (
		<Container>
			<Modal ref={addToolModalRef}>
				<Form ref={formRef} onSubmit={handleAddTool}>
					<ModalTitle>
						<IoMdAdd /> Add new tool
					</ModalTitle>
					<Input width={400} label='Tool name *' name='title' />
					<Input width={400} label='Tool link *' name='link' />
					<TextArea width={400} label='Tool description' name='description' />
					<Input width={400} label='Tags' name='tags' />
					<ModalButtons>
						<PrimaryButton color='sucess'>Add tool</PrimaryButton>
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
						<Form onSubmit={handleSearch}>
							<Search
								name='search'
								placeholder='Pesquisar...'
								onChange={async (e) => await debounce(e.target.value)}
							/>
							<CheckBox
								label='Search in tags only'
								defaultChecked={searchTagsOnly}
								onCheck={() => setSearchTagsOnly(true)}
								onUncheck={() => setSearchTagsOnly(false)}
							/>
						</Form>
						<PrimaryButton onClick={() => addToolModalRef.current.openModal()}>
							<IoMdAdd />
							Adicionar
						</PrimaryButton>
					</Toolbar>
					<ToolsList />
				</div>
			</Suspense>
		</Container>
	);
};
