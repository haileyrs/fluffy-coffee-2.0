<template lang="pug">
div.contact.section
  .section-div
    .section-title
      v-row
        h2 Contact
        p I don't really have an email or anything like that - as I am a dog, but my mom does! If you like this site, you can reach out to her here.
    
    .container.mb-5
      v-row
        v-col(cols=12, lg=4)
          div.other-info
            v-row.location(align-content="center")
              v-col
                v-icon mdi-google-maps
                h4 Location:
                p Saint Paul, MN
            v-row.email
              v-col
                v-icon mdi-email 
                h4 Email:
                p haileyscheevel@gmail.com
            v-row
              v-col.mt-6
                v-alert(v-if="error", type="warning", color="#34b7a7", dismissable, @click="error = false") {{ errorMessage }}
                v-alert(v-if="success", type="success", color="#34b7a7", dismissable, @click="success = false") Sent!
              
        v-col(cols=12, lg=7)
          form.contact-form(ref="form")
            v-row
              v-col(cols=12, md=6)
                v-text-field(
                  v-model="name", 
                  name="from_name",
                  label="Name", 
                  :error-messages="nameErrors",
                  @input="$v.name.$touch()"
                  color="#34b7a7",
                  outlined, 
                  dense)
              v-col(cols=12, md=6)
                v-text-field(
                  v-model="email",
                  name="from_email",
                  label="Email", 
                  :error-messages="emailErrors",
                  @input="$v.email.$touch()", 
                  color="#34b7a7", 
                  outlined, 
                  dense)
            v-row 
              v-col(cols=12)
                v-text-field(
                  v-model="subject",
                  name="subject",
                  label="Subject",
                  :error-messages="subjectErrors",
                  @input="$v.subject.$touch()" 
                  color="#34b7a7", 
                  outlined, 
                  dense)
            v-row
              v-col(cols=12)
                v-textarea(
                  v-model="message",
                  name="message", 
                  label="Message", 
                  :error-messages="messageErrors", 
                  @input="$v.message.$touch()", 
                  color="#34b7a7", 
                  outlined, 
                  dense)
            .text-center
              v-btn(@click="submit", rounded, dark, color="#34b7a7") Send Message
              
</template>

<script>
import emailjs from '@emailjs/browser';
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'ContactView',
  validations() {
    return {
      name: { required },
      email: { required, email },
      subject: { required },
      message: { required }
    }
  },
  data() {
    return {
      error: false,
      errorMessage: "",
      success: false,
      email: "",
      message: "",
      name: "",
      subject: "",
      valid: false
    }
  },
  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.required && errors.push('Name is required')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.required && errors.push('Email is required')
      !this.$v.email.email && errors.push('Must be valid email format')
      return errors
    },
    subjectErrors() {
      const errors = []
      if (!this.$v.subject.$dirty) return errors
      !this.$v.subject.required && errors.push('Subject line is required')
      return errors
    },
    messageErrors() {
      const errors = []
      if (!this.$v.message.$dirty) return errors
      !this.$v.message.required && errors.push('Message is required')
      return errors
    }
  },
  methods: {
    submit() {
      this.$v.$touch()
      this.error = false;
      if (this.$v.$invalid) {
        this.error = true;
        this.errorMessage = 'Please make sure all fields are complete.'
      } else if (!this.$v.$invalid) {
        emailjs.sendForm('service_mocha_site02', 'template_ihzwzyr', this.$refs.form, '5VTvKe28nynViqK1J')
        .then((result) => {
            this.success = true;
            this.$refs.form.reset();
        }, (error) => {
            this.errorMessage = 'There was an error processing your request.';
        });
      }
    }
  }
};
</script>


