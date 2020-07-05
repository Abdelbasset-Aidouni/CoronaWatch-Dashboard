import React, {useEffect} from 'react';

import $ from 'jquery' 

import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'summernote/dist/summernote-lite'
import {contentUrl} from './../../../../global/config'


import summernote from 'summernote/dist/summernote-bs4'
window.$ = $
window.jQuery = window.$;
window.summernote = summernote

 
const RichTextEditor = ({progressBarValueHandler,progressBarDisplayHandler}) =>{

    useEffect(
        () => {
            $(document).ready(function() {
                $('#summernote').summernote({
                    placeholder: 'Start Writing your Article here ...',
                    height: 220,
                    callbacks:{
                        onImageUpload: function(files, editor, welEditable) {
                            sendFile(files[0], editor, welEditable);
                            function sendFile(file, editor, welEditable) {
                                var data = new FormData();
                                data.append("file", file);
                                $.ajax({
                                    data: data,
                                    type: 'POST',
                                    xhr: function() {
                                        var myXhr = $.ajaxSettings.xhr();
                                        progressBarDisplayHandler(true)
                                        if (myXhr.upload) myXhr.upload.addEventListener('progress',progressHandlingFunction, false);
                                        return myXhr;
                                    },
                                    url: contentUrl + '/file/',
                                    cache: false,
                                    contentType: false,
                                    processData: false,
                                    success: function(data) {
                                        $('#summernote').summernote('insertImage', data.file);
                                    },
                                    error:function (err,xhr,x){
                                        console.log({err,xhr,x})
                                        progressBarDisplayHandler(false)
                                        $.alert({title:"Failed" , content: "Oops !!, Failed to load resource, please check your internet connexion and try again"})
                                    }
                                });
                            }
                    
                            // update progress bar
                            
                            function progressHandlingFunction(e){
                                if(e.lengthComputable){
                                    progressBarValueHandler(parseInt((e.loaded / e.total) * 100))
                                    // reset progress on complete
                                    if (e.loaded === e.total) {
                                        progressBarDisplayHandler(false)
                                        progressBarValueHandler(0)
                                    }
                                }
                            }
                        }
                    }
                });

                    


              });
        }
        ,[]
    )

    return (
        <div style={{background:"white !important"}}>
            <textarea 
            id="summernote" 
            name="content" 
            ></textarea>
        </div>
    )
}
  
 
export default RichTextEditor