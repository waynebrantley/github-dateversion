const core = require('@actions/core')

try {
    const { GITHUB_RUN_NUMBER, GITHUB_HEAD_REF, GITHUB_REF_NAME } = process.env
    const releaseBranch = core.getInput('release-branch')
    const today = new Date()
    const localVersion = `${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()}.${GITHUB_RUN_NUMBER}`
    
    // const branch = /[^/]*$/.exec(GITHUB_REF)[0]  //GITHUB_REF out of process.env
    // core.info(branch)
    const branchName = GITHUB_HEAD_REF || GITHUB_REF_NAME
    core.info(branchName)
    core.info(releaseBranch)
    if (branchName == releaseBranch)
        core.setOutput('version', localVersion)
    else
        core.setOutput('version', `${localVersion}-${branchName.substring(0, 20)}`)
} catch (error) {
    core.setFailed(error.message)
}
