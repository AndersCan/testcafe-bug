fixture `Will not fail`
    .page `http://localhost:7777/index-without-poison.html`;

test(`Should not fail before testrun with 'SyntaxError: Unexpected token ','`, async t => {
    await t.expect(true).eql(true)
});


fixture `Will fail with JavaScript/SyntaxError`
    .page `http://localhost:7777/index-with-poison.html`;

test(`Should not fail before testrun with 'SyntaxError: Unexpected token ','`, async t => {
  /**
   * Browser: Firefox 78.0 / Linux 0.0:
   * JavaScript error details:
   *   missing ) after for-loop control
   * 
   * Browser: Chrome 83.0.4103.116 / Linux 0.0
   *  JavaScript error details:
   *  SyntaxError: Unexpected token ','
   */
    await t.expect(true).eql(true)
});  

