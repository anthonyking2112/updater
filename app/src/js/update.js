const uaup = require('uaup-js');

const defaultStages = {
  Checking: "Checking For Updates!", // When Checking For Updates.
  Found: "Update Found!",  // If an Update is Found.
  NotFound: "No Update Found.", // If an Update is Not Found.
  Downloading: "Downloading...", // When Downloading Update.
  Unzipping: "Installing...", // When Unzipping the Archive into the Application Directory.
  Cleaning: "Finalizing...", // When Removing Temp Directories and Files (ex: update archive and tmp directory).
  Launch: "Launching..." // When Launching the Application.
};

const updateOptions = {

  gitRepo: "uaup-js", // [Required] Your Repo Name
  gitUsername: "Ben-vbg",  // [Required] Your GitHub Username.

  appName: "uaup-js", //[Required] The Name of the app archive and the app folder.
  appExecutableName: "UAUP JS.exe", //[Required] The Executable of the Application to be Run after updating.

  progressBar: document.getElementById("download"), // {Default is null} [Optional] If Using Electron with a HTML Progressbar, use that element here, otherwise ignore
  label: document.getElementById("download-label"), // {Default is null} [Optional] If Using Electron, this will be the area where we put status updates using InnerHTML
  forceUpdate: false, // {Default is false} [Optional] If the Application should be forced updated.  This will change to true if any errors ocurr while launching.
  stageTitles: defaultStages, // {Default is defaultStages} [Optional] Sets the Status Title for Each Stage
};