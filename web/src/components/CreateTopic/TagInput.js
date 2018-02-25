import React from 'react';
import { TextField } from 'material-ui';
// import MdCancel from 'react-icons/md/cancel';

import styles from './CreateTopicForm.css';

class TagInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      value: ''
    }
  }

  parse = (value) => {
    this.setState({ value });
  }

  handleKeyPress = (event, onChange) => {
    if (event.key == 'Enter' && this.state.value !== '') {
      event.preventDefault();
      const newTags = this.state.tags.concat(this.state.value);
      this.setState({ tags: newTags, value: '' });
      onChange(newTags);
    }
  }

  handleDelete = (tag, onChange) => {
    const newTags = this.state.tags.filter(item => item != tag);
    this.setState({ tags: newTags});
    onChange(newTags);
  }

  render() {
    const {...inputProps } = this.props;

    return (
      <div>
        <TextField 
          {...inputProps}
          value={this.state.value}
          onChange={(e, v) => {this.parse(v)}}
          onKeyPress={(e) => {this.handleKeyPress(e, inputProps.input.onChange)}}
          name="tags"
          autocomplete="off"
        />
        <div className={styles.tagsContain}>
          {this.state.tags.map((tag, index) => (
            <div className={styles.tag} key={index} onClick={() => {this.handleDelete(tag, inputProps.input.onChange)}}>{tag} x</div>
          ))}
        </div>
      </div>
    )
  }
}

export default TagInput;