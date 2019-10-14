import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form';

const categoryOptions = [
  {
    key: 'CSGO',
    text: 'Counter-Strike: Global Offensive',
    value: 'Counter-Strike: Global Offensive',
    image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'OSRS',
    text: 'Oldschool Runescape',
    value: 'Oldschool Runescape',
    image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'WoW',
    text: 'World of Warcraft',
    value: 'World of Warcraft',
    image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
  },
  {
    key: 'LoL',
    text: 'Leage of Legends',
    value: 'Leage of Legends',
    image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
  },
]


class StreamForm extends React.Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }


  }



  DropdownSelection = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div>
        <label>{label}</label>
        <Dropdown
          className={className}
          placeholder='Select Category'
          options={categoryOptions}
          fluid
          selection={input}
          value={input.value}
          onChange={(param, data) => {
            input.onChange(data.value)
          }}
        />
        {this.renderError(meta)}
      </div>
    )
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }


  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  render() {
    console.log(this.props)
    return <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
      <Field name="title" component={this.renderInput} label="Enter Title" />
      <Field name="category" component={this.DropdownSelection} label="Select Category" />
      <button className="ui button primary">Submit</button>
    </form>;
  }
}
const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.category) {
    errors.category = "You must select a category";
  }

  return errors;
};

export default reduxForm({
  form: 'Stream Form',
  validate
})(StreamForm);

