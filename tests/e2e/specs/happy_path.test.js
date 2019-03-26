module.exports = {
  "Happy Path": browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible("#app", 600)
      .assert.containsText("#log", "Log")
      .click("#log")
      .waitForElementVisible("#new-log-btn", 600)
      .click("#new-log-btn")
      .waitForElementVisible("#log-title", 600)
      .setValue("#log-title", "Attention title")
      .click("#submit-log")
      .waitForElementVisible(".entry", 100)
      .end();
  }
};
