import React, { Component } from 'react';
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles

import $ from 'jquery' 

import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import 'bootstrap/dist/css/bootstrap.min.css';

window.$ = $
window.jQuery = window.$;
window.jQuery = $;
// require('bootstrap');

// Import bootstrap(v3 or v4) dependencies

// import 'bootstrap/js/dropdown';
// import 'bootstrap/js/tooltip';
// import 'bootstrap/dist/css/bootstrap.css';
 
class RichTextEditor extends Component {
  onChange(content) {
    console.log('onChange', content);
  }
 
  render() {
    return (
      <ReactSummernote
        value="Default value"
        options={{
          
          height: 450,
          dialogsInBody: true,
        //   toolbar: [
        //     ['style', ['style']],
        //     ['font', ['bold', 'underline', 'clear']],
        //     ['fontname', ['fontname']],
        //     ['para', ['ul', 'ol', 'paragraph']],
        //     ['table', ['table']],
        //     ['insert', ['link', 'picture', 'video']],
        //     ['view', ['fullscreen', 'codeview']]
        //   ]
        }}
        onChange={this.onChange}
      />
    );
  }
}
 
export default RichTextEditor