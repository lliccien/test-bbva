import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../list-shareholders-ui.js';

suite('ListShareholdersUi', () => {
  let el;

  teardown(() => fixtureCleanup());

  suite('default', () => {
    setup(async () => {
      el = await fixture(html` <list-shareholders-ui></list-shareholders-ui> `);
      await el.updateComplete;
    });

    test('a11y', async () => {
      await assert.isAccessible(el);
    });
  });
});
