import Component from '@ember/component';
export default Component.extend({
  tagName: '',
  didInsertElement () {
    window.requestAnimationFrame(() => {
      this.set('_shouldRenderMap', true)
    })
  }
});
