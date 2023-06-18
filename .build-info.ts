const fs = require("fs");

const getContent = () => {
  const getCommitHashShort = () => {
    try {
      return require("child_process")
        .execSync("git rev-parse --short HEAD")
        .toString()
        .trim();
    } catch (error) {
      return null;
    }
  };

  const getCommitHash = () => {
    try {
      return require("child_process")
        .execSync("git rev-parse HEAD")
        .toString()
        .trim();
    } catch (error) {
      return null;
    }
  };

  return {
    display: getCommitHashShort() ?? new Date(),
    version: `${getCommitHashShort() ?? "No commit"} - ${new Date()}`,
    commit: getCommitHash() ?? "No commit",
    date: new Date(),
  };
};

const generateAppBuild = () => {
  console.log("building...\n");
  try {
    fs.writeFileSync(
      "./.build-info.json",
      JSON.stringify(getContent(), null, 2)
    );
    console.log("✅ Generate `.build-info.json`");
  } catch (error) {
    console.error(error);
    throw new Error("❌ Failed to generate `.build-info.json`");
  }
};
generateAppBuild();
