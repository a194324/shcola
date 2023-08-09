<template>
  <div class="col">
    <h3 class="footer__title">Contact us</h3>
    <ul class="footer__list footer__list_capitalize">
      <li>
        <p> 240 Central Park, London OR 10019</p>
      </li>
      <li>
        <p>Freephone: +1 800 559 6580</p>
        <p>Telephone: +1 959 603 6035</p>
        <p>FAX: +1 800 559 6580</p>
      </li>
      <li>
        <a  class="footer__link footer__link_red footer__link_underline" href="mailto:info@realhome.com" target="_blank">
          <p>info@realhome.com</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    footerMenuClient: {
      type: Array,
      required: true,
    },
  },
}
</script>
