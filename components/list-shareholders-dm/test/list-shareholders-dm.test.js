import { html, fixture, expect, fixtureCleanup } from '@open-wc/testing';
import '../list-shareholders-dm.js';
import sinon from 'sinon';
suite('ListShareholdersDm', () => {
  let el;
  let fetchStub;

  teardown(() => fixtureCleanup());

  suite('default', () => {
    setup(async () => {
      el = await fixture(html` <list-shareholders-dm></list-shareholders-dm> `);

      fetchStub = sinon.stub(window, 'fetch');
      await el.updateComplete;
    });

    // test('a11y', async () => {
    //   await assert.isAccessible(el);
    // });

    test('fires "data-success" event when fetching data succeeds', async () => {
      const sampleData = [
        {
          NIT: '80808080',
          Nombre: 'Lucia Gaviria',
          TipoDocumento: 'CC',
          Documento: 10282952,
          Porcentaje: '25%',
        },
        {
          NIT: '80808080',
          Nombre: 'Catalina Orjuela',
          TipoDocumento: 'CC',
          Documento: 10282537,
          Porcentaje: '25%',
        },
      ];

      fetchStub.resolves(
        new Response(JSON.stringify(sampleData), { status: 200 })
      );

      const eventSpy = sinon.spy();
      el.addEventListener('data-success', eventSpy);
      await el.getData();

      expect(eventSpy).to.have.been.calledOnce;
      expect(eventSpy.args[0][0].detail).to.deep.equal(sampleData);
    });
  });
});
