<template lang="pug">
div.contact.section
  .section-div
    .section-title
      h2 Contact
      p I don't really have an email or anything like that - as I am a dog, but my mom does! If you like this site, you can reach out to her here.
    
    .content
      v-row.px-5
        v-col(cols=12, md=4)
          div.mx-5.info
            v-row.location(align-content="center")
              v-icon mdi-google-maps
              h4 Location:
              p St. Paul, MN
            v-row.email
              v-icon mdi-email 
              h4 Email:
              p haileyscheevel@gmail.com
              
        v-col(cols=12, md=7)
          form.pl-5(action="forms/contact.php", method="post", role="form", class="email-form")
            div.pl-5(class="row")
              div(class="col-md-6 form-group")
                input(type="text", name="name", class="form-control", id="name", placeholder="Your Name", required)
              div(class="col-md-6 form-group mt-3 mt-md-0")
                input(type="email", class="form-control", name="email", id="email", placeholder="Your Email", required)
              div(class="form-group mt-3")
                input(type="text", class="form-control", name="subject", id="subject", placeholder="Subject", required)
        
              div(class="form-group mt-3")
                textarea(class="form-control", name="message", rows="5", placeholder="Message", required)
              
              div(class="text-center")
                v-btn(type="submit", rounded, dark, color="#34b7a7") Send Message

        v-col(cols=0, md=1)


</template>

<script>

export default {
    name: 'ContactView',
    
};
</script>


