<template>
  <section class="resume">
    <div class="container flex rows wrap">
      <div class="col textright">
        <article class="entry" v-for="(job, index) in Resume.jobs" :key="index">
          <Button size="tiny" type="secondary">{{job.date}}</Button>

          <div class="company">{{job.company}}</div>
          <h4>{{job.role}}</h4>
          <div class="description">{{job.description}}</div>
        </article>
      </div>
      <div class="col">
        <article class="entry" v-for="(project, index) in Resume.projects" :key="index">
          <Button size="tiny" type="secondary">{{project.date}}</Button>
          <h4>{{project.title}}</h4>
          <div class="role">{{project.subtitle}}</div>
          <div class="description">{{project.description}}</div>
        </article>
      </div>
    </div>
  </section>
</template>
<script>
import Resume from "~/static/resume.json";
import Button from "~/components/Button.vue";
export default {
  components: {
    Button
  },
  data() {
    return {
      Resume
    };
  }
};
</script>
