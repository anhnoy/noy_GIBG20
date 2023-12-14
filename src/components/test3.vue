<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <!-- External scripts and stylesheets -->
      <script src="https://formden.com/static/cdn/formden.js"></script>
      <link rel="stylesheet" href="https://formden.com/static/cdn/bootstrap-iso.css" />
      <link rel="stylesheet" href="https://formden.com/static/cdn/font-awesome/4.4.0/css/font-awesome.min.css" />
  
      <!-- Inline CSS -->
      <style>
        .bootstrap-iso .formden_header h2,
        .bootstrap-iso .formden_header p,
        .bootstrap-iso form {
          font-family: Arial, Helvetica, sans-serif;
          color: black;
        }
        .bootstrap-iso form button,
        .bootstrap-iso form button:hover {
          color: white !important;
        }
        .asteriskField {
          color: red;
        }
      </style>
  
      <!-- HTML Form -->
      <div class="bootstrap-iso">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-12">
              <form action="https://formden.com/post/MlKtmY4x/" class="form-horizontal" method="post">
                <div class="form-group">
                  <label class="control-label col-sm-2 requiredField" for="date">
                    Date
                    <span class="asteriskField"> * </span>
                  </label>
                  <div class="col-sm-10">
                    <div class="input-group">
                      <div class="input-group-addon">
                        <i class="fa fa-calendar"></i>
                      </div>
                      <input class="form-control" id="date" name="date" placeholder="MM/DD/YYYY" type="text" />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-10 col-sm-offset-2">
                    <!-- Add a hidden input for anti-spam (honey pot) -->
                    <input name="_honey" style="display: none" type="text" />
                    <button class="btn btn-primary" name="submit" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="js">
import {  } from "vue";






</script>


  