import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import '../html-loader.js';
import { stub, assert } from 'sinon';

describe('HtmlLoader', () => {
  const mockTemplate = {
    url: './template.html',
    content: '<p>mock</p>',
  };

  beforeEach(() => {
    const fetchStub = stub(window, 'fetch');

    fetchStub.withArgs(mockTemplate.url).returns(
      Promise.resolve(
        new Response(mockTemplate.content, {
          status: 200,
          headers: { 'Content-type': 'text/html' },
        })
      )
    );

    fetchStub.returns(
      Promise.resolve(
        new Response('', {
          status: 404,
          headers: { 'Content-type': 'text/plain' },
        })
      )
    );
  });

  it('import and render given template', async () => {
    const el = await fixture(
      html`<html-loader href=${mockTemplate.url}></html-loader>`
    );

    expect(el.href).to.equal(mockTemplate.url);
    assert.calledWith(window.fetch, mockTemplate.url);
    await elementUpdated(el);
    expect(el.innerHTML).to.equal(mockTemplate.content);
  });

  it('only load template after href attribute has been set', async () => {
    /** @type {HTMLLoaderElement} */
    const el = await fixture(html`<html-loader></html-loader>`);

    assert.notCalled(window.fetch);
    await elementUpdated(el);
    expect(el.innerHTML).to.equal('');

    el.href = mockTemplate.url;
    await elementUpdated(el);

    assert.calledWith(window.fetch, mockTemplate.url);
    expect(el.innerHTML).to.equal(mockTemplate.content);
  });

  it('load fallback if fetching href failed', async () => {
    const el = await fixture(
      html`<html-loader
        href="./nope.html"
        fallback=${mockTemplate.url}
      ></html-loader>`
    );

    assert.callCount(window.fetch, 2);
    assert.calledWith(window.fetch, './nope.html');
    assert.calledWith(window.fetch, mockTemplate.url);
    await elementUpdated(el);
    expect(el.innerHTML).to.equal(mockTemplate.content);
  });

  it('render error message if fetching href failed and no fallback was available', async () => {
    const el = await fixture(
      html`<html-loader href="./nope.html"></html-loader>`
    );

    assert.calledWith(window.fetch, './nope.html');
    await elementUpdated(el);
    expect(el.firstChild).to.have.class('html-loader__error');
    expect(el.firstChild.textContent).equals('(./nope.html) 404');
  });

  it('cache templates', async () => {
    const el = await fixture(
      html`<html-loader href=${mockTemplate.url}></html-loader>`
    );
    await elementUpdated(el);
    el.href = './nope.html';
    await elementUpdated(el);
    el.href = mockTemplate.url;

    assert.calledTwice(window.fetch);
    assert.callOrder(
      window.fetch.withArgs(mockTemplate.url),
      window.fetch.withArgs('./nope.html')
    );
    await elementUpdated(el);
    expect(el.innerHTML).to.equal(mockTemplate.content);
  });

  afterEach(() => {
    window.fetch.restore();
  });
});
