'use client';
import React from 'react'
import Project from '@/components/project/project';
import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

export default function page() {

  const { loading, error, data } = useFetch('http://localhost:1337/api/projects?populate=*&sort=DateFinished:desc');

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
    <>
      {data.data.map((project) => (

        <Project
            idKey={project.id}
            title={project.attributes.Title}
            content={project.attributes.Content}
        />
      ))}
    </>
  )
}
