/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
}
module.exports = {
  testPathIgnorePatterns: [
    './src/components/application',
    './src/components/pet',
    './src/components/petAdopt',
    './src/components/petDiagnostic',
    './src/components/users',
    './src/services/twilio',
  ]
};