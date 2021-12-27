const Generator = require("yeoman-generator");

module.exports = class SingleSpaAlpineJsGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option("projectName", {
      type: String,
    });
  }

  async getOptions() {
    const answers = await this.prompt([
      {
        type: "input",
        name: "projectName",
        message: "Project name",
        suffix: " (can use letters, numbers, dash or underscore)",
        when: !this.options.projectName,
        validate,
      },
    ]);

    Object.assign(this.options, answers, { framework: "alpinejs" });
  }
};
