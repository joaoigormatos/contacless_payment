const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

jest.dontMock('fs');

describe('the index.html', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });
  afterEach(() => {
    jest.resetModules();
  });
  it('must render the body', () => {
    const SUT = document.querySelector('body');
    expect(SUT).toBeTruthy();
  });
});
