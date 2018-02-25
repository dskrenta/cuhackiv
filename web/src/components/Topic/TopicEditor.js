import React from 'react'
import Editor from '../Editor/Editor';

function change(value) {
  console.log(value);
}

const TopicEditor = ({ content }) => (
 <Editor onChange={change}/>
);

export default TopicEditor;