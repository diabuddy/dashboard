import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('insulin-shot-plot', 'Integration | Component | insulin shot plot', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{insulin-shot-plot}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#insulin-shot-plot}}
      template block text
    {{/insulin-shot-plot}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
