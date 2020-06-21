import React, {useEffect} from 'react';

import $ from 'jquery' 

import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'summernote/dist/summernote-lite'

import summernote from 'summernote/dist/summernote-bs4'
window.$ = $
window.jQuery = window.$;
window.summernote = summernote

 
const RichTextEditor = () =>{

    useEffect(
        () => {
            $(document).ready(function() {
                $('#summernote').summernote({
                    placeholder: 'Start Writing your Article here ...',
                    height: 220,
                });
              });
        }
        ,[]
    )

    return (
        <div style={{background:"white !important"}}>
            <textarea id="summernote" name="editordata"></textarea>
        </div>
    )
}
  
 
export default RichTextEditor