describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should login', async () => {
    await element(by.id('email_input')).typeText('john@example.com');
    await element(by.id('password_input')).typeText('123456');
    await element(by.text('Login')).tap();

    await expect(element(by.id('Welcome'))).toBeVisible();
  });
});
