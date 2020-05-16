import React from "react";
import styled from "styled-components";

const Form = styled.form`
    float: right;
    margin-right: 5%;
    margin-top: -150px;
    @media (max-width: 768px) {
        display: none !important;
    }
`

class HeaderSubscribe extends React.Component {
  render() {
    return (
  <div id="mc_embed_signup">
    <link
    href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css"
    rel="stylesheet"
    type="text/css"
  />
    <Form
      action="https://rocketmail.us18.list-manage.com/subscribe/post?u=bf927573eef714b0badfaad1e&id=079666ad20"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      noValidate
    >
      <div id="mc_embed_signup_scroll">
        <label style={{color: 'white', fontSize: '16px'}} htmlFor="mce-EMAIL">Subscribe</label>
        <input
          style={{width: '170px'}}
          type="email"
          name="EMAIL"
          className="email"
          id="mce-EMAIL"
          placeholder="email address"
          required
        />
        <div className="clear">
          <input
            style={{width: '170px'}}
            type="submit"
            defaultValue="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button"
          />
        </div>
      </div>
    </Form>
  </div>
    );
  }
}

export default HeaderSubscribe;
