import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

import TagInput from './TagInput';

import styles from './CreateTopicForm.css';

const fieldProps = {
  underlineFocusStyle: {
    borderColor: '#06b'
  },
  className: styles.inputStyle
}

const CreateTopicForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div className={styles.contain}>
      <h2 className={styles.title}>Create Topic</h2>
      <Field name="imageUrl" component={TextField} props={fieldProps} type="text" placeholder="Image URL" />
      <Field name="title" component={TextField} props={fieldProps} type="text" placeholder="Title" />
      <Field name="description" component={TextField} props={fieldProps} type="text" placeholder="Description" />
      <Field name="tags" component={TagInput} props={fieldProps} type="text" placeholder="Tags (hit enter to separate)" />
      <button type="submit" className={styles.submitButton}>Submit</button>
    </div>
  </form>
);

export default reduxForm({
  form: 'createTopic'
})(CreateTopicForm);