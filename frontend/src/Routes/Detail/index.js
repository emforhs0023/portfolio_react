import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PROJECT_LIST_REQUEST } from '../../store/reducers/user';
import { Link } from "react-router-dom";
import styled from "styled-components";
import DetailPresenter from "./DetailPresenter";


const Detail = () => {
	const { project, loading } = useSelector(state => state.user);
	const params = useParams();
	const dispatch = useDispatch();
	
	useEffect(() => {
		window.scrollTo({
            top: 0,
        });
		dispatch({
            type: PROJECT_LIST_REQUEST,
            data: params.id
        });
	}, []);
	
	
	return (
		<>	
			{console.log(project)}
			{project.length == 0 ? null : <DetailPresenter seq = {project[0].seq} text = {project[0].text} projectName ={project[0].projectName} thumbnail ={project[0].thumbnail} contentImg = {project[0].contentImg} backImg ={project[0].backImg} firstDate ={project[0].firstDate} lastDate ={project[0].lastDate} />}		
		</>
	)
}

export default Detail